import React from 'react';
import {fetchPopularMovieData, fetchPopularTVShowsData, fetchTrendingData, fetchRecommendedTVShows} from "../../api/movie.api";
import Carousel from './component/Carousel';
import { EmblaOptionsType } from 'embla-carousel'
import Hero from './component/Hero';

export default async function Home () {
  const OPTIONS: EmblaOptionsType = { loop: false }
  const movies = await fetchPopularMovieData();
  const MoviesResults = movies['results'];
  const tv = await fetchPopularTVShowsData();
  const TvResults = tv['results'];
  const trending = await fetchTrendingData();
  const TrendingResults = trending['results'];
  const recTV = await fetchTrendingData();
  const RecommendedTV = recTV['results'];
  
  return (
    <section className='h-screen w-screen'>
        <Hero image={MoviesResults[0].backdrop_path} />
        <div className='-top-[5rem] relative px-5'>
          <h1 className='text-xl text-white font-bold home-title'>Trending</h1>
            <Carousel slides={TrendingResults} options={OPTIONS}/>
          <h1 className='text-xl text-white font-bold'>Popular Movie</h1>
            <Carousel slides={MoviesResults} options={OPTIONS}/>
          {/* <h1 className='text-xl text-white font-bold'>Wishlist</h1> */}
          <h1 className='text-xl text-white font-bold'>Popular TV Shows</h1>
            <Carousel slides={TvResults} options={OPTIONS}/>
          <h1 className='text-xl text-white font-bold'>Recommended TV Shows</h1>
            <Carousel slides={RecommendedTV} options={OPTIONS}/>
        </div>
    </section>
  );
}
