import React from 'react'
import Nav from "../layout/nav/page";
import {fetchPopularTVShowsData} from "../api/movie.api";
import Carousel from '../layout/home/component/Carousel';
import { EmblaOptionsType } from 'embla-carousel'

export default async function TVShows() {
    const OPTIONS: EmblaOptionsType = { loop: true }
    const tv = await fetchPopularTVShowsData();
    const TvResults = tv['results'];

    return (
        <main className="relative min-h-screen bg-white">
            <Nav/>
            <section className='h-screen pt-20'>
                <h1 className='text-3xl'>Popular TV Shows</h1>
                <Carousel slides={TvResults} options={OPTIONS}/>
            </section>
        </main>
    )
}
