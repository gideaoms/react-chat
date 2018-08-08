import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #00a866;
  border-radius: 15px;
`

export const Span = styled.span`
  color: #fff;
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 5px;
  }
`

export const Count = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  margin-left: 5px;
`
