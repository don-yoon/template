import React from 'react'
import { Link } from 'react-router-dom'
import BulletPoint from '../components/BulletPoint'

export default function Home() {
  return (
    <>
    Work In Progress
      <div className="flex flex-col">
        <div className="inline-flex">
          <BulletPoint/>
          <Link to="/ml5videoclass"><h1 className="text-3xl font-bold" style={{margin:"auto"}}> ml5 Video Classifier </h1></Link>
        </div>
        <div className="inline-flex">
          <BulletPoint/>
          <Link to="/ml5objecttrack"><h1 className="text-3xl font-bold" style={{margin:"auto"}}> ml5 Object Detection </h1></Link>
        </div>
        <div className="inline-flex">
          <BulletPoint/>
          <Link to="/reactthreefiber"><h1 className="text-3xl font-bold" style={{margin:"auto"}}> React Three Fiber </h1></Link>
        </div>
      </div>
    </>
  )
}
