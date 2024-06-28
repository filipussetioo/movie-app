import React, { useEffect, useState } from 'react';
import Movie from "../../../component/movie-list";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Image from 'next/image';

const API_KEY = process.env.API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

async function fetchData() {
  // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .catch(err => console.error(err));
  // if (!response.ok) {
  //   throw new Error('Error fetching data');
  // }
}

// async function fetchImg({path}){
//   return fetch(`https://image.tmdb.org/t/p/original/${path}`, options)
//   .then(response => response.json())
//   .catch(err => console.error(err));
// }

export default async function Home () {
  const movies = await fetchData();
  const results = movies['results'];
  // const img = fetchImg(results['backdrop_path']);
  
  return (
    <section className='h-screen pt-20'>
        <div className='grid grid-col-row grid-cols-3 justify-between'>
        {results.map((result,idx) => 
        <div key={idx}>
          <h1 className='text-black text-xl'>{result['title']}</h1>
          <Image
              src={`https://image.tmdb.org/t/p/w500${result['backdrop_path']}`}
              width={500}
              height={300}
              alt={result['title']}
            />
        </div>  
        )}
        </div>
    </section>
  );
}
