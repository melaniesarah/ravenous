import { config } from './config.js';

const Yelp = {
  search: async function(term, location, sortBy) {
    const url = 'https://api.yelp.com/v3/businesses/search?';
    const termQuery = 'term=' + term;
    const locationQuery = '&location=' + location;
    const sortByQuery = '&sort_by=' + sortBy;
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = corsUrl + url + termQuery + locationQuery + sortByQuery;

    return fetch(endpoint, {
      headers: { Authorization: `Bearer ${config.API_KEY}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          console.log(jsonResponse);
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
    }
};

export default Yelp;