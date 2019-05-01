import { h, Component } from 'preact';
import style from './style';

export default class Contact extends Component {
	state = {

	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:

	}

	// gets called just before navigating away from the route
	componentWillUnmount() {

	}

	render() {
		return (
			<div class={style.contact}>
				<h1>Contact</h1>

			</div>
		);
	}
}
