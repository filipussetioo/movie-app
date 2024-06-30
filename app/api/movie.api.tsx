const API_KEY = process.env.API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export async function fetchPopularMovieData() {
    try{
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
      const data = response.json();
  
      return data;
    }catch(error){
      console.log("Error fetching data:"+ error);
      
      return error;
    }
}

export async function fetchPopularTVShowsData() {
  try{
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
    const data = response.json();

    return data;
  }catch(error){
    console.log("Error fetching data:"+ error);
    
    return error;
  }
}