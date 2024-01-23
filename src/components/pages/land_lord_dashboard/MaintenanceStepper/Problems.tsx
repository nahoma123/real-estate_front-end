import React, { useEffect } from 'react'
import WindowCardList from './WindowCardList';
import jsonData from './data.json'

const Problems = () => {
  useEffect(() => {
    console.log(jsonData["Bathroom and Toilet"])
    if(Array.isArray(jsonData["Bathroom and Toilet"]["Basin"]["Basin on brackets"])){
      console.log('it is an array')
    }
    else{
      console.log('it in not an array')
    }
  }, [])
  return (
    <div>
      <WindowCardList data={jsonData} />
    </div>
  )
}

export default Problems
