import ContentDisplay from '@/components/ContentDisplay'
import React from 'react'

const ContentPage:React.FC<{params:{contentId:string}}> = ({params:{contentId}}) => {
  return (
    <ContentDisplay id={contentId} />

  )
}

export default ContentPage