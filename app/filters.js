module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

// hack to let us try doing a title from the url

filters.urlToTitle = function(url, shift){
  if (url) {
  var temp = url.split('/').pop(); // get last element of the array as we can't guarantee the starting point
  console.log("url is" + temp);
  if (shift){
    temp = temp.slice(shift)
  }
  temp2 = temp.replace(/\-/g, ' ');
  return temp2.charAt(0).toUpperCase() + temp2.slice(1)
} else {
  return 'Blank';
}
}


// filter to rewrite a few obviously different page titles that we're using

filters.rewriteTitle = function(title){
  if (title == "Covid 19 coronavirus restrictions what you can and cannot do") {
    title = "Coronavirus: how to stay safe and help prevent the spread";
  } else if (title == "List of private providers of coronavirus testing" ) {
    title = "Private providers of coronavirus (COVID-19) testing";
  } else if (title == "Red amber and green list rules for entering england"){
    title = "Red, amber, green lists: check the rules for travel to England from abroad";
  } else {
    // nothing - continue
  }

  return title;
}

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
