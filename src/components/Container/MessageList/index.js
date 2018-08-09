import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageList from '../../Presentational/MessageList'

class MessageListContainer extends Component {
  isMineMessage = (messages, index) => {
    return (
      !messages[index - 1] ||
      (messages[index].owner &&
        messages[index - 1].owner !== messages[index].owner)
    )
  }

  render () {
    return (
      <MessageList
        messages={this.props.messages}
        isMineMessage={this.isMineMessage}
      />
    )
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages
})

export default connect(mapStateToProps)(MessageListContainer)
