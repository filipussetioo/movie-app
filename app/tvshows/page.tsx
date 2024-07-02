import React from 'react'
import Nav from "../layout/nav/page";
import {fetchData, fetchLogo} from "../api/movie.api";
import Carousel from '../layout/home/component/Carousel';
import { EmblaOptionsType } from 'embla-carousel'
import Hero from '../layout/home/component/Hero';

export default async function TVShows() {
    const OPTIONS: EmblaOptionsType = { loop: true }
    const tv = await fetchData('tv','popular?');
    
    const popTVid = await fetchLogo('tv',tv['results'][0].id);
    // console.log('aass:'+popTVid)

    return (
        <main className="relative min-h-screen">
            <Nav/>
            <section className='h-screen w-screen'>
                <Hero image={tv['results'][0].backdrop_path} logo={popTVid['logos'][0].file_path} />
                <div className='-top-[5rem] relative px-5'>
                    <h1 className='text-xl text-white font-bold home-title'>Popular TV Shows</h1>
                    <Carousel slides={tv['results']} options={OPTIONS}/>
                </div>
            </section>
        </main>
    )
}
