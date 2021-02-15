const fetch = require('node-fetch');



const checkStatus = function(res) {
  if (res.ok) { // res.status >= 200 && res.status < 300
    return res;
  } else {
    console.log(`error: ${res.status}, ${res.statusText}`);
  }
}


const extract3 = (obj, slug1, slug2, uuid) => {
  if (obj.links.child_taxons) {
    obj.links.child_taxons.forEach(link => {
      const slug = link.base_path.replace(/\/[^/]+\//,'');
      console.log(`"${slug1}/${slug2}/${slug}" => "${uuid}", "${link.content_id}",`);
    })
  }
}

const extract2 = (obj, slug1, uuid) => {
  if (obj.links.child_taxons) {
    obj.links.child_taxons.forEach(link => {
      const slug = link.base_path.replace(/\/[^/]+\//,'');
      console.log(`"${slug1}/${slug}" => "${uuid}", "${link.content_id}",`);
      fetch(`https://www.gov.uk${link.api_path}`)
        .then(checkStatus)
        .then(res => res.json())
        .then(obj => extract3(obj, slug, slug1, uuid))
        .catch(err => console.log('catch3', err));
    });
  }
};


const extract = obj => {
  if (obj.links.level_one_taxons) {
    obj.links.level_one_taxons.forEach(link => {
      const slug = link.base_path.slice(1);
      const uuid = link.content_id;
      console.log(`"${slug}" => "${uuid}",`);
      fetch(`https://www.gov.uk${link.api_path}`)
        .then(checkStatus)
        .then(res => res.json())
        .then(obj => extract2(obj, slug, uuid))
        .catch(err => console.log('catch2', err));
    });
  }
}


fetch('https://www.gov.uk/api/content')
  .then(checkStatus)
  .then(res => res.json())
  .then(extract)
  .catch(err => console.log('catch1'));
