const request = require('request');
const taxonomies = require('taxonomies');

const show = function(topicSlug) {
  const url = `https://www.gov.uk/api/content/browse/${topicSlug}`;
  request(url, { json: true }, (error, result, body) => {
    const subtopicOrder = body.details.ordered_second_level_browse_pages;
    const subtopics = body.links.second_level_browse_pages;
    const payload = {
      title: body.title,
      description: body.description,
      taxonSearchFilter: taxonomies.taxonFilterLookup(`/browse/${topicSlug}`) || '',
      latestNews: latestNewsContent().map(newsResult => {
        return {
          title: newsResult.title,
          description: newsResult.description,
          url: newsResult._id,
          topic: newsResult.content_purpose_supergroup,
          subtopic: newsResult.content_purpose_subgroup,
          imageUrl: newsResult.image_url || 'https://assets.publishing.service.gov.uk/media/5e59279b86650c53b2cefbfe/placeholder.jpg',
          publicTimestamp: newsResult.public_timestamp
        }
      }),
      organisations: topicOrganisations(),
      featured: mostPopularContent(subtopics),
      subtopics: subtopicOrder.map(contentId => {
        const subtopic = subtopics.find(s => s.contentId == contentId);
        if (subtopic) {
          request(subtopic["api_url"], { json: true }, (error, result, body) => {
            const content =  accordion_content(body);
            return {
              title: subtopic.title,
              link: subtopic.link,
              subtopicSections: { items: content }
            }
          });
        } else {
          return null;
        }
      }).filter(e => e);
    }

    return payload;
}

module.exports = { show }
