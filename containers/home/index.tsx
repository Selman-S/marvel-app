import CharacterList from '@/components/characterList'
import { Feature } from '@/components/feature'
import React from 'react'

const HomeContainer = () => {
  return (
    <>

      <Feature />
      <div style={{ boxShadow: " 0px -17px 135px 185px rgba(236,29,36,1),0px 25px 20px -20px rgba(0,0,0,0.45)" }}>

        <div className='container flex justify-center  mx-auto ' >
          <CharacterList />
        </div>
      </div>

    </>
  )
}

export default HomeContainer