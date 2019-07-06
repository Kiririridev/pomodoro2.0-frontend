import * as React from 'react';
import {getPomodoros} from '../../api/api';

//todo fix bug
//todo split to component and container
//todo rewrite to functional component
//todo plan redux


export default class Timer extends React.Component {

	timer;

	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			isOn: false,
			start: 0,
		};

		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
	}

	startTimer() {
		this.setState({
			isOn: true,
			time: this.state.time,
			start: Date.now() - this.state.time,
		});
		this.timer = setInterval(() => this.setState({
			time: Date.now() - this.state.start,
		}), 1);
	};


	stopTimer() {
		this.setState({
			isOn: false,
		});
	};

	resetTimer() {
		this.setState({
			time: 0,
			isOn: false,
		});
	};

	render() {
		let fetch = <button onClick={getPomodoros}>FETCH</button>;

		let start = (this.state.time === 0) ?
			<button onClick={this.startTimer}>START</button> :
			null;

		let stop = (this.state.time == 0) ?
			null :
			<button onClick={this.stopTimer}>STOP</button>;

		let resume = (this.state.time == 0 || this.state.isOn) ?
			null :
			<button onClick={this.startTimer}>RESUME</button>;

		let reset = (this.state.time == 0 || this.state.isOn) ?
			null :
			<button onClick={this.resetTimer}>RESET</button>;

		return (
			<div>
				<h3>timer: {(this.state.time)}</h3>
				{fetch}
				{start}
				{resume}
				{stop}
				{reset}
			</div>
		);
	}

}



