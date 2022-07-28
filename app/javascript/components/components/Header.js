import React from 'react'
import { Link } from 'react-router-dom'
import BulletPoint from './BulletPoint'

export default function Header() {
  return (
    <>
     <header className="bg-black">
      <a href="/" >
        <div className="inline-flex">
            <BulletPoint/>
            <h1 className="text-white text-3xl font-bold" style={{margin:"auto"}}> Don's Portfolio </h1>
        </div>
      </a>
    </header>
    </>
   
  )
}
