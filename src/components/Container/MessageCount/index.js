import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import MessageCount from '../../Presentational/MessageCount'

class MessageCountContainer extends Component {
  render () {
    return (
      <MessageCount sent={this.props.sent} received={this.props.received} />
    )
  }
}

const getQtySentMessages = createSelector(
  state => state.chat.messages,
  messages => messages.filter(message => message.owner).length
)

const getQtyReceivedMessages = createSelector(
  state => state.chat.messages,
  messages => messages.filter(message => !message.owner).length
)

const mapStateToProps = state => ({
  sent: getQtySentMessages(state),
  received: getQtyReceivedMessages(state)
})

export default connect(mapStateToProps)(MessageCountContainer)
