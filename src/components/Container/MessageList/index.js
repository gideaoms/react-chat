import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageList from '../../Presentational/MessageList'

class MessageListContainer extends Component {
  render () {
    return <MessageList messages={this.props.messages} />
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages
})

export default connect(mapStateToProps)(MessageListContainer)
