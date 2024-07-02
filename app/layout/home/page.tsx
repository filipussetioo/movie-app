import React from 'react';
import {fetchData, fetchRecommendedTVShows, fetchLogo} from "../../api/movie.api";
import Carousel from './component/Carousel';
import { EmblaOptionsType } from 'embla-carousel'
import Hero from './component/Hero';

export default async function Home () {
  const OPTIONS: EmblaOptionsType = { loop: false }
  const movies = await fetchData('movie','popular?');
  const tv = await fetchData('tv','popular?');
  const trending = await fetchData('trending','all/','/week?');
  const recTV = await fetchRecommendedTVShows();
  const RecommendedTV = recTV['results'];
  const popMovieid = await fetchLogo('movie',movies['results'][0].id);
  
  return (
    <section className='h-screen w-screen'>
        <Hero image={movies['results'][0].backdrop_path} logo={popMovieid['logos'][0].file_path} />
        <div className='-top-[5rem] relative px-5'>
          <h1 className='text-xl text-white font-bold home-title'>Trending</h1>
            <Carousel slides={trending["results"]} options={OPTIONS}/>
          <h1 className='text-xl text-white font-bold'>Popular Movie</h1>
            <Carousel slides={movies['results']} options={OPTIONS}/>
          {/* <h1 className='text-xl text-white font-bold'>Wishlist</h1> */}
          <h1 className='text-xl text-white font-bold'>Popular TV Shows</h1>
            <Carousel slides={tv['results']} options={OPTIONS}/>
          <h1 className='text-xl text-white font-bold'>Recommended TV Shows</h1>
            <Carousel slides={RecommendedTV} options={OPTIONS}/>
        </div>
    </section>
  );
}
