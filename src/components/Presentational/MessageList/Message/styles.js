import styled from 'styled-components'

export const Li = styled.li`
  list-style: none;
  padding: 15px 20px;
  margin-bottom: 5px;
  border-radius: 10px;
  font-weight: 400;
  align-self: ${props => (props.owner ? 'flex-start' : 'flex-end')};
  background-color: ${props => (props.owner ? '#eeeeef' : '#5420d8')};
  color: ${props => (props.owner ? '#888888' : '#eeeeef')};
`
