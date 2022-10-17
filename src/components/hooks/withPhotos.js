import { gql, useQuery } from '@apollo/client'

export function withPhotos (categoryId) {
  const withPhotos = gql`
    query getPhotos($categoryId: ID) {
      photos (categoryId: $categoryId){
        id
        categoryId
        src
        likes
        liked
        userId
        
      }
    }`

  const { loading, error, data } = useQuery(withPhotos, { variables: { categoryId } })

  return { loading, error, data }
}
