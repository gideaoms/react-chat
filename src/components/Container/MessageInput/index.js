import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageInput from '../../Presentational/MessageInput'
import { Creators as ChatActions } from '../../../store/ducks/chat'

class MessageInputContainer extends Component {
  state = {
    messageText: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.addMessage(this.state.messageText)
  }

  handleChange = e => {
    this.setState({ messageText: e.target.value })
  }

  render () {
    return (
      <MessageInput
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        messageText={this.props.messageText}
      />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ChatActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(MessageInputContainer)
