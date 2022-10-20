import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
display: inline-block;
width: 31.33%;
position: relative;
height: 8rem;
overflow: hidden;
margin: 1%;
border-radius: 0.5rem;
box-shadow: 0 0 8px rgb(0 0 0 / 30%);
&:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
`
export const Grid = styled.div`
padding-top: 32px;
`
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
