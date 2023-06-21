import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDk3OTJjNDdkYzMxN2EyNmU5NDk5MjQ0NzE1YTY3NyIsInN1YiI6IjY0OTBkZjYyMmY4ZDA5MDEwMGFiYTQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n8vqdP6Xzd5Tgyu91VLDrRgNM1JPJmAcBACOTUTT7go'
  }
};

  
export  const  getTrending=async()=>{
        const response = await axios.get('trending/all/day?', options)
        return response.data.results
  }

export  const  getSearchMovies=async(query)=>{
        const response = await axios.get(`search/movie?query=${query}`, options)
  return response.data.results
}

export  const  getMovieDetails=async(id)=>{
        const response = await axios.get(`movie/${id}?`, options)
        return response.data
}

export  const  getMovieCast=async(id)=>{
        const response = await axios.get(`movie/${id}/credits?`, options)
        console.log(response.data.cast)
  return response.data.cast
}

export  const  getMovieReviews=async(id)=>{
        const response = await axios.get(`movie/${id}/reviews?`, options)
        console.log(response?.data?.results)
        return response.data.results
}