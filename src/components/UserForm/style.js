import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  color: #000;
  &[disabled] {
    opacity: .5;
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  color: #d4d1d6;
  text-align: center;
  &[disabled] {
    opacity: .5;
`

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  padding: 8px 0;
  color: #fff;
`
export const Error = styled.span`
  color: red;
  font-size: 14px;
`
