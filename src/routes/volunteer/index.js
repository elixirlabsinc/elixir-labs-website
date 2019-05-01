import { h, Component } from 'preact';
import style from './style';

export default class Volunteer extends Component {
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
			<div class={style.volunteer}>
				<h1>Volunteer</h1>

			</div>
		);
	}
}
