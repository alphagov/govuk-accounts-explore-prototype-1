const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const fs = require('fs-extra') // needed to import the json data
const path = require("path")
const useragent = require('express-useragent')

// GOV Notify integration - ask Matt F for the API key if you need it
var NotifyClient = require('notifications-node-client').NotifyClient,
  notify = new NotifyClient(process.env.NOTIFYAPIKEY)

// Load JSON data from file ----------------------------------------------------
function loadJSONFromFile(fileName, path = 'app/data/') {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

// PYI Hub page
// TODO Make dynamic listing on this page
router.post("/pyi", function (req, res) {
  let prototype = {} || req.session.data['prototype'] // set up if doesn't exist
  prototype.version = req.session.data.version // pulls the value from the button
  req.session.data['prototype'] = prototype // write back these values into the session data
  res.redirect('pyi/' + prototype.version + '/service-start') // go to the start page
})

// #### PYI MVP ROUTING ####

router.post('/pyi/mvp/address-check', function (req, res) {
  const over3 = req.session.data['lived-3']
  if (over3 === 'yes') {
    res.redirect('fraud-check')
  } else {
    res.redirect('address-postcode-prev')
  }
})

router.post('/pyi/mvp/address-error-choice-post', function (req, res) {
  const errorchoice = req.session.data['error-choice']
  if (errorchoice === 'continue') {
    res.redirect('address-manual-current')
  } else {
    res.redirect('address-postcode-current')
  }
})

router.post('/pyi/mvp/address-picker-current-post', function (req, res) {
  const address = req.session.data['current-address']
  if (address === 'address1') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = ''
    req.session.data['address-house-name-current'] = 'Oxford House'
    req.session.data['address-street-current'] = 'Oxford Row'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address2') {
    req.session.data['address-flat-number-current'] = 'Office 14'
    req.session.data['address-house-number-current'] = ''
    req.session.data['address-house-name-current'] = ''
    req.session.data['address-street-current'] = 'New Station St'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address3') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '38'
    req.session.data['address-house-name-current'] = ''
    req.session.data['address-street-current'] = 'Park Square North'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address4') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '41'
    req.session.data['address-house-name-current'] = 'Lion House'
    req.session.data['address-street-current'] = 'York Place'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address5') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '1'
    req.session.data['address-house-name-current'] = 'Whitehall Quay'
    req.session.data['address-street-current'] = 'Whitehall Road'
    req.session.data['address-city-current'] = 'Leeds'
  }

  res.redirect('address-manual-current')
})

router.post('/pyi/mvp/address-picker-prev-post', function (req, res) {
  const address = req.session.data['previous-address']
  if (address === 'address1') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = ''
    req.session.data['address-house-name-prev'] = 'Oxford House'
    req.session.data['address-street-prev'] = 'Oxford Row'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address2') {
    req.session.data['address-flat-number-prev'] = 'Office 14'
    req.session.data['address-house-number-prev'] = ''
    req.session.data['address-house-name-prev'] = ''
    req.session.data['address-street-prev'] = 'New Station St'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address3') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '38'
    req.session.data['address-house-name-prev'] = ''
    req.session.data['address-street-prev'] = 'Park Square North'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address4') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '41'
    req.session.data['address-house-name-prev'] = 'Lion House'
    req.session.data['address-street-prev'] = 'York Place'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address5') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '1'
    req.session.data['address-house-name-prev'] = 'Whitehall Quay'
    req.session.data['address-street-prev'] = 'Whitehall Road'
    req.session.data['address-city-prev'] = 'Leeds'
  }
  res.redirect('address-manual-prev')
})

router.post('/pyi/mvp/address-manual-current-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {} // set up if doesn't exist
  prototype.prev = 'manual'

  let movedinyear = req.session.data['address-year-current-year']

  let today = new Date()
  let month = today.getMonth()     // 10 (Month is 0-based, so 10 means 11th Month)
  let year = today.getFullYear()  // 2020

  console.log('current month: ' + month)
  console.log('current year: ' + year)
  console.log('moved in year: ' + movedinyear)

  let movedinyearadj = Number(movedinyear) + 1
  console.log('moved in year - adjusted: ' + movedinyearadj)
  // compare current date to date submitted
  // if in jan/feb/mar chaeck the dates
  if (month <= 2) {
    // see if it was previous year
    if (movedinyear.toString() >= year.toString()) {
      console.log('verdict: need previous address')
      prototype.needPrevAddress = 'true'
    } else {
      console.log('verdict: don\'t need previous address - year didn\'t match')
      prototype.needPrevAddress = 'false'
    }
  } else {
    if (movedinyear.toString() === year.toString()) {
      console.log('verdict: need previous address')
      prototype.needPrevAddress = 'true'
    } else {
      console.log('verdict: don\'t need previous address - year didn\'t match')
      prototype.needPrevAddress = 'false'
    }
  }

  prototype.prev = 'picker'

  req.session.data['prototype'] = prototype // write back these values into the session data
  res.redirect('address-check')
})

router.post('/pyi/mvp/address-manual-prev-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {} // set up if doesn't exist
  console.log('verdict: don\'t need previous address - year didn\'t match')
  prototype.needPrevAddress = 'false'
  prototype.prev = 'picker'
  req.session.data['prototype'] = prototype // write back these values into the session data
  res.redirect('address-check')
})

// DCS check

// save error code in query string to data store
router.get('/pyi/mvp/passport-details', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  let errorCode = req.query.errorcode
  prototype.errorcode = errorCode

  req.session.data['prototype'] = prototype

  return res.render('pyi/mvp/passport-details', {
    'errorcode': errorCode
  })
})

// add in route for dcs errors
router.post('/pyi/mvp/passport-details-post', function (req, res) {
  if (req.session.data['errorcode'] && req.session.data['errorcode'] !== '') {
    res.redirect('error')
  } else {
    res.redirect('address-postcode-current')
  }
})

// Fraud check

router.get('/pyi/mvp/fraud-check', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  let errorCode = req.query.errorcode
  prototype.errorcode = errorCode

  req.session.data['prototype'] = prototype

  return res.render('pyi/mvp/fraud-check', {
    'errorcode': errorCode
  })
})

// add in route for fraud errors
router.post('/pyi/mvp/fraud-checking-post', function (req, res) {
  if (req.session.data['cfcf'] === 'yes') {
    res.redirect('error?errorcode=pyi-no-match')
  } else if (req.session.data['errorcode'] && req.session.data['errorcode'] !== '') {
    res.redirect('error?errorcode=' + req.session.data['errorcode'])
  } else {
    res.redirect('kbv-start')
  }
})

// load in errors on error page
router.get('/pyi/mvp/error', function (req, res) {
  let prototype = req.session.data['prototype'] || {} // set up if doesn't exist

  // pull in JSON data file for MVP errors
  if (!req.session.data['errors']) {
    let idvFile = 'errors-pyi-mvp.json'
    let path = 'app/data/'
    req.session.data['errors'] = loadJSONFromFile(idvFile, path)
  }
  let index = 0
  // check if there is a query string from someone using devmode

  if (req.query.errorcode) {
    var error = req.query.errorcode
  } else if (prototype.errorcode) {
    var error = prototype.errorcode
  } else {
    var error = 'pyi-technical'
  }

  // if the query is there override all other logic
  if (error) {
    index = req.session.data.errors.pyi.map(e => e.errorcode).indexOf(error)
    console.log(req.session.data.errors.pyi.map(e => e.errorcode).indexOf(error))
  }
  // grab the items we need to display and make the form work
  let errorcode = req.session.data.errors.pyi[index].errorcode
  let options = req.session.data.errors.pyi[index].options
  let heading = req.session.data.errors.pyi[index].heading
  let reason = req.session.data.errors.pyi[index].reason
  let subheading = req.session.data.errors.pyi[index].subheading
  let option1Text = req.session.data.errors.pyi[index].option1Text
  let option1Value = req.session.data.errors.pyi[index].option1Value
  let option2Text = req.session.data.errors.pyi[index].option2Text
  let option2Value = req.session.data.errors.pyi[index].option2Value
  let buttonText = req.session.data.errors.pyi[index].buttonText
  let contactText = req.session.data.errors.pyi[index].contactText
  let contactLink = req.session.data.errors.pyi[index].contactLink
  let total = req.session.data.errors.pyi.length

  return res.render('pyi/mvp/error', {
    'errorcode': errorcode,
    'options': options,
    'heading': heading,
    'reason': reason,
    'subheading': subheading,
    'option1Text': option1Text,
    'option1Value': option1Value,
    'option2Text': option2Text,
    'option2Value': option2Value,
    'buttonText': buttonText,
    'contactText': contactText,
    'contactLink': contactLink,
    'total': total
  })
})

// on the kbv spinner
router.post('/pyi/mvp/error-choice-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  let destination = req.session.data['destination']

  // check if we need to route to an error scenario
  // MVP has limited choice in return reasons
  if (destination === 'go-back-address') {
    res.redirect('address-postcode-current')
  } else if (destination === 'return-technical') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (destination === 'return-bail') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (destination === 'return-nomatch') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (destination === 'return-fraud') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (destination === 'return-core') {
      res.redirect('/pyi/mvp/error?errorcode=pyi-kbv-fail')
  } else if (destination === 'go-back-kbv') {
    // pull back the previous and current question codes from the data store
    let kbvNext = req.session.data['kbvNext']
    // work out what the next unanswered question is
    target = 'kbv-question?q=' + kbvNext
    res.redirect(target)
  } else if (destination === 'return-gov-uk') {
    req.session.data['reason'] = 'abandon'
    res.redirect('')
  }
})

// on the kbv spinner
router.post('/pyi/mvp/kbv-check', function (req, res) {
  let prototype = req.session.data['prototype'] || {}

  // pull in JSON data file
  // delete req.session.data['kbvs']

  let idvFile = 'kbvs-experian-mvp.json'
  let path = 'app/data/'
  req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data.kbvs.questions.length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  res.redirect('kbv-checking')
})

// KBV question picker - runs after spinner - creates a list of questions and stores them
router.post('/pyi/mvp/kbv-question-picker', function (req, res) {

  let prototype = req.session.data['prototype'] || {}

  // pull in JSON data file
  // delete req.session.data['kbvs']

  let idvFile = 'kbvs-experian-mvp.json'
  let path = 'app/data/'
  req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data.kbvs.questions.length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  // look for overrides from query string
  // use these if they exist - otherwise create some
  let kbvGroup = []
  if (req.session.data['pyikbv']) {
    let override = req.session.data['pyikbv']
    // turn string into an array
    var forcekbv = override.split(',')
    console.log('forced kbvs: ' + forcekbv)
    kbvGroup.push(forcekbv)
  } else {
    // create some question groupings
    var kbvGroupings = [['Q00016', 'Q00042', 'Q00068', 'Q00050']]
    kbvGroup = kbvGroupings
  }
  console.log(kbvGroup)

  // pick a random number, no higher than the total kbv groups and use it to select an array item
  let chosenKbvGroup = kbvGroup[Math.floor(Math.random() * kbvGroup.length)]

  // move the chosen values into a new object to track progress
  const kbvTracker = {}
  for (const key of chosenKbvGroup) {
    // set all questions to false
    kbvTracker[key] = false
  }

  // push back the tracker object to the data store
  req.session.data['kbvtracker'] = kbvTracker

  let kbvNext = Object.keys(kbvTracker)[0]
  req.session.data['kbvNext'] = kbvNext

  // redirect to the first question

  target = 'kbv-question?q=' + Object.keys(kbvTracker)[0]

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// KBV questions - find next question or go to spinner page
router.post('/pyi/mvp/kbv-question-answered', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'Q00016': false, 'Q00042': false, 'Q00068': false, 'Q00050': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''
  let kbvNext = Object.keys(kbvTracker)[index+1]
  req.session.data['kbvNext'] = kbvNext

  if (Object.keys(kbvTracker)[index+1] === 'Q00000') {
    target = 'kbv-checking'
  } else {
    // is it the last question?
    if (index === questions.length -1) {
      // go to spinner page
      target = 'success'
    } else {
      // get the next question
      target = 'kbv-question?q=' + kbvNext
    }
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)

})
// KBV escape warning
router.post('/kbv-escape-warning', function (req, res) {
  const answerkbv = req.session.data['answer-kbv']
  // pull back the previous and current question codes from the data store
  let kbvNum = req.session.data['kbvNum']
  let kbvNext = req.session.data['kbvNext']

  // work out what the next unanswered question is

  target = '/pyi/mvp/kbv-question?q=' + kbvNext

  if (answerkbv === 'yes') {
    res.redirect(target)
  } else {
    res.redirect('/pyi/mvp/error?errorcode=pyi-kbv-fail')
  }
})

// KBV questions resume after error
router.post('/pyi/mvp/kbv-question-resumed', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'Q00016': false, 'Q00042': false, 'Q00068': false, 'Q00050': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'success'
  } else {
    // check if it the third question
    target = 'kbv-question?q=' + Object.keys(kbvTracker)[index+1]
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// pass data to KBV question page
router.get('/pyi/mvp/kbv-question', function (req, res) {
  // let index = '0

  // pull in JSON data file if someone jumps directly to this page
  if (!req.session.data['kbvs']) {
    let idvFile = 'kbvs-experian-mvp.json'
    let path = 'app/data/'
    req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)
  }
  let index = 0
  // check if there is a query string from someone using devmode
  const questionCode = req.query.q
  // if the query is there override all other logic
  if (questionCode) {
    index = req.session.data.kbvs.questions.map(e => e.code).indexOf(questionCode)
    // console.log(req.session.data.kbvs.questions.map(e => e.code).indexOf('high4'))
  }

  // check for backwards movements in the KBVs and show error if caught
  let backlinkalert = 'false'
  // look for the question requested and see if it been answered already

  if (req.session.data['kbvtracker']) {
    // grab question tracker object with list of queued questions
    const kbvTracker = req.session.data['kbvtracker']
    // loop through the object and compare the requested question again the ones in the tracker
    const keys = Object.keys(kbvTracker)
    keys.forEach((key, index) => {
      if (`${key}` === questionCode && `${kbvTracker[key]}` === 'true'){
        console.log('key matched')
        backlinkalert = 'true'
      }
    })
  }

  // route
  if (backlinkalert === 'true') {
    let question = req.session.data.kbvs.questions[index].newquestion
    let code = req.session.data.kbvs.questions[index].code
    req.session.data.prototype.errorcode = 'pyi-kbv-back'
    res.redirect('/pyi/mvp/error')
  } else {
    // grab the items we need to display and make the form work
    let question = req.session.data.kbvs.questions[index].newquestion
    let code = req.session.data.kbvs.questions[index].code
    let hint = req.session.data.kbvs.questions[index].hinttext
    let option1 = req.session.data.kbvs.questions[index].option1
    let option2 = req.session.data.kbvs.questions[index].option2
    let option3 = req.session.data.kbvs.questions[index].option3
    let option4 = req.session.data.kbvs.questions[index].option4
    let option5 = req.session.data.kbvs.questions[index].option5
    let option6 = req.session.data.kbvs.questions[index].option6
    let total = req.session.data.kbvs.questions.length

    return res.render('pyi/mvp/kbv-question', {
      'question': question,
      'code': code,
      'hint': hint,
      'option1': option1,
      'option2': option2,
      'option3': option3,
      'option4': option4,
      'option5': option5,
      'option6': option6,
      'total': total
    })
  }
})

router.get('/pyi/mvp/kbv-start', function (req, res) {
  let backlinkalert = 'false'
  res.locals.prevURL = req.get('Referrer')
  var referer = 'notsafe'

  // if coming at the kbv from the start let the user see the start page
  if (req.get('Referrer') === 'http://localhost:3000/pyi/mvp/fraud-check' || req.get('Referrer') === 'https://gds-identity.herokuapp.com/pyi/mvp/fraud-check' || req.get('Referrer') === 'https://gds-identity-ur.herokuapp.com/pyi/mvp/fraud-check') {
    referer = 'safe'
  }

  console.log('prev page: ' + req.get('Referrer'))

  if (req.session.data['kbvtracker'] && referer !== 'safe') {
    backlinkalert = 'true'
  }

  if (backlinkalert === 'true') {
    req.session.data.prototype.errorcode = 'pyi-kbv-back'
    res.redirect('/pyi/mvp/error')
  } else {
    return res.render('pyi/mvp/kbv-start')
  }
})

// Fail KBV and go back to service
router.post('/pyi/mvp/kbvfail-route', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  req.session.data['reason'] = 'abandon'
  res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
})

// #### PYI V11 ROUTING ####

router.post('/pyi/v11/address-check', function (req, res) {
  const over3 = req.session.data['lived-3']
  if (over3 === 'yes') {
    res.redirect('fraud-check')
  } else {
    res.redirect('address-postcode-prev')
  }
})

router.post('/pyi/v11/address-error-choice-post', function (req, res) {
  const errorchoice = req.session.data['error-choice']
  if (errorchoice === 'continue') {
    res.redirect('address-manual-current')
  } else {
    res.redirect('address-postcode-current')
  }
})

router.post('/pyi/v11/address-picker-current-post', function (req, res) {
  const address = req.session.data['current-address']
  if (address === 'address1') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = ''
    req.session.data['address-house-name-current'] = 'Oxford House'
    req.session.data['address-street-current'] = 'Oxford Row'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address2') {
    req.session.data['address-flat-number-current'] = 'Office 14'
    req.session.data['address-house-number-current'] = ''
    req.session.data['address-house-name-current'] = ''
    req.session.data['address-street-current'] = 'New Station St'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address3') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '38'
    req.session.data['address-house-name-current'] = ''
    req.session.data['address-street-current'] = 'Park Square North'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address4') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '41'
    req.session.data['address-house-name-current'] = 'Lion House'
    req.session.data['address-street-current'] = 'York Place'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address5') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '1'
    req.session.data['address-house-name-current'] = 'Whitehall Quay'
    req.session.data['address-street-current'] = 'Whitehall Road'
    req.session.data['address-city-current'] = 'Leeds'
  }

  res.redirect('address-manual-current')
})

router.post('/pyi/v11/address-picker-prev-post', function (req, res) {
  const address = req.session.data['previous-address']
  if (address === 'address1') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = ''
    req.session.data['address-house-name-prev'] = 'Oxford House'
    req.session.data['address-street-prev'] = 'Oxford Row'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address2') {
    req.session.data['address-flat-number-prev'] = 'Office 14'
    req.session.data['address-house-number-prev'] = ''
    req.session.data['address-house-name-prev'] = ''
    req.session.data['address-street-prev'] = 'New Station St'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address3') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '38'
    req.session.data['address-house-name-prev'] = ''
    req.session.data['address-street-prev'] = 'Park Square North'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address4') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '41'
    req.session.data['address-house-name-prev'] = 'Lion House'
    req.session.data['address-street-prev'] = 'York Place'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address5') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '1'
    req.session.data['address-house-name-prev'] = 'Whitehall Quay'
    req.session.data['address-street-prev'] = 'Whitehall Road'
    req.session.data['address-city-prev'] = 'Leeds'
  }
  res.redirect('address-manual-prev')
})

router.post('/pyi/v11/address-manual-current-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {} // set up if doesn't exist
  prototype.prev = 'manual'

  let movedinyear = req.session.data['address-year-current-year']

  let today = new Date()
  let month = today.getMonth()     // 10 (Month is 0-based, so 10 means 11th Month)
  let year = today.getFullYear()  // 2020

  console.log('current month: ' + month)
  console.log('current year: ' + year)
  console.log('moved in year: ' + movedinyear)

  let movedinyearadj = Number(movedinyear) + 1
  console.log('moved in year - adjusted: ' + movedinyearadj)
  // compare current date to date submitted
  // if in jan/feb/mar chaeck the dates
  if (month <= 2) {
    // see if it was previous year
    if (movedinyear.toString() >= year.toString()) {
      console.log('verdict: need previous address')
      prototype.needPrevAddress = 'true'
    } else {
      console.log('verdict: don\'t need previous address - year didn\'t match')
      prototype.needPrevAddress = 'false'
    }
  } else {
    if (movedinyear.toString() === year.toString()) {
      console.log('verdict: need previous address')
      prototype.needPrevAddress = 'true'
    } else {
      console.log('verdict: don\'t need previous address - year didn\'t match')
      prototype.needPrevAddress = 'false'
    }
  }

  prototype.prev = 'picker'

  req.session.data['prototype'] = prototype // write back these values into the session data
  res.redirect('address-check')
})

router.post('/pyi/v11/address-manual-prev-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {} // set up if doesn't exist
  console.log('verdict: don\'t need previous address - year didn\'t match')
  prototype.needPrevAddress = 'false'
  prototype.prev = 'picker'
  req.session.data['prototype'] = prototype // write back these values into the session data
  res.redirect('address-check')
})

// DCS check

// save error code in query string to data store
router.get('/pyi/v11/passport-details', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  let errorCode = req.query.errorcode
  prototype.errorcode = errorCode

  req.session.data['prototype'] = prototype

  return res.render('pyi/v11/passport-details', {
    'errorcode': errorCode
  })
})

// add in route for dcs errors
router.post('/pyi/v11/passport-details-post', function (req, res) {
  if (req.session.data['errorcode'] && req.session.data['errorcode'] !== '') {
    res.redirect('error')
  } else {
    res.redirect('address-postcode-current')
  }
})

// Fraud check

router.get('/pyi/v11/fraud-check', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  let errorCode = req.query.errorcode
  prototype.errorcode = errorCode

  req.session.data['prototype'] = prototype

  return res.render('pyi/v11/fraud-check', {
    'errorcode': errorCode
  })
})

// add in route for fraud errors
router.post('/pyi/v11/fraud-checking-post', function (req, res) {
  if (req.session.data['cfcf'] === 'yes') {
    res.redirect('error?errorcode=pyi-no-match')
  } else if (req.session.data['errorcode'] && req.session.data['errorcode'] !== '') {
    res.redirect('error?errorcode=' + req.session.data['errorcode'])
  } else {
    res.redirect('kbv-start')
  }
})

// load in errors on error page
router.get('/pyi/v11/error', function (req, res) {
  let prototype = req.session.data['prototype'] || {} // set up if doesn't exist

  // pull in JSON data file for MVP errors
  if (!req.session.data['errors']) {
    let idvFile = 'errors-pyi-v11.json'
    let path = 'app/data/'
    req.session.data['errors'] = loadJSONFromFile(idvFile, path)
  }
  let index = 0
  // check if there is a query string from someone using devmode

  if (req.query.errorcode) {
    var error = req.query.errorcode
  } else if (prototype.errorcode) {
    var error = prototype.errorcode
  } else {
    var error = 'pyi-technical'
  }

  // if the query is there override all other logic
  if (error) {
    index = req.session.data.errors.pyi.map(e => e.errorcode).indexOf(error)
    console.log(req.session.data.errors.pyi.map(e => e.errorcode).indexOf(error))
  }
  // grab the items we need to display and make the form work
  let errorcode = req.session.data.errors.pyi[index].errorcode
  let options = req.session.data.errors.pyi[index].options
  let heading = req.session.data.errors.pyi[index].heading
  let reason = req.session.data.errors.pyi[index].reason
  let subheading = req.session.data.errors.pyi[index].subheading
  let option1Text = req.session.data.errors.pyi[index].option1Text
  let option1Value = req.session.data.errors.pyi[index].option1Value
  let option2Text = req.session.data.errors.pyi[index].option2Text
  let option2Value = req.session.data.errors.pyi[index].option2Value
  let buttonText = req.session.data.errors.pyi[index].buttonText
  let contactText = req.session.data.errors.pyi[index].contactText
  let contactLink = req.session.data.errors.pyi[index].contactLink
  let total = req.session.data.errors.pyi.length

  return res.render('pyi/v11/error', {
    'errorcode': errorcode,
    'options': options,
    'heading': heading,
    'reason': reason,
    'subheading': subheading,
    'option1Text': option1Text,
    'option1Value': option1Value,
    'option2Text': option2Text,
    'option2Value': option2Value,
    'buttonText': buttonText,
    'contactText': contactText,
    'contactLink': contactLink,
    'total': total
  })
})

// on the kbv spinner
router.post('/pyi/v11/error-choice-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  let destination = req.session.data['destination']

  // check if we need to route to an error scenario
  // MVP has limited choice in return reasons
  if (destination === 'go-back-address') {
    res.redirect('address-postcode-current')
  } else if (destination === 'return-technical') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (destination === 'return-bail') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (destination === 'return-nomatch') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (destination === 'return-fraud') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (destination === 'go-back-kbv') {
    // pull back the previous and current question codes from the data store
    let kbvNext = req.session.data['kbvNext']
    // work out what the next unanswered question is
    target = 'kbv-question?q=' + kbvNext
    res.redirect(target)
  } else if (destination === 'return-gov-uk') {
    req.session.data['reason'] = 'abandon'
    res.redirect('')
  }
})

// on the kbv spinner
router.post('/pyi/v11/kbv-check', function (req, res) {
  let prototype = req.session.data['prototype'] || {}

  // pull in JSON data file
  // delete req.session.data['kbvs']

  let idvFile = 'kbvs-experian-mvp.json'
  let path = 'app/data/'
  req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data.kbvs.questions.length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  res.redirect('kbv-checking')
})

// KBV question picker - runs after spinner - creates a list of questions and stores them
router.post('/pyi/v11/kbv-question-picker', function (req, res) {

  let prototype = req.session.data['prototype'] || {}

  // pull in JSON data file
  // delete req.session.data['kbvs']

  let idvFile = 'kbvs-experian-mvp.json'
  let path = 'app/data/'
  req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data.kbvs.questions.length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  // look for overrides from query string
  // use these if they exist - otherwise create some
  let kbvGroup = []
  if (req.session.data['pyikbv']) {
    let override = req.session.data['pyikbv']
    // turn string into an array
    var forcekbv = override.split(',')
    console.log('forced kbvs: ' + forcekbv)
    kbvGroup.push(forcekbv)
  } else {
    // create some question groupings
    var kbvGroupings = [['Q00016', 'Q00042', 'Q00068', 'Q00050']]
    kbvGroup = kbvGroupings
  }
  console.log(kbvGroup)

  // pick a random number, no higher than the total kbv groups and use it to select an array item
  let chosenKbvGroup = kbvGroup[Math.floor(Math.random() * kbvGroup.length)]

  // move the chosen values into a new object to track progress
  const kbvTracker = {}
  for (const key of chosenKbvGroup) {
    // set all questions to false
    kbvTracker[key] = false
  }

  // push back the tracker object to the data store
  req.session.data['kbvtracker'] = kbvTracker

  let kbvNext = Object.keys(kbvTracker)[0]
  req.session.data['kbvNext'] = kbvNext

  // redirect to the first question

  target = 'kbv-question?q=' + Object.keys(kbvTracker)[0]

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// KBV questions - find next question or go to spinner page
router.post('/pyi/v11/kbv-question-answered', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'Q00016': false, 'Q00042': false, 'Q00068': false, 'Q00050': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''
  let kbvNext = Object.keys(kbvTracker)[index+1]
  req.session.data['kbvNext'] = kbvNext

  if (Object.keys(kbvTracker)[index+1] === 'Q00000') {
    target = 'kbv-checking-cra-error'
  } else {
    // is it the last question?
    if (index === questions.length -1) {
      // go to spinner page
      target = 'success'
    } else {
      // get the next question
      target = 'kbv-question?q=' + kbvNext
    }
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)

})

// KBV questions resume after error
router.post('/pyi/v11/kbv-question-resumed', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'Q00016': false, 'Q00042': false, 'Q00068': false, 'Q00050': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'success'
  } else {
    // check if it the third question
    target = 'kbv-question?q=' + Object.keys(kbvTracker)[index+1]
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// pass data to KBV question page
router.get('/pyi/v11/kbv-question', function (req, res) {
  // let index = '0

  // pull in JSON data file if someone jumps directly to this page
  if (!req.session.data['kbvs']) {
    let idvFile = 'kbvs-experian-mvp.json'
    let path = 'app/data/'
    req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)
  }
  let index = 0
  // check if there is a query string from someone using devmode
  const questionCode = req.query.q
  // if the query is there override all other logic
  if (questionCode) {
    index = req.session.data.kbvs.questions.map(e => e.code).indexOf(questionCode)
    // console.log(req.session.data.kbvs.questions.map(e => e.code).indexOf('high4'))
  }

  // check for backwards movements in the KBVs and show error if caught
  let backlinkalert = 'false'
  // look for the question requested and see if it been answered already

  if (req.session.data['kbvtracker']) {
    // grab question tracker object with list of queued questions
    const kbvTracker = req.session.data['kbvtracker']
    // loop through the object and compare the requested question again the ones in the tracker
    const keys = Object.keys(kbvTracker)
    keys.forEach((key, index) => {
      if (`${key}` === questionCode && `${kbvTracker[key]}` === 'true'){
        console.log('key matched')
        backlinkalert = 'true'
      }
    })
  }

  // route
  if (backlinkalert === 'true') {
    let question = req.session.data.kbvs.questions[index].newquestion
    let code = req.session.data.kbvs.questions[index].code
    req.session.data.prototype.errorcode = 'pyi-kbv-back'
    res.redirect('/pyi/v11/error')
  } else {
    // grab the items we need to display and make the form work
    let question = req.session.data.kbvs.questions[index].newquestion
    let code = req.session.data.kbvs.questions[index].code
    let hint = req.session.data.kbvs.questions[index].hinttext
    let option1 = req.session.data.kbvs.questions[index].option1
    let option2 = req.session.data.kbvs.questions[index].option2
    let option3 = req.session.data.kbvs.questions[index].option3
    let option4 = req.session.data.kbvs.questions[index].option4
    let option5 = req.session.data.kbvs.questions[index].option5
    let option6 = req.session.data.kbvs.questions[index].option6
    let total = req.session.data.kbvs.questions.length

    return res.render('pyi/v11/kbv-question', {
      'question': question,
      'code': code,
      'hint': hint,
      'option1': option1,
      'option2': option2,
      'option3': option3,
      'option4': option4,
      'option5': option5,
      'option6': option6,
      'total': total
    })
  }
})

router.get('/pyi/v11/kbv-start', function (req, res) {
  let backlinkalert = 'false'
  res.locals.prevURL = req.get('Referrer')
  var referer = 'notsafe'

  // if coming at the kbv from the start let the user see the start page
  if (req.get('Referrer') === 'http://localhost:3000/v11/mvp/fraud-check' || req.get('Referrer') === 'https://gds-identity.herokuapp.com/pyi/v11/fraud-check' || req.get('Referrer') === 'https://gds-identity-ur.herokuapp.com/pyi/v11/fraud-check' || req.get('Referrer') === 'https://gds-identity-ur-test.herokuapp.com/pyi/v11/fraud-check') {
    referer = 'safe'
  }

  console.log('prev page: ' + req.get('Referrer'))

  if (req.session.data['kbvtracker'] && referer !== 'safe') {
    backlinkalert = 'true'
  }

  if (backlinkalert === 'true') {
    req.session.data.prototype.errorcode = 'pyi-kbv-back'
    res.redirect('/pyi/v11/error')
  } else {
    return res.render('pyi/v11/kbv-start')
  }
})

// Fail KBV and go back to service
router.post('/pyi/v11/kbvfail-route', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  req.session.data['reason'] = 'abandon'
  res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
})

// #### PYI V10 ROUTING ####

router.get('/pyi/v10/doc-upload', function (req, res) {
  // is the user on a mobile device?
  const isMobile = req.useragent.isMobile
  const isMobileOs = req.useragent.platform
  const isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
  const isMobileOsV = isMobileOsVer
  return res.render('pyi/v10/doc-upload', {
    'mobile': isMobile,
    'mobileOs': isMobileOs,
    'mobileOsV': isMobileOsV
  })
})

// handle a file upload to storage
router.post('/pyi/v10/doc-upload', upload.single('uploaded_file'), function (req, res) {
  let file = req.file.buffer.toString('base64')
  req.session.data['doc-photo-front'] = file

  res.redirect('doc-checks')
})

router.get('/pyi/v10/doc-checks-2', function (req, res) {
  const answer1 = req.query.answer1
  const answer2 = req.query.answer2

  if (answer1 === "yes" && answer2 === "no") {
    return res.render('pyi/v10/doc-uploader')
  } else {
    return res.render('pyi/v10/doc-checks', {
      'answer1': answer1,
      'answer2': answer2
    })
  }
})

router.post('/pyi/v10/methods', function (req, res) {
  const method = req.session.data['method']

  if (method === 'bio') {
    res.redirect('scan-intro')
  } else if (method === 'kbv') {
    res.redirect('kbv-intro')
  }
})

router.post('/pyi/v10/choose-doc-post', function (req, res) {
  const id = req.session.data['id-choice']

  if (id === 'driving licence') {
    res.redirect('driving-licence-details')
  } else {
    res.redirect('passport-details')
  }
})

router.post('/pyi/v10/address-picker-current-post', function (req, res) {
  const address = req.session.data['current-address']
  if (address === 'address1') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = ''
    req.session.data['address-house-name-current'] = 'Oxford House'
    req.session.data['address-street-current'] = 'Oxford Row'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address2') {
    req.session.data['address-flat-number-current'] = 'Office 14'
    req.session.data['address-house-number-current'] = ''
    req.session.data['address-house-name-current'] = ''
    req.session.data['address-street-current'] = 'New Station St'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address3') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '38'
    req.session.data['address-house-name-current'] = ''
    req.session.data['address-street-current'] = 'Park Square North'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address4') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '41'
    req.session.data['address-house-name-current'] = 'Lion House'
    req.session.data['address-street-current'] = 'York Place'
    req.session.data['address-city-current'] = 'Leeds'
  } else if (address === 'address5') {
    req.session.data['address-flat-number-current'] = ''
    req.session.data['address-house-number-current'] = '1'
    req.session.data['address-house-name-current'] = 'Whitehall Quay'
    req.session.data['address-street-current'] = 'Whitehall Road'
    req.session.data['address-city-current'] = 'Leeds'
  }

  res.redirect('address-manual-current')
})

router.post('/pyi/v10/address-picker-prev-post', function (req, res) {
  const address = req.session.data['previous-address']
  if (address === 'address1') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = ''
    req.session.data['address-house-name-prev'] = 'Oxford House'
    req.session.data['address-street-prev'] = 'Oxford Row'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address2') {
    req.session.data['address-flat-number-prev'] = 'Office 14'
    req.session.data['address-house-number-prev'] = ''
    req.session.data['address-house-name-prev'] = ''
    req.session.data['address-street-prev'] = 'New Station St'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address3') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '38'
    req.session.data['address-house-name-prev'] = ''
    req.session.data['address-street-prev'] = 'Park Square North'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address4') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '41'
    req.session.data['address-house-name-prev'] = 'Lion House'
    req.session.data['address-street-prev'] = 'York Place'
    req.session.data['address-city-prev'] = 'Leeds'
  } else if (address === 'address5') {
    req.session.data['address-flat-number-prev'] = ''
    req.session.data['address-house-number-prev'] = '1'
    req.session.data['address-house-name-prev'] = 'Whitehall Quay'
    req.session.data['address-street-prev'] = 'Whitehall Road'
    req.session.data['address-city-prev'] = 'Leeds'
  }
  res.redirect('address-manual-prev')
})

router.post('/pyi/v10/address-manual-current-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  prototype.prev = 'manual'

  let movedinyear = req.session.data['address-year-current-year']

  let today = new Date()
  let month = today.getMonth() // 10 (Month is 0-based, so 10 means 11th Month)
  let year = today.getFullYear() // 2020

  console.log('current month: ' + month)
  console.log('current year: ' + year)
  console.log('moved in year: ' + movedinyear)

  let movedinyearadj = Number(movedinyear) + 1
  console.log('moved in year - adjusted: ' + movedinyearadj)
  // compare current date to date submitted
  // if in jan/feb/mar chaeck the dates
  if (month <= 2) {
    // see if it was previous year
    if (movedinyear.toString() >= year.toString()) {
      console.log('verdict: need previous address')
      prototype.needPrevAddress = 'true'
    } else {
      console.log('verdict: don\'t need previous address - previous year and past march')
      prototype.needPrevAddress = 'false'
    }
  } else {
    if (movedinyear.toString() === year.toString()) {
      console.log('verdict: need previous address')
      prototype.needPrevAddress = 'true'
    } else {
      console.log('verdict: don\'t need previous address - year didn\'t match')
      prototype.needPrevAddress = 'false'
    }
  }
  prototype.prev = 'picker'
  req.session.data['prototype'] = prototype // write back these values into the session data

  res.redirect('address-check')
})

router.post('/pyi/v10/address-manual-prev-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  prototype.prev = 'manual'
  console.log('verdict: don\'t need previous address - year didn\'t match')
  prototype.needPrevAddress = 'false'
  req.session.data['prototype'] = prototype // write back these values into the session data
  res.redirect('address-check')
})

router.post('/pyi/v10/passport-details', function (req, res) {
  res.redirect('passport-details')
})

router.post('/pyi/v10/passport-details-post', function (req, res) {
  const triedDL = req.session.data['dlahf']

  if (triedDL === 'complete') {
    res.redirect('fraud-checking')
  } else {
    res.redirect('address-postcode-current')
  }
})

// address history CRA
router.post('/pyi/v10/address-history', function (req, res) {
  const over5 = req.session.data['lived-5']

  if (over5 === 'yes') {
    res.redirect('kbv-check-details')
  } else {
    res.redirect('kbv-address-prev')
  }
})

router.post('/pyi/v10/address-check', function (req, res) {
  const over3 = req.session.data['lived-3']
  if (over3 === 'yes') {
    res.redirect('fraud-checking')
  } else {
    res.redirect('address-postcode-prev')
  }
})

// routing based on verification choice
router.post('/pyi/v10/fraud-checking-post', function (req, res) {

  // check if we need to route to an error scenario
  if (req.session.data['dlahf'] === 'yes' && req.session.data['id-choice'] === 'driving licence') {
    res.redirect('fraud-checking-fail')
  } else {
    if (req.session.data['method'] === 'bio') {
      res.redirect('bio-start')
    } else {
      res.redirect('kbv-start')
    }
  }
})

// routing after an error event
// will accept many choice options and will route to the right place
router.post('/pyi/v10/error-choice-post', function (req, res) {
  let prototype = req.session.data['prototype'] || {}
  let errorChoice = req.session.data['error-choice']

  // check if we need to route to an error scenario
  if (errorChoice === 'photoid') {
    req.session.data['dlahf'] = 'complete'
    res.redirect('choose-doc')
  } else if (errorChoice === 'abandon') {
    req.session.data['reason'] = 'abandon'
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else if (errorChoice === 'biometrics') {
    res.redirect('bio-start')
  } else if (errorChoice === 'try-biometrics') {
    res.redirect('bio-start')
  } else if (errorChoice === 'try-kbv') {
    res.redirect('kbv-start')
  }
})

// work out back links on a page with multiple incoming routes
router.get('/pyi/v10/kbv-check-details', function (req, res) {
  currentURL = req.protocol + '://' + req.get('host') + req.originalUrl
  prevURL = req.get('Referrer')

  return res.render('pyi/v10/kbv-check-details', {
    'prevURL': prevURL,
    'currentURL': currentURL
  })
})

// on the kbv spinner
router.post('/pyi/v10/kbv-check', function (req, res) {
  let prototype = req.session.data['prototype'] || {}

  // pull in JSON data file
  // delete req.session.data['kbvs']

  let idvFile = 'kbvs-experian-mvp.json'
  let path = 'app/data/'
  req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data.kbvs.questions.length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  res.redirect('kbv-checking')
})

// KBV question picker - runs after spinner - creates a list of questions and stores them
router.post('/pyi/v10/kbv-question-picker', function (req, res) {

  // look for overrides from query string
  // use these if they exist - otherwise create some
  let kbvGroup = []
  if (req.session.data['pyikbv']) {
    let override = req.session.data['pyikbv']
    // turn string into an array
    var forcekbv = override.split(',')
    console.log('forced kbvs: ' + forcekbv)
    kbvGroup.push(forcekbv)
  } else {
    // create some question groupings
    var kbvGroupings = [['Q00016', 'Q00042', 'Q00068', 'Q00050']]
    kbvGroup = kbvGroupings
  }
  console.log(kbvGroup)

  // pick a random number, no higher than the total kbv groups and use it to select an array item
  let chosenKbvGroup = kbvGroup[Math.floor(Math.random() * kbvGroup.length)]

  // move the chosen values into a new object to track progress
  const kbvTracker = {}
  for (const key of chosenKbvGroup) {
    // set all questions to false
    kbvTracker[key] = false
  }

  // push back the tracker object to the data store
  req.session.data['kbvtracker'] = kbvTracker

  let kbvNext = Object.keys(kbvTracker)[0]
  req.session.data['kbvNext'] = kbvNext

  // redirect to the first question

  target = 'kbv-question?q=' + Object.keys(kbvTracker)[0]

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// KBV questions - find next question or go to spinner page
router.post('/pyi/v10/kbv-question-answered', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'Q00016': false, 'Q00042': false, 'Q00068': false, 'Q00050': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''
  let kbvNext = Object.keys(kbvTracker)[index+1]
  req.session.data['kbvNext'] = kbvNext

  if (Object.keys(kbvTracker)[index+1] === 'Q00000') {
    target = 'kbv-checking-cra-error'
  } else {
    // is it the last question?
    if (index === questions.length -1) {
      // go to spinner page
      target = 'success'
    } else {
      // get the next question
      target = 'kbv-question?q=' + kbvNext
    }
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)

})

// KBV questions resume after error
router.post('/pyi/v10/kbv-question-resumed', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'Q00016': false, 'Q00042': false, 'Q00068': false, 'Q00050': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'success'
  } else {
    // check if it the third question
    target = 'kbv-question?q=' + Object.keys(kbvTracker)[index+1]
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// pass data to KBV question page
router.get('/pyi/v10/kbv-question', function (req, res) {
  // let index = '0

  // pull in JSON data file if someone jumps directly to this page
  if (!req.session.data['kbvs']) {
    let idvFile = 'kbvs-experian-mvp.json'
    let path = 'app/data/'
    req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)
  }
  let index = 0
  // check if there is a query string from someone using devmode
  const questionCode = req.query.q
  // if the query is there override all other logic
  if (questionCode) {
    index = req.session.data.kbvs.questions.map(e => e.code).indexOf(questionCode)
    // console.log(req.session.data.kbvs.questions.map(e => e.code).indexOf('high4'))
  }

  // check for backwards movements in the KBVs and show error if caught
  let backlinkalert = 'false'
  // look for the question requested and see if it been answered already

  if (req.session.data['kbvtracker']) {
    // grab question tracker object with list of queued questions
    const kbvTracker = req.session.data['kbvtracker']
    // loop through the object and compare the requested question again the ones in the tracker
    const keys = Object.keys(kbvTracker)
    keys.forEach((key, index) => {
      if (`${key}` === questionCode && `${kbvTracker[key]}` === 'true'){
        console.log('key matched')
        backlinkalert = 'true'
      }
    })
  }

  // route
  if (backlinkalert === 'true') {
    let question = req.session.data.kbvs.questions[index].newquestion
    let code = req.session.data.kbvs.questions[index].code
    return res.render('pyi/v10/kbv-back-error', {
      'question': question,
      'code': code
    })
  } else {
    // grab the items we need to display and make the form work
    let question = req.session.data.kbvs.questions[index].newquestion
    let code = req.session.data.kbvs.questions[index].code
    let hint = req.session.data.kbvs.questions[index].hinttext
    let option1 = req.session.data.kbvs.questions[index].option1
    let option2 = req.session.data.kbvs.questions[index].option2
    let option3 = req.session.data.kbvs.questions[index].option3
    let option4 = req.session.data.kbvs.questions[index].option4
    let option5 = req.session.data.kbvs.questions[index].option5
    let option6 = req.session.data.kbvs.questions[index].option6
    let total = req.session.data.kbvs.questions.length

    return res.render('pyi/v10/kbv-question', {
      'question': question,
      'code': code,
      'hint': hint,
      'option1': option1,
      'option2': option2,
      'option3': option3,
      'option4': option4,
      'option5': option5,
      'option6': option6,
      'total': total
    })
  }
})

router.get('/pyi/v10/kbv-start', function (req, res) {
  let backlinkalert = 'false'

  if (req.session.data['kbvtracker']) {
    backlinkalert = 'true'
  }

  if (backlinkalert === 'true') {
    return res.render('pyi/v10/kbv-back-error')
  } else {
    return res.render('pyi/v10/kbv-start')
  }
})


// address history CRA
router.post('/pyi/v10/kbv-back-error', function (req, res) {
  const backChoice = req.session.data['kbv-back-check']
  // pull back the previous and current question codes from the data store
  let kbvNum = req.session.data['kbvNum']
  let kbvNext = req.session.data['kbvNext']

  // work out what the next unanswered question is

  target = 'kbv-question?q=' + kbvNext

  if (backChoice === 'go back') {
    res.redirect(target)
  } else {
    res.redirect('kbv-fail')
  }
})

// Fail KBV and go back to service
router.post('/pyi/v10/kbvfail-route', function (req, res) {
  prototype = req.session.data['prototype']
  req.session.data['reason'] = 'abandon'
  res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
})

// // where to go at the end of the services initial journey
// router.post('/preauth-end', function (req, res) {
//   // pulls back the current journey settings
//   prototype = req.session.data['prototype']
//
//   if (req.session.data['use-govuk-account'] === 'no') {
//     res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
//   } else {
//     if (prototype.authCreate) {
//       res.redirect(prototype.authDir + '/' + prototype.authCreate)
//     } else if (prototype.authDir) {
//       res.redirect(prototype.authDir + '/' + prototype.authEntry)
//     } else {
//       // if auth isn't configured - go back to service
//       res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceContinue)
//     }
//   }
// })


// #### PYI V9 ROUTING ####

router.post('/pyi/v9/address-check', function (req, res) {
  const over3 = req.session.data['lived-3']
  if (over3 === 'yes') {
    res.redirect('kbv-start')
  } else {
    res.redirect('address-postcode-prev')
  }
})

router.post('/pyi/v9/address-picker-current-post', function (req, res) {
  const address = req.session.data['current-address']
  if (address === 'address1') {
    req.session.data['address-line-1-cra'] = 'Oxford House'
    req.session.data['address-line-2-cra'] = 'Oxford Row'
    req.session.data['address-town-cra'] = 'Leeds'
  } else if (address === 'address2') {
    req.session.data['address-line-1-cra'] = 'Office 14'
    req.session.data['address-line-2-cra'] = 'New Station St'
    req.session.data['address-town-cra'] = 'Leeds'
  } else if (address === 'address3') {
    req.session.data['address-line-1-cra'] = '38'
    req.session.data['address-line-2-cra'] = 'Park Square North'
    req.session.data['address-town-cra'] = 'Leeds'
  } else if (address === 'address4') {
    req.session.data['address-line-1-cra'] = 'Lion House'
    req.session.data['address-line-2-cra'] = '41, York Place'
    req.session.data['address-town-cra'] = 'Leeds'
  } else if (address === 'address5') {
    req.session.data['address-line-1-cra'] = '1 Whitehall Quay'
    req.session.data['address-line-2-cra'] = 'Whitehall Rd'
    req.session.data['address-town-cra'] = 'Leeds'
  }
  res.redirect('address-check')
})

router.post('/pyi/v9/address-picker-prev-post', function (req, res) {
  const address = req.session.data['previous-address']
  if (address === 'address1') {
    req.session.data['address-line-1-cra-prev'] = 'Oxford House'
    req.session.data['address-line-2-cra-prev'] = 'Oxford Row'
    req.session.data['address-town-cra-prev'] = 'Leeds'
  } else if (address === 'address2') {
    req.session.data['address-line-1-cra-prev'] = 'Office 14'
    req.session.data['address-line-2-cra-prev'] = 'New Station St'
    req.session.data['address-town-cra-prev'] = 'Leeds'
  } else if (address === 'address3') {
    req.session.data['address-line-1-cra-prev'] = '38'
    req.session.data['address-line-2-cra-prev'] = 'Park Square North'
    req.session.data['address-town-cra-prev'] = 'Leeds'
  } else if (address === 'address4') {
    req.session.data['address-line-1-cra-prev'] = 'Lion House'
    req.session.data['address-line-2-cra-prev'] = '41, York Place'
    req.session.data['address-town-cra-prev'] = 'Leeds'
  } else if (address === 'address5') {
    req.session.data['address-line-1-cra-prev'] = '1 Whitehall Quay'
    req.session.data['address-line-2-cra-prev'] = 'Whitehall Rd'
    req.session.data['address-town-cra-prev'] = 'Leeds'
  }
  res.redirect('address-check')
})

router.post('/pyi/v9/address-manual-current-post', function (req, res) {
  res.redirect('address-check')
})

router.post('/pyi/v9/address-manual-prev-post', function (req, res) {
  res.redirect('address-check')
})

router.post('/pyi/v9/passport-details', function (req, res) {
  res.redirect('passport-details')
})

// address history CRA
router.post('/pyi/v9/address-history', function (req, res) {
  const over5 = req.session.data['lived-5']

  if (over5 === 'yes') {
    res.redirect('kbv-check-details')
  } else {
    res.redirect('kbv-address-prev')
  }
})

// work out back links on a page with multiple incoming routes
router.get('/pyi/v9/kbv-check-details', function (req, res) {
  currentURL = req.protocol + '://' + req.get('host') + req.originalUrl
  prevURL = req.get('Referrer')

  return res.render('pyi/v9/kbv-check-details', {
    'prevURL': prevURL,
    'currentURL': currentURL
  })
})

// on the kbv spinner
router.post('/pyi/v9/kbv-check', function (req, res) {
  let prototype = req.session.data['prototype'] || {}

  // pull in JSON data file
  // delete req.session.data['kbvs']

  let idvFile = 'kbvs-experian-mvp.json'
  let path = 'app/data/'
  req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data.kbvs.questions.length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  res.redirect('kbv-checking')
})

// KBV question picker - runs after spinner - creates a list of questions and stores them
router.post('/pyi/v9/kbv-question-picker', function (req, res) {

  // look for overrides from query string
  // use these if they exist - otherwise create some
  let kbvGroup = []
  if (req.session.data['pyikbv']) {
    let override = req.session.data['pyikbv']
    // turn string into an array
    var forcekbv = override.split(',')
    console.log('forced kbvs: ' + forcekbv)
    kbvGroup.push(forcekbv)
  } else {
    // create some question groupings
    var kbvGroupings = [['Q00016', 'Q00042', 'Q00068', 'Q00050']]
    kbvGroup = kbvGroupings
  }
  console.log(kbvGroup)

  // pick a random number, no higher than the total kbv groups and use it to select an array item
  let chosenKbvGroup = kbvGroup[Math.floor(Math.random() * kbvGroup.length)]

  // move the chosen values into a new object to track progress
  const kbvTracker = {}
  for (const key of chosenKbvGroup) {
    // set all questions to false
    kbvTracker[key] = false
  }

  // push back the tracker object to the data store
  req.session.data['kbvtracker'] = kbvTracker

  let kbvNext = Object.keys(kbvTracker)[0]
  req.session.data['kbvNext'] = kbvNext

  // redirect to the first question

  target = 'kbv-question?q=' + Object.keys(kbvTracker)[0]

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// KBV questions - find next question or go to spinner page
router.post('/pyi/v9/kbv-question-answered', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'Q00016': false, 'Q00042': false, 'Q00068': false, 'Q00050': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''
  let kbvNext = Object.keys(kbvTracker)[index+1]
  req.session.data['kbvNext'] = kbvNext

  if (Object.keys(kbvTracker)[index+1] === 'Q00000') {
    target = 'kbv-checking-cra-error'
  } else {
    // is it the last question?
    if (index === questions.length -1) {
      // go to spinner page
      target = 'success'
    } else {
      // get the next question
      target = 'kbv-question?q=' + kbvNext
    }
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)

})

// KBV questions resume after error
router.post('/pyi/v9/kbv-question-resumed', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'Q00016': false, 'Q00042': false, 'Q00068': false, 'Q00050': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'success'
  } else {
    // check if it the third question
    target = 'kbv-question?q=' + Object.keys(kbvTracker)[index+1]
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// pass data to KBV question page
router.get('/pyi/v9/kbv-question', function (req, res) {
  // let index = '0

  // pull in JSON data file if someone jumps directly to this page
  if (!req.session.data['kbvs']) {
    let idvFile = 'kbvs-experian-mvp.json'
    let path = 'app/data/'
    req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)
  }
  let index = 0
  // check if there is a query string from someone using devmode
  const questionCode = req.query.q
  // if the query is there override all other logic
  if (questionCode) {
    index = req.session.data.kbvs.questions.map(e => e.code).indexOf(questionCode)
    // console.log(req.session.data.kbvs.questions.map(e => e.code).indexOf('high4'))
  }

  // check for backwards movements in the KBVs and show error if caught
  let backlinkalert = 'false'
  // look for the question requested and see if it been answered already

  if (req.session.data['kbvtracker']) {
    // grab question tracker object with list of queued questions
    const kbvTracker = req.session.data['kbvtracker']
    // loop through the object and compare the requested question again the ones in the tracker
    const keys = Object.keys(kbvTracker)
    keys.forEach((key, index) => {
      if (`${key}` === questionCode && `${kbvTracker[key]}` === 'true'){
        console.log('key matched')
        backlinkalert = 'true'
      }
    })
  }

  // route
  if (backlinkalert === 'true') {
    let question = req.session.data.kbvs.questions[index].newquestion
    let code = req.session.data.kbvs.questions[index].code
    return res.render('pyi/v9/kbv-back-error', {
      'question': question,
      'code': code
    })
  } else {
    // grab the items we need to display and make the form work
    let question = req.session.data.kbvs.questions[index].newquestion
    let code = req.session.data.kbvs.questions[index].code
    let hint = req.session.data.kbvs.questions[index].hinttext
    let option1 = req.session.data.kbvs.questions[index].option1
    let option2 = req.session.data.kbvs.questions[index].option2
    let option3 = req.session.data.kbvs.questions[index].option3
    let option4 = req.session.data.kbvs.questions[index].option4
    let option5 = req.session.data.kbvs.questions[index].option5
    let option6 = req.session.data.kbvs.questions[index].option6
    let total = req.session.data.kbvs.questions.length

    return res.render('pyi/v9/kbv-question', {
      'question': question,
      'code': code,
      'hint': hint,
      'option1': option1,
      'option2': option2,
      'option3': option3,
      'option4': option4,
      'option5': option5,
      'option6': option6,
      'total': total
    })
  }
})

router.get('/pyi/v9/kbv-start', function (req, res) {
  let backlinkalert = 'false'

  if (req.session.data['kbvtracker']) {
    backlinkalert = 'true'
  }

  if (backlinkalert === 'true') {
    return res.render('pyi/v9/kbv-back-error')
  } else {
    return res.render('pyi/v9/kbv-start')
  }
})


// address history CRA
router.post('/pyi/v9/kbv-back-error', function (req, res) {
  const backChoice = req.session.data['kbv-back-check']
  // pull back the previous and current question codes from the data store
  let kbvNum = req.session.data['kbvNum']
  let kbvNext = req.session.data['kbvNext']

  // work out what the next unanswered question is

  target = 'kbv-question?q=' + kbvNext

  if (backChoice === 'go back') {
    res.redirect(target)
  } else {
    res.redirect('kbv-fail')
  }
})

// Fail KBV and go back to service
router.post('/pyi/v9/kbvfail-route', function (req, res) {
  prototype = req.session.data['prototype']
  req.session.data['reason'] = 'abandon'
  res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
})

// where to go at the end of the services initial journey
router.post('/preauth-end', function (req, res) {
  // pulls back the current journey settings
  prototype = req.session.data['prototype']

  if (req.session.data['use-govuk-account'] === 'no') {
    res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceReturn)
  } else {
    if (prototype.authCreate) {
      res.redirect(prototype.authDir + '/' + prototype.authCreate)
    } else if (prototype.authDir) {
      res.redirect(prototype.authDir + '/' + prototype.authEntry)
    } else {
      // if auth isn't configured - go back to service
      res.redirect('/service/' + prototype.serviceDir + '/' + prototype.serviceContinue)
    }
  }
})

// #### PYI V8 ROUTING ####

router.post('/pyi/v8/passport-details', function (req, res) {
  res.redirect('passport-details')
})

// address history CRA
router.post('/pyi/v8/address-history', function (req, res) {
  const over5 = req.session.data['lived-5']

  if (over5 === 'yes') {
    res.redirect('kbv-check-details')
  } else {
    res.redirect('kbv-address-prev')
  }
})

// work out back links on a page with multiple incoming routes
router.get('/pyi/v8/kbv-check-details', function (req, res) {
  currentURL = req.protocol + '://' + req.get('host') + req.originalUrl
  prevURL = req.get('Referrer')

  return res.render('pyi/v8/kbv-check-details', {
    'prevURL': prevURL,
    'currentURL': currentURL
  })
})

// on the kbv spinner
router.post('/pyi/v8/kbv-check', function (req, res) {
  let prototype = req.session.data['prototype'] || {}

  // pull in JSON data file
  // delete req.session.data['kbvs']

  let idvFile = 'kbvs-experian.json'
  let path = 'app/data/'
  req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data.kbvs.questions.length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  res.redirect('kbv-checking')
})

// KBV question picker - runs after spinner - creates a list of questions and stores them
router.post('/pyi/v8/kbv-question-picker', function (req, res) {

  // look for overrides from query string
  // use these if they exist - otherwise create some
  let kbvGroup = []
  if (req.session.data['pyikbv']) {
    let override = req.session.data['pyikbv']
    // turn string into an array
    var forcekbv = override.split(',')
    console.log('forced kbvs: ' + forcekbv)
    kbvGroup.push(forcekbv)
  } else {
    // create some question groupings
    var kbvGroupings = [['med1', 'med4', 'med6', 'high4']]
    kbvGroup = kbvGroupings
  }
  console.log(kbvGroup)

  // pick a random number, no higher than the total kbv groups and use it to select an array item
  let chosenKbvGroup = kbvGroup[Math.floor(Math.random() * kbvGroup.length)]

  // move the chosen values into a new object to track progress
  const kbvTracker = {}
  for (const key of chosenKbvGroup) {
    // set all questions to false
    kbvTracker[key] = false
  }

  // push back the tracker object to the data store
  req.session.data['kbvtracker'] = kbvTracker

  // redirect to the first question

  target = 'kbv-question?q=' + Object.keys(kbvTracker)[0]

  // redirect to the next question or the spinner if done
  res.redirect(target)

})

// KBV questions - find next question or go to spinner page
router.post('/pyi/v8/kbv-question-answered', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'med1': false, 'med4': false, 'med6': false, 'high4': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'success'
  } else {
    // check if it the third question
    if (index === 5) {
      target = 'kbv-checking-cra-error'
    } else {
      // get the next question
      target = 'kbv-question?q=' + Object.keys(kbvTracker)[index+1]
    }
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)

})

// KBV questions resume after error
router.post('/pyi/v8/kbv-question-resumed', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'med1': false, 'med4': false, 'med6': false, 'high4': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'success'
  } else {
    // check if it the third question
    target = 'kbv-question?q=' + Object.keys(kbvTracker)[index+1]
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// pass data to KBV question page
router.get('/pyi/v8/kbv-question', function (req, res) {
  // let index = '0

  // pull in JSON data file if someone jumps directly to this page
  if (!req.session.data['kbvs']) {
    let idvFile = 'kbvs-experian.json'
    let path = 'app/data/'
    req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)
  }
  let index = 0
  // check if there is a query string from someone using devmode
  const questionCode = req.query.q
  // if the query is there override all other logic
  if (questionCode) {
    index = req.session.data.kbvs.questions.map(e => e.code).indexOf(questionCode)
    // console.log(req.session.data.kbvs.questions.map(e => e.code).indexOf('high4'))
  }

  // grab the items we need to display and make the form work
  let question = req.session.data.kbvs.questions[index].newquestion
  let code = req.session.data.kbvs.questions[index].code
  let hint = req.session.data.kbvs.questions[index].hinttext
  let option1 = req.session.data.kbvs.questions[index].option1
  let option2 = req.session.data.kbvs.questions[index].option2
  let option3 = req.session.data.kbvs.questions[index].option3
  let option4 = req.session.data.kbvs.questions[index].option4
  let option5 = req.session.data.kbvs.questions[index].option5
  let option6 = req.session.data.kbvs.questions[index].option6

  let total = req.session.data.kbvs.questions.length

  return res.render('pyi/v8/kbv-question', {
    'question': question,
    'code': code,
    'hint': hint,
    'option1': option1,
    'option2': option2,
    'option3': option3,
    'option4': option4,
    'option5': option5,
    'option6': option6,
    'total': total
  })
})

// #### PYI ROUND 7 ROUTING ####

router.post('/pyi/v7/start', function (req, res) {
  const signin = req.session.data['experian-consent']

  if (signin === 'yes') {
    res.redirect('passport-details')
  } else {
    res.redirect('other-ways')
  }
})

router.post('/pyi/v7/passport-details', function (req, res) {
  res.redirect('passport-details')
})

// address history CRA
router.post('/pyi/v7/address-history', function (req, res) {
  const over5 = req.session.data['lived-5']

  if (over5 === 'yes') {
    res.redirect('kbv-check-details')
  } else {
    res.redirect('kbv-address-prev')
  }
})

// work out back links on a page with multiple incoming routes
router.get('/pyi/v7/kbv-check-details', function (req, res) {
  currentURL = req.protocol + '://' + req.get('host') + req.originalUrl
  prevURL = req.get('Referrer')

  return res.render('pyi/v7/kbv-check-details', {
    'prevURL': prevURL,
    'currentURL': currentURL
  })
})

// on the kbv spinner
router.post('/pyi/v7/kbv-check', function (req, res) {
  let prototype = req.session.data['prototype'] || {}

  // pull in JSON data file
  // delete req.session.data['kbvs']
  // let idvFile = 'kbvs.json'
  // let path = 'app/data/'
  // req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  let idvFile = 'kbvs.json'
  let path = 'app/data/'
  req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data.kbvs.questions.length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  res.redirect('kbv-checking')
})

// KBV question picker - runs after spinner - creates a list of questions and stores them
router.post('/pyi/v7/kbv-question-picker', function (req, res) {

  // look for overrides from query string
  // use these if they exist - otherwise create some
  let kbvGroup = []
  if (req.session.data['pyikbv']) {
    let override = req.session.data['pyikbv']
    // turn string into an array
    var forcekbv = override.split(',')
    console.log('forced kbvs: ' + forcekbv)
    kbvGroup.push(forcekbv)
  } else {
    // create some question groupings
    var kbvGroupings = [['med1', 'med5', 'med13']]
    kbvGroup = kbvGroupings
  }
  console.log(kbvGroup)

  // pick a random number, no higher than the total kbv groups and use it to select an array item
  let chosenKbvGroup = kbvGroup[Math.floor(Math.random() * kbvGroup.length)]

  // move the chosen values into a new object to track progress
  const kbvTracker = {}
  for (const key of chosenKbvGroup) {
    // set all questions to false
    kbvTracker[key] = false
  }

  // push back the tracker object to the data store
  req.session.data['kbvtracker'] = kbvTracker

  // redirect to the first question

  target = 'kbv-question?q=' + Object.keys(kbvTracker)[0]

  // redirect to the next question or the spinner if done
  res.redirect(target)

})

// KBV questions - find next question or go to spinner page
router.post('/pyi/v7/kbv-question-answered', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'med1': false, 'med5': false, 'med13': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'success'
  } else {
    // check if it the third question
    if (index === 5) {
      target = 'kbv-checking-cra-error'
    } else {
      // get the next question
      target = 'kbv-question?q=' + Object.keys(kbvTracker)[index+1]
    }
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)

})

// KBV questions resume after error
router.post('/pyi/v7/kbv-question-resumed', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvtracker'] || { 'med1': false, 'med5': false, 'med13': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'success'
  } else {
    // check if it the third question
    target = 'kbv-question?q=' + Object.keys(kbvTracker)[index+1]
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// pass data to KBV question page
router.get('/pyi/v7/kbv-question', function (req, res) {
  // let index = '0

  // pull in JSON data file if someone jumps directly to this page
  if (!req.session.data['kbvs']) {
    let idvFile = 'kbvs.json'
    let path = 'app/data/'
    req.session.data['kbvs'] = loadJSONFromFile(idvFile, path)
  }
  let index = 0
  // check if there is a query string from someone using devmode
  const questionCode = req.query.q
  // if the query is there override all other logic
  if (questionCode) {
    index = req.session.data.kbvs.questions.map(e => e.code).indexOf(questionCode)
    // console.log(req.session.data.kbvs.questions.map(e => e.code).indexOf('high4'))
  }

  // grab the items we need to display and make the form work
  let question = req.session.data.kbvs.questions[index].newquestion
  let code = req.session.data.kbvs.questions[index].code
  let hint = req.session.data.kbvs.questions[index].hinttext
  let option1 = req.session.data.kbvs.questions[index].option1
  let option2 = req.session.data.kbvs.questions[index].option2
  let option3 = req.session.data.kbvs.questions[index].option3
  let option4 = req.session.data.kbvs.questions[index].option4
  let option5 = req.session.data.kbvs.questions[index].option5
  let option6 = req.session.data.kbvs.questions[index].option6

  let total = req.session.data.kbvs.questions.length

  return res.render('pyi/v7/kbv-question', {
    'question': question,
    'code': code,
    'hint': hint,
    'option1': option1,
    'option2': option2,
    'option3': option3,
    'option4': option4,
    'option5': option5,
    'option6': option6,
    'total': total
  })
})


// #### PYI ROUND 6 ROUTING ####

router.post('/pyi/v6/photo-id-documents', function (req, res) {
  // pick up the selected docs
  const photoIds = req.session.data['id-documents']
  prototype = req.session.data['prototype']

  console.log(photoIds)

  // work out the logic for which options to show on the next page
  let iproovPassport = ["UK passport"],
    iproovDL = ["UK driving licence"],
    m2b = ["both"]

  let checker = (arr, target) => target.every(v => arr.includes(v))

  req.session.data['useiProovPP'] = checker(photoIds, iproovPassport)
  req.session.data['useiProovDL'] = checker(photoIds, iproovDL)
  req.session.data['useM2b'] = checker(photoIds, m2b)

  // route to the methods page unless the 'none' option is picked
  if (photoIds === 'none') {
    res.redirect('other-ways')
  } else {
    res.redirect('methods')
  }
})

router.post('/pyi/v6/methods', function (req, res) {
  const method = req.session.data['method']
  prototype = req.session.data['prototype']

  if (method === 'app') {
    res.redirect('app-intro')
  } else if (method === 'scan') {
    res.redirect('scan-intro')
  } else if (method === 'scandl') {
    res.redirect('scan-intro')
  } else if (method === 'm2b') {
    res.redirect('hub-intro')
  } else {
    res.redirect('other-ways')
  }
})

router.post('/pyi/v6/choose-doc', function (req, res) {
  const id = req.session.data['id-choice']

  if (id === 'driving licence') {
    res.redirect('driving-licence-details')
  } else {
    res.redirect('passport-details')
  }
})

router.get('/pyi/v6/hub', function (req, res) {
  let displaybanner = req.session.displaybanner

  if (displaybanner === 'true') {
    showBanner = 'true'
    // reset
    req.session.data.displaybanner = 'false'
  } else {
    showBanner = 'false'
    req.session.data.displaybanner = 'false'
  }
  let version = req.session.data.version
  if (version === undefined) {
    version = 'v6'
  }
  return res.render('pyi/v6/hub', {
    'showBanner': showBanner
  })
})

router.post('/pyi/v6/hub', function (req, res) {
  const passportComplete = req.session.data['passport-complete']
  const DLComplete = req.session.data['driving-licence-complete']
  const craComplete = req.session.data['cra-complete']
  const mobileComplete = req.session.data['mobile-complete']

  // show the notification on the hub page when returned
  req.session.data.displaybanner = 'true'

  // send to hub unless all are complete
  if (passportComplete === 'true' && DLComplete === 'true' && craComplete === 'true' && mobileComplete === 'true') {
    if (req.session.data['emailAddress'] !== '') {
      var personalisation = {
        'name': req.session.data['given-names']
      }
      notify.sendEmail(
        'bd8433a8-0575-4202-a677-844da0385a84',
        req.session.data['emailAddress'],
        { personalisation: personalisation }
      ).catch(err => console.error(err))
    }
    res.redirect('success')
  } else {
    res.redirect('hub')
  }
})

// decide whether to redirect
router.post('/pyi/v6/iproov-success', function (req, res) {
  if (req.session.data['emailAddress'] !== '') {
    var personalisation = {
      'name': req.session.data['given-names']
    }
    notify.sendEmail(
      '1eeb1623-ae7e-44f0-be5a-9076542d0184',
      req.session.data['emailAddress'],
      { personalisation: personalisation }
    ).catch(err => console.error(err))
  }
  res.redirect('success')
})

// address history
router.post('/pyi/v6/address-history', function (req, res) {
  const over5 = req.session.data['lived-5']

  if (over5 === 'yes') {
    res.redirect('success')
  } else {
    res.redirect('address-history-2')
  }
})

// address history CRA
router.post('/pyi/v6/address-history-cra', function (req, res) {
  const over5 = req.session.data['lived-5']

  if (over5 === 'yes') {
    res.redirect('kbv-check-details')
  } else {
    res.redirect('kbv-address-2-cra')
  }
})

// KBV question picker - runs after spinner - creates a list of questions and stores them
router.post('/pyi/v6/kbv-question-picker', function (req, res) {

  if (req.session.data['kbvs']) {

  } else {
    // look for overrides from query string
    let kbvGroup = []
    if (req.session.data['pyikbv']) {
      let override = req.session.data['pyikbv']
      // turn string into an array
      var forcekbv = override.split(',')
      console.log('forced kbvs: ' + forcekbv)
      kbvGroup.push(forcekbv)
    } else {
      // create some question groupings
      var kbvGroupings = [[1, 3, 4], [4, 5, 6], [7, 8, 9]]
      kbvGroup = kbvGroupings
    }
    console.log(kbvGroup)

    // pick a random number, no higher than the total kbv groups and use it to select an array item
    let chosenKbvGroup = kbvGroup[Math.floor(Math.random() * kbvGroup.length)]

    // move the chosen values into a new object to track progress
    const kbvTracker = {}
    for (const key of chosenKbvGroup) {
      // set all questions to false
      kbvTracker[key] = false
    }

    // push back the tracker object to the data store
    req.session.data['kbvs'] = kbvTracker

    // get view of the first question unless coming back from errors
    let target = 'kbv-question-' + Object.keys(kbvTracker)[0]

    // redirect to the first question
    res.redirect(target)
  }
})

// KBV questions - find next question or go to spinner page
router.post('/pyi/v6/kbv-question-answered', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvs'] || { '1': false, '3': false, '4': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'kbv-checking-cra'
  } else {
    // check if it the third question
    if (index === 2) {
      target = 'kbv-checking-cra-error'
    } else {
      // get the next question
      target = 'kbv-question-' + Object.keys(kbvTracker)[index+1]
    }
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// KBV questions resume after error
router.post('/pyi/v6/kbv-question-resumed', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvs'] || { '1': false, '3': false, '4': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'kbv-checking-cra'
  } else {
    // check if it the third question
    target = 'kbv-question-' + Object.keys(kbvTracker)[index+1]
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})


// mobile number flow
router.post('/pyi/v6/mobile-number', function (req, res) {

  // pick up the selected docs
  const useMobile = req.session.data['mobile-number']

  // send to hub unless all are complete
  if (useMobile === 'use saved') {
    res.redirect('mobile-checking')
  } else {
    res.redirect('mobile-phone-number')
  }
})

router.post('/pyi/v6/passport-details', function (req, res) {
  res.redirect('passport-details')
})

router.post('/pyi/v6/driving-licence-details', function (req, res) {
  res.redirect('driving-licence-details')
})

// work out back links on a page with multiple incoming routes
router.get('/pyi/v6/other-ways', function (req, res) {
  currentURL = req.protocol + '://' + req.get('host') + req.originalUrl
  prevURL = req.get('Referrer')
  console.log(currentURL)
  return res.render('pyi/v6/other-ways', {
    'prevURL': prevURL,
    'currentURL': currentURL
  })
})


// #### PYI ROUND 5 ROUTING ####

router.post('/pyi/v5/photo-id-documents', function (req, res) {
  // pick up the selected docs
  const photoIds = req.session.data['id-documents']
  prototype = req.session.data['prototype']

  // work out the logic for which options to show on the next page
  let iproovPassport = ["UK passport"],
    iproovDL = ["UK driving licence"],
    m2b = ["UK passport","UK driving licence"]

  let checker = (arr, target) => target.every(v => arr.includes(v))

  req.session.data['useiProovPP'] = checker(photoIds, iproovPassport)
  req.session.data['useiProovDL'] = checker(photoIds, iproovDL)
  req.session.data['useM2b'] = checker(photoIds, m2b)

  // route to the methods page unless the 'none' option is picked
  for (j = 0; j < photoIds.length; j++) {
    if (photoIds[j] === 'none') {
      if (prototype.oiaDir) {
        res.redirect('/oia/v1/oia-start')
        // TODO use main routing to find name and folder of page
      } else {
        res.redirect('other-ways')
      }
    } else {
      res.redirect('methods')
    }
  }
})

router.post('/pyi/v5/methods', function (req, res) {
  const method = req.session.data['method']
  prototype = req.session.data['prototype']

  if (method === 'app') {
    res.redirect('app-intro')
  } else if (method === 'scan') {
    res.redirect('scan-intro')
  } else if (method === 'scandl') {
    res.redirect('driving-licence-details')
  } else if (method === 'm2b') {
    res.redirect('hub-intro')
  } else {
    if (prototype.oiaDir) {
      res.redirect('/oia/v1/oia-start')
      // TODO use main routing to find name and folder of page
    } else {
      res.redirect('other-ways')
    }
  }
})

router.get('/pyi/v5/hub', function (req, res) {
  let displaybanner = req.session.displaybanner

  if (displaybanner === 'true') {
    showBanner = 'true'
    // reset
    req.session.data.displaybanner = 'false'
  } else {
    showBanner = 'false'
    req.session.data.displaybanner = 'false'
  }
  let version = req.session.data.version
  if (version === undefined) {
    version = 'v4'
  }
  return res.render('pyi/v5/hub', {
    'showBanner': showBanner
  })
})

router.post('/pyi/v5/hub', function (req, res) {
  const passportComplete = req.session.data['passport-complete']
  const DLComplete = req.session.data['driving-licence-complete']
  const craComplete = req.session.data['cra-complete']
  const mobileComplete = req.session.data['mobile-complete']

  // show the notification on the hub page when returned
  req.session.data.displaybanner = 'true'

  // send to hub unless all are complete
  if (passportComplete === 'true' && DLComplete === 'true' && craComplete === 'true' && mobileComplete === 'true') {
    notify.sendEmail(
      '1eeb1623-ae7e-44f0-be5a-9076542d0184',
      req.session.data['emailAddress']
    ).catch(err => console.error(err))
    res.redirect('success')
  } else {
    res.redirect('hub')
  }
})

// decide whether to redirect
router.post('/pyi/v5/iproov-success', function (req, res) {
  notify.sendEmail(
    '1eeb1623-ae7e-44f0-be5a-9076542d0184',
    req.session.data['emailAddress']
  ).catch(err => console.error(err))
  res.redirect('success')
})

// KBV question picker - runs after spinner - creates a list of questions and stores them
router.post('/pyi/v5/kbv-question-picker', function (req, res) {

  // look for overrides from query string
  let kbvGroup = []
  if (req.session.data['pyikbv']) {
    let override = req.session.data['pyikbv']
    // turn string into an array
    var forcekbv = override.split(',')
    console.log('forced kbvs: ' + forcekbv)
    kbvGroup.push(forcekbv)
  } else {
    // create some question groupings
    var kbvGroupings = [[1, 3, 4], [4, 5, 6], [7, 8, 9]]
    kbvGroup = kbvGroupings
  }
  console.log(kbvGroup)

  // pick a random number, no higher than the total kbv groups and use it to select an array item
  let chosenKbvGroup = kbvGroup[Math.floor(Math.random() * kbvGroup.length)]

  // move the chosen values into a new object to track progress
  const kbvTracker = {}
  for (const key of chosenKbvGroup) {
    // set all questions to false
    kbvTracker[key] = false
  }

  // push back the tracker object to the data store
  req.session.data['kbvs'] = kbvTracker

  // get view of the first question
  let target = 'kbv-question-' + Object.keys(kbvTracker)[0]

  // redirect to the first question
  res.redirect(target)
})


// KBV questions - find next question or go to spinner page
router.post('/pyi/v5/kbv-question-answered', function (req, res) {

  // pull back the kbv tracker objects from the data store or set some if they don't exist
  let kbvTracker = req.session.data['kbvs'] || { '1': false, '3': false, '4': false }

  // pull back the number of the question just submitted - it's a hidden field on question page
  let kbvCurrent = req.session.data['kbvNum']

  // need to work out the index of the current question in the group
  // turn the object into an array
  var questions = Object.keys(kbvTracker)
  // find the index
  var index = questions.indexOf(kbvCurrent)

  // set current question answered status to true
  kbvTracker[kbvCurrent] = true

  let target = ''

  // is it the last question?
  if (index === questions.length -1) {
    // go to spinner page
    target = 'kbv-checking-cra'
  } else {
    target = 'kbv-question-' + Object.keys(kbvTracker)[index+1]
  }

  // redirect to the next question or the spinner if done
  res.redirect(target)
})

// mobile number flow
router.post('/pyi/v5/mobile-number', function (req, res) {

  // pick up the selected docs
  const useMobile = req.session.data['mobile-number']

  // send to hub unless all are complete
  if (useMobile === 'use saved') {
    res.redirect('mobile-checking')
  } else {
    res.redirect('mobile-phone-number')
  }
})

router.post('/pyi/v5/passport-details', function (req, res) {
  res.redirect('passport-details')
})


// #### PYI ROUND 4 ROUTING ####

router.post('/pyi/v4/photo-id-documents', function (req, res) {
  // pick up the selected docs
  const photoIds = req.session.data['id-documents']
  // work out the logic for which options to show on the next page
  let iproovPassport = ["UK passport"],
    iproovDL = ["UK driving licence"],
    m2b = ["UK passport","UK driving licence"]

  let checker = (arr, target) => target.every(v => arr.includes(v))

  req.session.data['useiProovPP'] = checker(photoIds, iproovPassport)
  req.session.data['useiProovDL'] = checker(photoIds, iproovDL)
  req.session.data['useM2b'] = checker(photoIds, m2b)

  // route to the methods page unless the 'none' option is picked
  for (j = 0; j < photoIds.length; j++) {
    if (photoIds[j] === 'none') {
      res.redirect('other-ways')
    } else {
      res.redirect('methods')
    }
  }
})

router.post('/pyi/v4/methods', function (req, res) {
  const method = req.session.data['method']

  if (method === 'app') {
    res.redirect('download-app')
  } else if (method === 'scan') {
    res.redirect('passport-details')
  } else if (method === 'scandl') {
    res.redirect('driving-licence-details')
  } else if (method === 'm2b') {
    res.redirect('hub')
  } else {
    res.redirect('other-ways')
  }
})

router.get('/pyi/v4/hub', function (req, res) {
  let displaybanner = req.session.displaybanner

  if (displaybanner === 'true') {
    showBanner = 'true'
    // reset
    req.session.data.displaybanner = 'false'
  } else {
    showBanner = 'false'
    req.session.data.displaybanner = 'false'
  }
  let version = req.session.data.version
  if (version === undefined) {
    version = 'v4'
  }
  return res.render('pyi/v4/hub', {
    'showBanner': showBanner
  })
})

router.post('/pyi/v4/hub', function (req, res) {
  const passportComplete = req.session.data['passport-complete']
  const DLComplete = req.session.data['driving-licence-complete']
  const craComplete = req.session.data['cra-complete']
  const mobileComplete = req.session.data['mobile-complete']

  // show the notification on the hub page when returned
  req.session.data.displaybanner = 'true'

  // send to hub unless all are complete
  if (passportComplete === 'true' && DLComplete === 'true' && craComplete === 'true' && mobileComplete === 'true') {
    notify.sendEmail(
      '1eeb1623-ae7e-44f0-be5a-9076542d0184',
      req.session.data['emailAddress']
    ).catch(err => console.error(err))
    res.redirect('success')
  } else {
    res.redirect('hub')
  }
})

// decide whether to redirect
router.post('/pyi/v4/iproov-success', function (req, res) {
  notify.sendEmail(
    '1eeb1623-ae7e-44f0-be5a-9076542d0184',
    req.session.data['emailAddress']
  ).catch(err => console.error(err))
  res.redirect('success')
})

// #### PYI ROUND 3 ROUTING ####

router.get('/pyi/v3/service-start', function (req, res) {
  const version = 'v3'
  req.session.data.version = version
  return res.render('pyi/' + version + '/service-start')
})

router.post('/pyi/v3/gov-account', function (req, res) {
  const signin = req.session.data['account-signin']

  if (signin === 'signin') {
    res.redirect('signin')
  } else if (signin === 'create') {
    res.redirect('create')
  } else {
    res.redirect('start')
  }
})

router.post('/pyi/v3/signin', function (req, res) {
  const createAccount = req.session.data['create-account']

  if (createAccount === 'yes') {
    res.redirect('consent')
  } else {
    res.redirect('start')
  }
})

router.post('/pyi/v3/methods', function (req, res) {
  const method = req.session.data['method']

  if (method === 'scan') {
    res.redirect('passport-details')
  } else if (method === 'm2b') {
    res.redirect('hub')
  } else {
    res.redirect('other-ways')
  }
})

router.get('/pyi/v3/hub', function (req, res) {
  let displaybanner = req.session.displaybanner

  if (displaybanner === 'true') {
    showBanner = 'true'
    // reset
    req.session.data.displaybanner = 'false'
  } else {
    showBanner = 'false'
    req.session.data.displaybanner = 'false'
  }

  return res.render('pyi/v3/hub', {
    'showBanner': showBanner
  })
})

router.post('/pyi/v3/hub', function (req, res) {
  const passportComplete = req.session.data['passport-complete']
  const DLComplete = req.session.data['driving-licence-complete']
  const p60Complete = req.session.data['p60-complete']
  const craComplete = req.session.data['cra-complete']
  const mobileComplete = req.session.data['mobile-complete']
  let kbvComplete = 'false'

  // only need 1 of the 2 kbv routes to be complete
  if (p60Complete === 'true' || craComplete === 'true') {
    kbvComplete = 'true'
  }

  // show the notification on the hub page when returned
  req.session.data.displaybanner = 'true'

  // send to hub unless all are complete
  if (passportComplete === 'true' && DLComplete === 'true' && kbvComplete === 'true' && mobileComplete === 'true') {
    res.redirect('success')
  } else {
    res.redirect('hub')
  }
})

router.post('/pyi/v3/photo-id', function (req, res) {
  const hasPhotoId = req.session.data['has-photo-id']

  if (hasPhotoId === 'app') {
    res.redirect('download-app')
  } else if (hasPhotoId === 'iproov') {
    res.redirect('scan-intro')
  }
})

router.post('/pyi/v3/passport-details', function (req, res) {
  res.redirect('photo-id')
})

router.post('/pyi/v3/passport-details-2', function (req, res) {
  res.redirect('hub')
})

router.post('/pyi/v3/use-scan', function (req, res) {
  const useScan = req.session.data['use-scan']

  if (useScan === 'yes') {
    res.redirect('scan-intro')
  } else {
    res.redirect('hub')
  }
})


// #### PYI ROUND 2 ROUTING ####

router.post('/pyi/v2/gov-account', function (req, res) {
  const signin = req.session.data['account-signin']

  if (signin === 'signin') {
    res.redirect('signin')
  } else if (signin === 'create') {
    res.redirect('create')
  } else {
    res.redirect('methods')
  }
})

router.post('/pyi/v2/methods', function (req, res) {
  const method = req.session.data['method']

  if (method === 'photoid') {
    res.redirect('photo-id')
  } else if (method === 'kbv') {
    res.redirect('kbv')
  } else {
    res.redirect('other-ways')
  }
})

// work out back links on a page with multiple incoming routes
router.get('/pyi/v2/without-app', function (req, res) {
  res.locals.currentURL = req.originalUrl
  res.locals.prevURL = req.get('Referrer')

  let prevURL = res.locals.prevUR
  if (req.session.data['use-app'] === 'No') {
    prevURL = 'use-app'
  }
  return res.render('pyi/v2/without-app', {
    'prevURL': prevURL
  })
})

// set version number if linked to directly
router.get('/pyi/v2/service-start-2', function (req, res) {
  const version = 'v2'
  req.session.data.version = version
  return res.render('pyi/' + version + '/service-start-2')
})

router.post('/pyi/v2/signin', function (req, res) {
  const createAccount = req.session.data['create-account']

  if (createAccount === 'yes') {
    res.redirect('consent')
  } else {
    res.redirect('methods')
  }
})

router.post('/pyi/v2/driving-licence-details-2', function (req, res) {
  res.redirect('kbv-checking-m2b')
})

// #### PYI ROUND 1 ROUTING ####

router.post('/pyi/*/service-start', function (req, res) {
  res.redirect('gov-account')
})

router.post('/pyi/*/signin', function (req, res) {
  res.redirect('methods')
})

router.post('/pyi/*/methods', function (req, res) {
  const method = req.session.data['method']

  if (method === 'photoid') {
    res.redirect('photo-id')
  } else if (method === 'kbv') {
    res.redirect('kbv')
  } else {
    res.redirect('other-ways')
  }
})

router.get('/pyi/v1/hub', function (req, res) {
  let displaybanner = req.session.displaybanner

  if (displaybanner === 'true') {
    showBanner = 'true'
    // reset
    req.session.data.displaybanner = 'false'
  } else {
    showBanner = 'false'
    req.session.data.displaybanner = 'false'
  }
  return res.render('pyi/v1/hub', {
    'showBanner': showBanner
  })
})

router.post('/pyi/v1/photo-id', function (req, res) {
  const hasPhotoId = req.session.data['has-photo-id']

  if (hasPhotoId === 'Yes') {
    res.redirect('photo-id-documents')
  } else if (hasPhotoId === 'Yes, but it\'s expired') {
    res.redirect('photo-id-expired')
  } else if (hasPhotoId === 'Yes, but not on me') {
    res.redirect('not-on-me')
  } else {
    res.redirect('other-ways')
  }
})

// branding for id question
router.post('/pyi/*/photo-id', function (req, res) {

  const hasPhotoId = req.session.data['has-photo-id']

  if (hasPhotoId === 'app') {
    res.redirect('download-app')
  } else if (hasPhotoId === 'iproov') {
    res.redirect('passport-details')
  } else if (hasPhotoId === 'kbv') {
    res.redirect('passport-details-2')
  } else {
    res.redirect('other-ways')
  }
})

// routing for driving licence page
router.post('/pyi/*/photo-id-dl', function (req, res) {

  const hasPhotoIdDl = req.session.data['has-photo-id-dl']

  if (hasPhotoIdDl === 'details') {
    res.redirect('driving-licence-details-2')
  } else {
    res.redirect('driving-licence-details-2')
  }
})

router.post('/pyi/*/photo-id-documents', function (req, res) {
  const photoIds = req.session.data['photo-id-docs']

  for (i = 0; i < photoIds.length; i++) {
    if (photoIds[i] === 'UK passport') {
      res.redirect('use-app')
    } else {
      res.redirect('ok-with-selfie')
    }
  }
})

router.post('/pyi/*/use-app', function (req, res) {
  const useApp = req.session.data['use-app']

  if (useApp === 'Yes') {
    res.redirect('download-app')
  } else {
    res.redirect('ok-with-selfie')
  }
})

// work out back links on a page with multiple incoming routes
router.get('/pyi/v1/other-ways', function (req, res) {
  res.locals.currentURL = req.originalUrl
  res.locals.prevURL = req.get('Referrer')

  let prevURL = res.locals.prevURL
  console.log('previous page is: ' + res.locals.prevURL + ' and current page is ' + req.url + ' ' + res.locals.currentURL )

  return res.render('pyi/v1/other-ways', {
    'prevURL': prevURL
  })
})

// work out back links on a page with multiple incoming routes
router.get('/pyi/v1/without-app', function (req, res) {
  res.locals.currentURL = req.originalUrl
  res.locals.prevURL = req.get('Referrer')

  let prevURL = res.locals.prevUR
  if (req.session.data['use-app'] === 'No') {
    prevURL = 'use-app'
  }
  return res.render('pyi/v1/without-app', {
    'prevURL': prevURL
  })
})

// happy with selfie question
router.post('/pyi/*/ok-with-selfie', function (req, res) {
  const selfieOk = req.session.data['selfie-ok']
  const idTypes = req.session.data['photo-id-docs']

  if (selfieOk === 'Yes') {
    // if yes then proceed down M1A
    res.redirect('before-you-start-selfie')
  } else {
    // see if they have both a driving licence and passport
    if (idTypes.length >= 2) {
      res.redirect('before-you-start-without-selfie')
    } else {
      res.redirect('other-ways')
    }
  }
})

router.post('/pyi/*/which-id', function (req, res) {
  const idType = req.session.data['photo-id-type']

  if (idType === 'Passport') {
    res.redirect('before-you-start-selfie')
  } else {
    res.redirect('before-you-start-selfie')
  }
})

router.post('/pyi/*/passport-details', function (req, res) {
  res.redirect('scan-intro')
})

router.post('/pyi/*/driving-licence-details', function (req, res) {
  res.redirect('scan-intro')
})

router.post('/pyi/*/passport-details-2', function (req, res) {
  res.redirect('driving-licence-details-2')
})

router.post('/pyi/v3/driving-licence-details-2', function (req, res) {
  res.redirect('hub')
})

router.post('/pyi/*/driving-licence-details-2', function (req, res) {
  res.redirect('bank-check')
})

router.post('/pyi/*/card-details-2', function (req, res) {
  res.redirect('card-kbv-1')
})

// create an account question
router.post('/pyi/*/create-account', function (req, res) {
  const createAccount = req.session.data['create-account']

  if (createAccount === 'yes') {
    res.redirect('create')
  } else {
    res.redirect('consent')
  }
})

router.post('/pyi/*/mobile-phone-otp', function (req, res) {
  const mobileNum = req.session.data['mobile-num']
  if (mobileNum !== '') {
    // generate a random 6 digit number for the SMS
    var pinCode1 = Math.floor(100 + Math.random() * 900)
    var pinCode2 = Math.floor(100 + Math.random() * 900)
    var personalisation = {
      'code': pinCode1 + " " + pinCode2
    }
    notify.sendSms(
      'ab7f39a3-6e26-46a4-b464-1d98df1dd463',
      mobileNum,
      { personalisation: personalisation }
    ).catch(err => console.error(err))
  }
  res.redirect('mobile-phone-otp')
})

module.exports = router
