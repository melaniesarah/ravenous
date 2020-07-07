import {API_KEY as apiKey} from './config';

const Yelp = {
  search: async (term, location, sortBy) => {
    const url = 'https://api.yelp.com/v3/businesses/search?';
    const termQuery = 'term=' + term;
    const locationQuery = '&location=' + location;
    const sortByQuery = '&sort_by=' + sortBy;
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = corsUrl + url + termQuery + locationQuery + sortByQuery;

    try {
        const response = await fetch(endpoint, { headers: { Authorization: `Bearer ${apiKey}` }});
    
        if (response.ok) {
            const jsonResponse = await response.json();

            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
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
                        reviewCount: business.review_count
                    }
                })
            }  
        } 
    } catch (error) {
        console.log(error);
    }  
  }
};

export default Yelp;