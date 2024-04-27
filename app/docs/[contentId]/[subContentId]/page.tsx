import React from 'react'

const SubContentPage:React.FC<{params:{subContentId:string}}> = ({params:{subContentId}}) => {
  return (
    <div>SubContentPage {subContentId}</div>
  )
}

export default SubContentPage