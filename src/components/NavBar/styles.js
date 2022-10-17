import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center;
  background: #000;
  border-top: 1px solid #C78EFF;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #C78EFF;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

&[aria-current] {
  color: #8d00ff;

  &:after {
    ${fadeIn({ time: '0.8s' })};
    content: '•';
    position: absolute;
    bottom: 0;
    font-size: 34px;
    line-height: 20px;
  }
}
`
