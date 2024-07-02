import React from 'react'
import Image from 'next/image'

type PropType = {
  image: string
  logo: string
}

const Hero: React.FC<PropType> = (props) => {
    const {image, logo} = props

    return (
      <div className='hero h-[90vh] flex' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})`, backgroundSize: 'cover'}}>
        <div className='content w-full justify-center flex-row-reverse items-end -top-[5rem] flex relative'>
          <Image
            src={`https://image.tmdb.org/t/p/w500${logo}`}
            width={500}
            height={50}
            alt={logo}
            className='rounded-lg slider-img max-h-[200px] min-w-100 block'
          />
        </div>
      </div>
    )
}

export default Hero