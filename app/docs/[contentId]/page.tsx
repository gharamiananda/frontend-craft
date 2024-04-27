import React from 'react'

const ContentPage:React.FC<{params:{contentId:string}}> = ({params:{contentId}}) => {
  return (
    <div>ContentPage {contentId}</div>
  )
}

export default ContentPage