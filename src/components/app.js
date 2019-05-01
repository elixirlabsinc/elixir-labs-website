import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Work from '../routes/work';
import AboutUs from '../routes/aboutUs';
import Volunteer from '../routes/volunteer';
import Contact from '../routes/contact';

import Footer from './footer';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Work path="/work/" />
					<AboutUs path="/aboutus/" />
					<Volunteer path="/volunteer/" />
					<Contact path="/contact/" />
				</Router>
				<Footer />
			</div>
		);
	}
}
