import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className='bg-background h-auto'>
        { children }
    </div>
  )
}

export default MainLayout