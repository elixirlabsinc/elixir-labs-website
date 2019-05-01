import { h, Component } from 'preact';
import style from './style';

export default class AboutUs extends Component {
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
			<div class={style.aboutUs}>
				<h1>About Us</h1>

			</div>
		);
	}
}
