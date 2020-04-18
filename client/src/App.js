import React from 'react';
import io from 'socket.io-client';

import './App.scss';

import Messages from './components/Messages';
import Input from './components/Input';
import Header from './components/Header';

// A Random colour generator to generate random avatars.
function randomColor() {
	return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

function randomId() {
	return Math.floor(Math.random() * 1000);
}

class App extends React.Component {
	// State contains a messages array.
	state = {
		messages: [
			// Hard coded the first message as of now.
			{
				text: 'This is a test message!',
				member: {
					color: randomColor()
				}
			}
		],
		member: {
			color: randomColor(),
			id: randomId()
		}
	};

	socket = null;

	componentDidMount() {
		this.socket = io('http://localhost:3000');

		this.socket.on('message', (data) => {
			const messages = this.state.messages;
			messages.push({
				text: data.message,
				member: data.member
			});
			this.setState({ messages: messages });
		});
	}

	// Function to handle a sent message event.
	onSendMessage = (message) => {
		const { member } = this.state;
		this.socket.emit('message', {
			message: message,
			member: member
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Messages messages={this.state.messages} currentMember={this.state.member} />
				<Input onSendMessage={this.onSendMessage} />
			</div>
		);
	}
}

export default App;
