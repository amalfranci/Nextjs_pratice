import Head from 'next/head'
import Image from 'next/image'

import carImage from '../public/pexels-mikebirdy-170811.jpg'

function page() {
  return (
    <div>
        <h1>Thjs my gallery page</h1>
        <Image src={carImage} width={400} height={300} alt='carImage'/>
    </div> 
  )
}

export default page