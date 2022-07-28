import React from 'react'
import BulletPoint from './BulletPoint'

export default function Header() {
  return (
    <>
     <header className="bg-black">
      <div className="inline-flex">
        <BulletPoint/>
        <h1 className="text-white text-3xl font-bold" style={{margin:"auto"}}> Don's Portfolio </h1>
      </div>
    </header>
    </>
   
  )
}
