const request = require('request');


const fetchTopics = function(type, cb) {
  const url=`https://www.gov.uk/api/search.json?filter_format=${type}&fields=title,description&count=1000`;
  request(url, { json: true }, (error, result, body) => {
    cb(body.results);
  });
};


module.exports = {

  fetchMainstreamTopics: function(cb) {
    fetchTopics('mainstream_browse_page', cb);
  },

  fetchSpecialistTopics: function(cb) {
    fetchTopics('specialist_sector', cb);
  }
};
