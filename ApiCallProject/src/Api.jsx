import axios from 'axios';

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID 3d3DqH-33kI57W8JWb4z-V4aMKOqb3vg5X8c0-ifVHI'
      },
      params: {
        query: term
      }
    });
    debugger;
    return response.data.results;
  };

  export default searchImages;