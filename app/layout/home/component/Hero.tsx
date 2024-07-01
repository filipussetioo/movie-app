import React from 'react'

type PropType = {
  image: string;
}

const Hero: React.FC<PropType> = (props) => {
    const {image} = props

    return (
      <div className='hero h-[90vh] flex' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})`, backgroundSize: 'cover'}}>
        <div className='content h-[90vh] w-[90vw]'></div>
      </div>
    )
}

export default Hero