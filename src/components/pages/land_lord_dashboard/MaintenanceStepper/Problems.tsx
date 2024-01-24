import { useEffect } from 'react'
import WindowCardList from './WindowCardList';
import jsonData from './data.json'

const Problems = () => {
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <WindowCardList data={jsonData} />
    </div>
  )
}

export default Problems
