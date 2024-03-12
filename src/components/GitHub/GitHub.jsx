import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
  // const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setPhotos(data);
  //     });
      
  // }, []);

  const photos = useLoaderData()
  return (
    <>
      <div className='text-center m-4 bg-gray-600 p-4 text-3xl text-white'>User</div>
      <div className='text-center m-4 bg-gray-100 p-4 text-3xl text-black mx-flex'>
        {photos.map((photo) => (
          <div className="card" key={photo.id} >
            <img src={photo.url} alt={photo.title} width={100} />
            <h4>{photo.title}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default GitHub

export const userInfoLoader = async () =>{
  const photos = await fetch('https://jsonplaceholder.typicode.com/photos')
  return photos.json()
}