// Basic Example:

const axios = require('axios'); // For Node.js, or include via CDN for browser use

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Data:', response.data); // The data from the API
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Error handling
  });





// POST Request Example:

  axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Axios Example',
    body: 'This is a sample post!',
    userId: 1
  })
  .then(response => {
    console.log('Post created:', response.data);
  })
  .catch(error => {
    console.error('Error creating post:', error);
  });





// Axios with async/await:

    async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      console.log('Data:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  fetchData();




// Setting Default Configurations:
  
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000, // 5 seconds timeout
    headers: { 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }
  });
  
  instance.get('/posts/1')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
 
 
 
 
 
// Using Interceptors:

  axios.interceptors.request.use(config => {
    console.log('Request sent:', config);
    return config;
  }, error => Promise.reject(error));
  
  axios.interceptors.response.use(response => {
    console.log('Response received:', response);
    return response;
  }, error => Promise.reject(error));