import { useEffect } from 'react'
import WindowCardList from './WindowCardList';
import jsonData from './data.json'

const Problems = ({ setProblemDetails, setBreadCrumbTrailPath}:any) => {
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <WindowCardList data={jsonData} setProblemDetails={setProblemDetails} setBreadCrumbTrailPath={setBreadCrumbTrailPath} />
    </div>
  )
}

export default Problems
