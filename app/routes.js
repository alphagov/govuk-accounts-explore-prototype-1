const express = require('express')
const router = express.Router()

const fs = require('fs')
const request = require('request').defaults({ jar: true })
const govukTopics = require('./govuk-topics')
const url = require('url')
const nunjucks = require('nunjucks')



// FLASH! AH-AH … this allows for one time showing of success banner

// Custom flash middleware -- from Ethan Brown's book, 'Web Development with Node & Express'
router.use(function(req, res, next){
    // if there's a flash message in the session request, make it available in the response, then delete it
    // ADDED FOR THIS PROTOTYPE - all of the redirecting means that we need an echo version of flash (one page behind?) hence why we're using an extra echo variable
    res.locals.sessionFlash = req.session.data.sessionFlash;
    if (req.session.data.echo) {
      delete req.session.data.echo;
    } else {
      if (req.session.data.sessionFlash != 'undefined'){
      req.session.data.echo = req.session.data.sessionFlash;
      }
    }
    console.log("session is " + req.session.data.sessionFlash + "and echo is " + req.session.data.echo );
    delete req.session.data.sessionFlash;
    next();
    // Don't forget to make changes with topBannerTemplate - unlike most of the prototype, these variables have to be manually sent to the template
});

// Add your routes here - above the module.exports line

var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);



if (!process.env.API_URL) {
  console.warn('\n\n=== ERROR ============================')
  console.warn('You must set API_URL to specify the URL of the backend API')
  console.warn('for instance: API_URL=http://localhost:3050 npm start')
  console.warn('======================================\n\n')
  process.exit(-1)
}

const API_URL = process.env.API_URL

// ---- pre-fetch all topics titles  and descriptions

let mainstreamTopics, specialistTopics
govukTopics.fetchMainstreamTopics(body => { mainstreamTopics = body })
govukTopics.fetchSpecialistTopics(body => { specialistTopics = body })

// ---- Topic pages (both mainstream and specialist)

const topicPage = function (topicType, req, res) {
  const topicSlug = req.params.topicSlug
  const url = `${API_URL}/${topicType}/${topicSlug}`
  console.log(`requesting ${url}`)
  request(url, { json: true }, (_error, result, body) => {
    body.topicSlug = topicSlug
    if (body.organisations) {
      body.organisations = body.organisations.slice(0, 5)
    }
    if (body.latest_news) {
      body.latest_news = body.latest_news.slice(0, 3)
      body.latest_news.forEach(news => {
        const d = new Date(news.public_timestamp)
        news.date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
        news.subtopic = news.subtopic === 'other' ? '' : news.subtopic.replace(/_/g, ' ')
        news.topic = news.topic === 'other' ? '' : news.topic.replace(/_/g, ' ')
      })
    }
    if (body.subtopics) {
      // Add the description of each subtopic from the appropriate topics global var
      body.subtopics = body.subtopics.map(sub => {
        console.log('SUBTOPIC')
        console.log(sub)

        // TODO: Hardcoded for now as we're only mocking one specialist topic for now
        if (sub.link === '/browse/visas-immigration/immigration-operational-guidance') {
          return { ...sub, description: 'Immigration Rules, forms and guidance for advisers' }
        }

        const topicList = topicType === 'browse' ? mainstreamTopics : specialistTopics
        return { ...sub, description: topicList.find(topic => topic._id === sub.link).description }
      })
    }
    res.render('topic', body)
  })
}


router.all('*', (req, res, next) => {
  const log = {
    method: req.method,
    url: req.url,
    data: req.session.data
  }
  console.log(JSON.stringify(log, null, 2))

  next()
})

/*
router.get('/browse/:topicSlug', function (req, res) {
  return topicPage('browse', req, res)
}) */


router.get('/topic/:topicSlug', function (req, res) {
  return topicPage('topic', req, res)
})

// ---- Mainstream subtopics

router.get('/browse/:topicSlug/:subTopicSlug', function (req, res) {
  const topicSlug = req.params.topicSlug
  const subTopicSlug = req.params.subTopicSlug
  const url = `${API_URL}/browse/${topicSlug}/${subTopicSlug}`
  console.log(`requesting ${url}`)
  request(url, { json: true }, (_error, result, body) => {
    body.topicSlug = topicSlug
    if (body.organisations) {
      body.organisations = body.organisations.slice(0, 5)
    }
    if (body.latest_news) {
      body.latest_news = body.latest_news.slice(0, 3)
      body.latest_news.forEach(news => {
        const d = new Date(news.public_timestamp)
        news.date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
        news.subtopic = news.subtopic === 'other' ? '' : news.subtopic.replace(/_/g, ' ')
        news.topic = news.topic === 'other' ? '' : news.topic.replace(/_/g, ' ')
      })
    }
    res.render('sub_topic', body)
  })
})

// ---- Specialist subtopics

router.get('/topic/:topicSlug/:subTopicSlug', function (req, res) {
  const topicSlug = req.params.topicSlug
  const subTopicSlug = req.params.subTopicSlug
  const url = `${API_URL}/topic/${topicSlug}/${subTopicSlug}`
  console.log(`requesting ${url}`)
  request(url, { json: true }, (_error, result, body) => {
    body.topicSlug = topicSlug
    if (body.subtopics) {
      body.subtopics = body.subtopics.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
        if (a.title > b.title) return 1
        return 0
      })
    }
    res.render('sub_topic', body)
  })
})

// ----------------------

router.get('/topic', function (req, res) {
  const url = `${API_URL}/topic`
  console.log(`requesting ${url}`)
  request(url, { json: true }, (error, results, body) => {
    if (error) throw error
    res.render('topics', body)
  })
})

router.get('/', function (req, res) {
  res.render('index')
})

router.all('*', (req, res, next) => {
req.session.data['currentURL'] = req.url;
next();
})

// ==================================================
// All accounts stuff starts here



// getting to this page from the form redirect
router.post('/tasks-router', function (req, res) {
  req.session.data.sessionFlash = 'settings';
  return res.redirect('/tasks')
})

// Tasks page
router.all('/tasks', function (req, res) {
  res.render('tasks')
})

router.get('/prototype-admin/home-signed-out', function (req, res) {
  req.session.data.signedIn = false
  res.redirect('/')
})



router.get('/prototype-admin/log-in-unverified', function (req, res) {
  req.session.data.signedIn = true
  req.session.data.emailUnverified = true
  res.redirect('/account/manage-account')
})

router.get('/prototype-admin/log-in-verified', function (req, res) {
  req.session.data.signedIn = true
  req.session.data.emailUnverified = null
  res.redirect('/account/manage-account')
})

router.get('/layout_unbranded', function (req, res) {
  res.render('layout_unbranded')
})

//interrupt

// Sign up routes
router.get('/account/interrupt', function (req, res) {
  res.render('account/interrupt')
})


// Sign in Routes
router.get('/auth/sign-in-or-create', function (req, res) {
  res.render('auth/sign-in-or-create')
})



router.post('/auth/sign-in-or-create/router', function (req, res) {
  if (req.session.data['sign-in-or-create'] && (req.session.data['sign-in-or-create'] == "Sign in") ){
    delete req.session.data['sign-in-or-create'];
    return res.redirect('/auth/sign-in');

  } else if (req.session.data['sign-in-or-create']){
  delete req.session.data['sign-in-or-create'];
  return res.redirect('/auth/create');

  } else {
  return res.redirect('/auth/sign-in-or-create');
}

})


router.get('/auth/sign-in', function (req, res) {
  var temp = req.query
  res.render('auth/sign-in', {_email: temp.email})
})

router.get('/auth/password', function (req, res) {

  res.render('account/password')
})

router.post('/auth/password', function (req, res) {

  res.render('auth/password')
})


router.get('/auth/2fa', function (req, res) {

  res.render('auth/2fa')
})

router.all('/sign-in/set-cookie', function (req, res) {
  res.redirect('/account/confirm')
})

router.get('/sign-in', function (req, res) {
  res.render('sign-in')
})

router.get('/help/sign-in', function (req, res) {
  res.render('sign-in')
})

router.get('/auth/email-confirmation', function (req, res) {
  res.render('auth/email-confirmation')
})

router.get('/auth/create', function (req, res) {
  res.render('auth/create')
})

router.get('/auth/no-account', function (req, res) {
  res.render('auth/no-account')
})

router.post('/auth/no-account', function (req, res) {
  res.render('auth/no-account')
})


// Verification code email
router.post('/auth/check-email/router', function (req, res) {

if (req.session.data["get-emails"]=="Yes") {
console.log("'Confirmation email' sending");
  notify.sendEmail(
    // Template ID
    'fde4cb3e-3811-4f13-9b27-b93cf8956013',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.session.data["mailinator-email"] + "@mailinator.com"
  );
} else{
  console.log("'Confirmation email' surpressed - change email setting to yes to send");
}

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/auth/check-email');

});


router.get('/auth/check-email', function (req, res) {
  res.render('auth/check-email')
})

router.post('/auth/check-email', function (req, res) {
  res.render('auth/check-email')
})

router.get('/auth/create-password', function (req, res) {
  res.render('auth/create-password')
})

router.get('/auth/enter-phone', function (req, res) {
  res.render('auth/enter-phone')
})

router.get('/auth/check-phone', function (req, res) {
  res.render('auth/check-phone')
})

// Welcome email
router.all('/auth/check-phone/router', function (req, res) {

if (req.session.data["get-emails"]=="Yes") {
  console.log("'Welcome email' sending");
  notify.sendEmail(
    // Template ID
    'dfd9ba0e-d063-43fb-9774-4cb18f8d4c1a',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.session.data["mailinator-email"] + "@mailinator.com"
  );
} else {

  console.log("'Welcome email' surpressed - change email setting to yes to send");
}
  // This is the URL the users will be redirected to once the email
  // has been sent
  req.session.data["created"] = true;
  res.redirect('/auth/created');

});

router.get('/auth/created', function (req, res) {
  res.render('auth/created')
})

router.get('/account/control-how-we-use-information-about-you', function (req, res) {
  res.render('account/control-how-we-use-information-about-you')
})

router.all('/auth/account-created', function (req, res) {
  res.redirect('/account/confirm')
})

router.post('/account/confirm', function (req, res) {
  res.render('account/confirm')
})

router.get('/account/confirm', function (req, res) {
  res.render('account/confirm')
})


// Merged accounts email - people only get this router basd on logic in the confirm page
router.all('/account/confirm/router/merge', function (req, res) {
if (req.session.data["get-emails"]=="Yes") {
  console.log("'Merging emails' sending")
  notify.sendEmail(
    // Template ID
    '4bd299fb-e82d-46f9-8178-2cb31d904836', // merged accounts email
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.session.data["mailinator-email"] + "@mailinator.com"
  );
} else{
  console.log("'Merged email' surpressed - change email setting to yes to send");
}
  // This is the URL the users will be redirected to once the email
  // has been sent
  return res.redirect('/account/router-add');

});




router.all('/account/router-add', function (req, res) {
  var tempSave = req.session.data.save;

  if (!req.session.data.notifications) {
    req.session.data.notifications = [];
  }

  if (!req.session.data.notifications.includes(tempSave)) {
    req.session.data.notifications.unshift(tempSave);
  }

//  delete req.session.data.save;

  if (!req.session.data.signedIn) {
    return res.redirect('/account/interrupt')
  } else {

      if (req.session.data["get-emails"]=="Yes") {// RAG subscription email
        console.log("'" + req.session.data.title +  "'" + "subscription email sending ");
    notify.sendEmail(
      // Template ID
      'fd9e5160-1c0e-4e3b-92d8-2a461af8f3ae', // subscriptions email
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      req.session.data["mailinator-email"] + "@mailinator.com",
          {
        personalisation: {
          'page': req.session.data.title
            }
          }
          );
        } else {
          console.log("'" + req.session.data.title +  "'" + " subcription email surpressed - change email setting to yes to send");

        }


    req.session.data.sessionFlash = 'added';
    return res.redirect(tempSave + '#notification-success')
  }
})


/* END OF SIGN UP FLOWS */



// sorting hat
router.get('/account/other-accounts', function (req, res) {
  res.render('sign-in')
})


// Sign out routes
router.get('/sign-out', function (req, res) {
  if (req.session.data.signedIn) {
    delete req.session.data.signedIn
  }
  res.redirect('/auth/signed-out')
})

// account home



router.get('/account/index', function (req, res) {
  res.render('account/index')
})

router.get('/email/manage/index', function (req, res) {
  res.render('email/manage/index', req  )
})

router.get('/account/manage-account', function (req, res) {
  res.render('account/manage-account', req )
})

router.get('/account/security', function (req, res) {
  res.render('account/security', req )
})

router.get('/auth/signed-out', function (req, res) {
  res.render('auth/signed-out', req )
})


// Router magic
router.all('/account/router-remove', function (req, res) {
  if (req.session.data.remove) {
    var tempRemove = req.session.data.remove;
    delete req.session.data.remove;

    req.session.data.notifications = req.session.data.notifications.filter(function (v, index) { return v !== tempRemove });

    if (!req.session.data.signedIn) {
      return res.redirect('/account/interrupt')
    } else {

      req.session.data.sessionFlash = 'removed';

      return res.redirect(tempRemove + '#notification-success')
    }
  }
})



router.get('/includes/print-notifications', function (req, res) {
  res.render('includes/print-notifications')
})

router.get('/includes/banner', function (req, res) {
  res.render('includes/banner')
})

router.post('/search/router', function (req, res) {
  var string = req.session.data['keywords'].replace(/ /g, '+');
  res.redirect('/search/all?keywords=' + string + '&content_purpose_supergroup%5B%5D=services&content_purpose_supergroup%5B%5D=guidance_and_regulation&order=relevance')
})

router.get('/prototype-admin/clear-data', function (req, res) {
    res.render('prototype-admin/clear-data')
  }
)
router.get('/prototype-admin/clear-data-success', function (req, res) {
    res.render('prototype-admin/clear-data-success')
  }
)


/// email stuff


router.get('/email/manage/authenticate', function (req, res) {
  res.render('email/manage/authenticate')
})


router.post('/email/manage/authenticate-2', function (req, res) {
  res.render('email/manage/authenticate-2')
})

router.get('/email/manage/authenticate-2', function (req, res) {
  res.render('email/manage/authenticate-2')
})


router.post('/account/have-govuk-account', function (req, res) {
  res.render('account/have-govuk-account')
})

router.get('/account/have-govuk-account', function (req, res) {
  res.render('account/have-govuk-account')
})


router.get('/email/subscriptions/frequency', function (req, res) {
  res.render('email/subscriptions/frequency')
})

router.post('/email/subscriptions/frequency', function (req, res) {
  res.render('email/subscriptions/frequency')
})

router.get('/email/subscriptions/verify', function (req, res) {
  res.render('email/subscriptions/verify')
})


router.post('/email/subscriptions/verify', function (req, res) {
  res.render('email/subscriptions/verify')
})

router.get('/help/get-emails-about-updates-to-govuk', function(req, res){
  res.render('help/get-emails-about-updates-to-govuk')
})


// notify backup emailAddress

router.get('/notify/confirm', function(req, res){
res.render('notify/confirm')


})


router.get('/notify/welcome', function(req, res){
res.render('notify/welcome')


})

router.get('/notify/merged', function(req, res){
res.render('notify/merged')
})

router.get('/notify/subscribed', function(req, res){
res.render('notify/subscribed')
})

router.get('/notify/sms', function(req, res){
res.render('notify/sms')
})



// All accounts routes end here
// ==================================================

// ==================================================
// All other URLs

// Modifies the body of all pages returned from gov.uk to add the Explore and Accounts elements
const augmentedBody = function (req, response, body) {
  const headerTemplate = fs.readFileSync('app/views/explore-header.html', 'utf8')
  const headerString = nunjucks.renderString(headerTemplate, { req, signedIn: req.session.data.signedIn })

  const headerStringWithCss = `
  <link href="/public/stylesheets/explore-header.css" media="all" rel="stylesheet" type="text/css" />
  <link href="/public/stylesheets/explore-govuk-overrides.css" media="all" rel="stylesheet" type="text/css" />
  <link href="/public/stylesheets/accounts.css" media="all" rel="stylesheet" type="text/css" />`

  const footerTemplate = fs.readFileSync('app/views/explore-footer.html', 'utf8')
  const urTasksTemplate = fs.readFileSync('app/views/includes/ur-tasks.html', 'utf8')
  const urTasksString = nunjucks.renderString(urTasksTemplate);
  const notificationsBase = fs.readFileSync('app/views/includes/print-notifications.html', 'utf8')
  const notificationsTemplate = nunjucks.renderString(notificationsBase, { signedIn: req.session.data.signedIn, currentURL: req.url, notifications: req.session.data.notifications })

// new version of email only
  const emailUpdatesBase = fs.readFileSync('app/views/includes/email-updates.html', 'utf8')
  const emailUpdates= nunjucks.renderString(emailUpdatesBase, { signedIn: req.session.data.signedIn, currentURL: req.url, notifications: req.session.data.notifications })


  const successHTML = fs.readFileSync('app/views/includes/success.html', 'utf8')
  const successTemplate = nunjucks.renderString(successHTML,
                                                  {

                                                  sessionFlash: req.session.data.sessionFlash, echo: req.session.data.echo
                                                  })

  const topBannerHTML = fs.readFileSync('app/views/includes/banner.html', 'utf8')
  const topBannerTemplate = nunjucks.renderString(topBannerHTML,
                                                  {

                                                  sessionFlash: req.session.data.sessionFlash, echo: req.session.data.echo
                                                  })

const searchBase = fs.readFileSync('app/views/includes/search-sign-in.html', 'utf8')
const searchHTML = nunjucks.renderString(searchBase, { keywords: req.session.data.keywords, page: req.session.data.page } )



  const pageURL = req.url // this is a hack to get a unique identifer on each page

  // Make all src and ref attributes absolute, or the server will try to
  // fetch its own version

// this is the current updates end part that we'll search for and then replace - this workaround is because of how we've set up this prototype
const currentUpdates = '<a href="#history" class="gem-c-metadata__definition-link govuk-!-display-none-print" data-track-category="content-history" data-track-action="see-all-updates-link-clicked" data-track-label="history">See all updates</a></dd>'

const updateHistory = '<a href="#full-history" class="app-c-published-dates__toggle govuk-link" data-controls="full-history" data-expanded="false" data-toggled-text="- hide all updates">+ show all updates</a>'

  return body
    .replace(/(href|src)="\//g, '$1="https://www.gov.uk/')
    .replace(/<title lang="en">/, '<title lang="en">' + successTemplate)
    .replace(/<body( class=")*?/, '<body class="explore-body ' + pageURL + '"')
    .replace(/<header[^]+?<\/header>/, headerString)
    .replace('</head>', headerStringWithCss + '</head>')
      .replace(/<main role="main" id="content" class="detailed-guide" lang="en">/, topBannerTemplate + '<main role="main" id="content" class="detailed-guide" lang="en">')

    .replace(/<main role="main" id="content" class="publication" lang="en">/, topBannerTemplate + '<main role="main" id="content" class="publication" lang="en">')

    .replace(/<footer[^]+?<\/footer>/, footerTemplate + urTasksString)

    .replace(/<a(.*) href="#history"[^]+?<\/a>/, currentUpdates + emailUpdates )
    .replace(/<a href="#full-history"[^]+?<\/a>/, updateHistory + emailUpdates )

/*    .replace(/<div class="gem-c-print-link[^]+?<\/div>/, notificationsTemplate) */
/*    .replace(/<div class="gem-c-print-link[^]+?<\/div>/, notificationsTemplate) */ // hack to get bottom of page
    .replace(
      '<div class="govuk-header__container govuk-width-container">',
      '<div class="govuk-header__container govuk-header__container--old-page govuk-width-container">')

    .replace(/<\/body>/, '<script src="/public/javascripts/explore-header.js"></script><script src="/public/javascripts/account.js"></script>\n</body>')
    .replace(/<a(.*) href\s*=\s*(['"])\s*(https:)?\/\/www.gov.uk\//g, '<a $1 href=$2/')
    .replace(/<div id="js-results">\s*<div class="finder-results js-finder-results" data-module="gem-track-click">\s*<ul class="gem-c-document-list gem-c-document-list--no-underline">/, searchHTML )


}

// Constructs the URL to get the page body from on gov.uk
const govUkUrl = function (req) {
  var urlParts = new URL(req.url, 'https://www.gov.uk')
  var query = urlParts.search
  return 'https://www.gov.uk' + req.path + (query ? query : '')
}





router.get('/*', function (req, res) {


  request(govUkUrl(req), function (error, response, body) {
    if (error) throw error
    if (response.headers['content-type'].indexOf('application/json') !== -1) {
      res.json(JSON.parse(body))
    } else {
      res.send(augmentedBody(req, response, body))
    }
  })
})

router.post('/*', function (req, res) {
  request.post({
    url: govUkUrl(req),
    followAllRedirects: true,
    formData: req.body
  }, function (error, response, body) {
    if (error) throw error
    res.send(augmentedBody(req, response, body))
  })
})





module.exports = router
