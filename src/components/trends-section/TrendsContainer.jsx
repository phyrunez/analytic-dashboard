import React from 'react'
import TrendsGraph from './TrendsGraph'
import Order from './Order'

const TrendsContainer = () => {
  return (
    <div className='absolute flex'>
        <div className="w-[60%] flex items-center mt-[120px] ml-[102px] w-full flex-row">
           <TrendsGraph /> 
        </div>
        <div className="w-[35%] grid grid-cols-2 gap-5 flex mt-[120px] mx-8 flex-row">
            <Order />
        </div>
    </div>
  )
}

export default TrendsContainer