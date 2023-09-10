import css_classes from './tools/css_classes';

import Card from './components/card';

import styles from './page.module.css';

import mandelbrot_img from '../../public/imgs/mandelbrot.png';
import gol_img from '../../public/imgs/GoL.png';


export default function Home() {
	return (
		<div className={styles.main_container}>
			<header className={css_classes(styles.header, styles.section)}>
				<h1>Welcome</h1>
				<h2>I&apos;m Gregory, full-stack software engineer.</h2>
			</header>
			<main className={css_classes(styles.main, styles.section)}>
				<Card
					img_src = {gol_img}
					img_alt = 'Game of Life'
					gh_page_link = 'https://gbessonov.github.io/life'
					gh_repo_link = 'https://github.com/gbessonov/life'

					className = {css_classes(styles.main__card)}
				>
					<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway&apos;s Game of Life</a> using <a href="https://threejs.org/">three.js</a>
				</Card>
				<Card
					img_src = {mandelbrot_img}
					img_alt = 'Mandelbrot set'
					gh_page_link = 'https://gbessonov.github.io/mandelbrot'
					gh_repo_link = 'https://github.com/gbessonov/mandelbrot'

					className = {css_classes(styles.main__card)}
				>
					<a href="https://en.wikipedia.org/wiki/Mandelbrot_set">Mandelbrot set</a> visualisation via <a href="https://get.webgl.org/">WebGL</a>
				</Card>
			</main>
			<footer className={css_classes(styles.footer__container, styles.section)}>
				<div className={css_classes(styles.footer)}>
					<p>Gregory Bessonov</p>
					<h2>
						<a href='https://github.com/gbessonov'>github.com/gbessonov</a>
					</h2>
				</div>
			</footer>
		</div>
	);
}
