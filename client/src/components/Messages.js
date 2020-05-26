import React from 'react';

// A component that contains a list of messages.
class Messages extends React.Component {
	// Render all the messages.
	render() {
		const { messages } = this.props;
		return <ul className="Messages-list">{messages.map((m) => this.renderMessage(m))}</ul>;
	}

	/*******************************************************************
	 * Render individual messages. The Current Member Logic will make   *
	 * sense once the online chat is implemented.                       *
	 * The logic is present to display messages from others on the left *
	 * while your messages to the left.                                 *
	 ********************************************************************/
	renderMessage(message) {
		const { member, text } = message;
		const { currentMember } = this.props;
		const messageFromMe = member.id === currentMember.id;
		const className = messageFromMe ? 'Messages-message currentMember' : 'Messages-message';
		return (
			<li className={className}>
				<span className="avatar" style={{ backgroundColor: member.color }} />
				<div className="Message-content">
					<div className="text">{text}</div>
				</div>
			</li>
		);
	}
}

export default Messages;
