import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">EL</Link>
			<Link class ={style.right} activeClassName={style.active} href="/work/">Work</Link>
			<Link class ={style.right} activeClassName={style.active} href="/aboutus/">About Us</Link>
			<Link class ={style.right} activeClassName={style.active} href="/volunteer/">Volunteer</Link>
			<Link class ={style.right} activeClassName={style.active} href="/contact/">Contact</Link>
		</nav>
	</header>
);

export default Header;
