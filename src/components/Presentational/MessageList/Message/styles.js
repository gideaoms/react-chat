import styled from 'styled-components'

export const ColumnImg = styled.td`
  border: none;
  padding: 0;
  width: 45px;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`

export const ColumnMessage = styled.td`
  padding: 0;
  text-align: ${props => (props.owner ? 'left' : 'right')};

  span {
    color: ${props => (props.owner ? '#888888' : '#eeeeef')};
    background-color: ${props => (props.owner ? '#eeeeef' : '#5420d8')};
    padding: 10px 15px;
    border-top-right-radius: ${props => (props.owner ? '10px' : '0')};
    border-bottom-right-radius: ${props => (props.owner ? '10px' : '0')};
    border-top-left-radius: ${props => (!props.owner ? '10px' : '0')};
    border-bottom-left-radius: ${props => (!props.owner ? '10px' : '0')};
    display: inline-block;
  }
`
