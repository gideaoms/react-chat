import React from 'react'
import { shallow } from 'enzyme'
import MessageInput from '.'

describe('MessageInput Component - Presentational', () => {
  it('should be able to submit a message', () => {
    const handleSubmit = jest.fn()
    const wrapper = shallow(<MessageInput handleSubmit={handleSubmit} />)

    wrapper
      .find('form')
      .first()
      .simulate('submit')

    expect(handleSubmit).toBeCalled()
  })

  it('should be able to write a message', () => {
    const handleChange = jest.fn()
    const message = 'Hello World'
    const wrapper = shallow(<MessageInput handleChange={handleChange} />)

    wrapper
      .find('input')
      .first()
      .simulate('change', message)

    expect(handleChange).toBeCalled()
    expect(handleChange).toBeCalledWith(message)
  })
})
