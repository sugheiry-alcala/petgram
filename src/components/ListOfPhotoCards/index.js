import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../hooks/withPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = withPhotos(categoryId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id} {...photo} />
      ))}
    </ul>

  )
}
