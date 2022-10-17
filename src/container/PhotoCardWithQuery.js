import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from '@apollo/client/react/components'
import { gql } from '@apollo/client'

const GET_PHOTOS = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const renderProp = ({ loading, error, data }) => {
  if (loading) return <h2>loading...</h2>
  if (error) return <h2>Error! :-(</h2>
  const { photo = {} } = data || { photo: {} }
  return <PhotoCard {...photo} />
}

const GET_SINGLE_PHOTO = GET_PHOTOS

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
