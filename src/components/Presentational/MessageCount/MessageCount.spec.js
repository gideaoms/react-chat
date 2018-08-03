import React from 'react'
import { shallow } from 'enzyme'
import MessageCount from '.'

describe('MessageCount Component - Presentational', () => {
  it('should render quantity of messages', () => {
    const wrapper = shallow(<MessageCount sent={2} received={5} />)

    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toEqual('2')
    expect(
      wrapper
        .find('span')
        .last()
        .text()
    ).toEqual('5')
  })
})
