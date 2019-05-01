import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Elixir Labs</h1>
		<p>We develop technology solutions for high-impact social good partners for free</p>
		<div class={style.block1}></div>
		<div class={style.block2}></div>
	</div>
);

export default Home;
