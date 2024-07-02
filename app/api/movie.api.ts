const API_KEY = process.env.API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export async function fetchData(search:string,type:string,x?:string) {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/${search}/${type}${x}language=en-US&page=1`, options);
      const data = response.json();
  
      return data;
    }catch(error){
      console.log("Error fetching data:"+ error);
      const data = "Error fetching data:"+ error

      return data;
    }
}


export async function fetchRecommendedTVShows() {
  try{
    const response = await fetch('https://api.themoviedb.org/3/tv/1434/recommendations?language=en-US&page=1', options);
    const data = response.json();

    return data;
  }catch(error){
    console.log("Error fetching data:"+ error);
    const data = "Error fetching data:"+ error

    return data;
  }
}

export async function fetchRecommendedMovie(){
  try{
    const response = await fetch('https://api.themoviedb.org/3/movie/519182/recommendations?language=en-US&page=1', options);
    const data = response.json();

    return data;
  }catch(error){
    console.log("Error fetching data:"+ error);
    const data = "Error fetching data:"+ error

    return data;
  }
}

export async function fetchLogo(type:string,id:string){
  try{
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/images`, options);
    const data = response.json();

    return data;
  }catch(error){
    console.log("Error fetching data:"+ error);
    const data = "Error fetching data:"+ error

    return data;
  }
}