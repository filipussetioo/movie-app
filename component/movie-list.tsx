// pages/index.js

import { GetServerSideProps } from 'next';
import Image from 'next/image';

const API_KEY = process.env.API_KEY;

const Movie = ({ movies }) => {
  return (
    <>
      {movies.map((movie, idx) => (
        <div key={idx}>
          <h1 className='text-black text-xl'>{movie.title}</h1>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
          />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  // Pass data to the page via props
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=`);
    const data = await response.json();
    return {
      props: {
        movies: data.results,
      },
    };
  } catch (error) {
    console.error('Error fetching data:' + error);
    return {
      props: {
        movies: [],
      },
    };
  }
};

export default Movie;