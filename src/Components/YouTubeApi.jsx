import axios from 'axios';

// YouTube API key for authentication
const API_KEY = 'AIzaSyCWOE3NBdePv0ZPZumd11_XiU0GPiC1a00';
// Base URL for YouTube Data API v3
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Function to fetch movie trailer from YouTube
export const getMovieTrailer = async (movieTitle) => {
  try {
    // Make a GET request to YouTube API search endpoint
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        q: `${movieTitle} official trailer`,
        type: 'video',
        maxResults: 1,
        key: API_KEY,
      },
    });
    // Extract and return the video ID of the first search result
    return response.data.items[0]?.id?.videoId;
  } catch (error) {
    // Log any errors that occur during the API request
    console.error('Error fetching YouTube trailer:', error);
    // Return null if an error occurs
    return null;
  }
};
