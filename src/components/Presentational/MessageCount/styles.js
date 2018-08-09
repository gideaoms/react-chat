import styled from 'styled-components'

export const Container = styled.div`
  width: 65%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
  background-color: #00a866;
  border: 2px solid #00965b;
  border-radius: 15px;
  margin-top: 25px;
  min-height: 48px;
`

export const Span = styled.span`
  color: #fff;
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 6px;
  }
`

export const Count = styled.span`
  margin-right: 6px;
`
