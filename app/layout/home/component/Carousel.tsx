'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EnableCarouselArrowButton'

type SlideType = {
  poster_path: string;
  original_name: string;
  title: string;
};

type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  return (
    <div className="embla rounded-lg">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide,index) => (
            <div className="embla__slide" key={index}>
              <Image
                  src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`}
                  width={200}
                  height={50}
                  alt={slide.title}
                  className='rounded-lg slider-img'
                />
                {/* <div className="embla__slide__number text-md text-center">
                  <span>{
                    slide.title ? slide.title : slide.original_name
                  }</span>
                </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div> */}
    </div>
  )
}

export default EmblaCarousel
