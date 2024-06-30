import React, { useEffect, useState } from 'react';
import {fetchPopularMovieData, fetchPopularTVShowsData} from "../../api/movie.api";
import Image from 'next/image';
import Carousel from './component/Carousel';
import ReactDOM from 'react-dom/client'
import { EmblaOptionsType } from 'embla-carousel'

export default async function Home () {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const movies = await fetchPopularMovieData();
  const MoviesResults = movies['results'];
  const tv = await fetchPopularTVShowsData();
  const TvResults = tv['results'];

  // const img = fetchImg(results['backdrop_path']);
  
  return (
    <section className='h-screen pt-20'>
      <h1 className='text-3xl'>Popular Movie</h1>
        <Carousel slides={MoviesResults} options={OPTIONS}/>
      <h1 className='text-3xl'>Popular TV Shows</h1>
        <Carousel slides={TvResults} options={OPTIONS}/>
    </section>
  );
}
