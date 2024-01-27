import React from 'react'
import LastOrderTable from './LastOrderTable'
import TopPlatform from './TopPlatform'

const OrderContainer = () => {
  return (
    <div className='absolute flex'>
        <div className="w-[60%] flex items-center mt-[120px] ml-[98px] w-full flex-row">
           <LastOrderTable /> 
        </div>
        <div className="w-[35%] gap-5 flex mt-[520px] ml-[40px] flex-row">
            <TopPlatform />
        </div>
    </div>
  )
}

export default OrderContainer