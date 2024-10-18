import axios from 'axios';

const API_KEY = 'AIzaSyCWOE3NBdePv0ZPZumd11_XiU0GPiC1a00';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const getMovieTrailer = async (movieTitle) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        q: `${movieTitle} official trailer`,
        type: 'video',
        maxResults: 1,
        key: API_KEY,
      },
    });
    return response.data.items[0]?.id?.videoId;
  } catch (error) {
    console.error('Error fetching YouTube trailer:', error);
    return null;
  }
};
