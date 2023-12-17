import Image from 'next/image'
import React from 'react'

export const Feature = () => {
  return (

    <div className='h-96 bg-no-repeat bg-contain -z-2  text-white' style={{ background: `url(/images/marvel_bg.jpg)` }} >

      <p className="container mx-auto pt-24  p-8 max-w-4xl lg:text-2xl">
        <span className="quote">

        There's only two things I ever managed to believe in. Firstly, myself. And even then only about 50% of the time. Secondly, the future. That there would be one and <strong>we'd make it</strong>.
        </span>

        <br></br>
        —Tony Stark
      </p>
    </div>

  )
}
