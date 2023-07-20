import Image from 'next/image';

import css_classes from './tools/css_classes';

import Card from './components/card';

import styles from './page.module.css';


export default function Home() {
	return (
		<div className={styles.main_container}>
			<header className={css_classes(styles.header, styles.section)}>
				<h1>Welcome to the website of Gregory Bessonov</h1>
			</header>
			<main className={css_classes(styles.main, styles.section)}>
				<div className={css_classes(styles.main__intro)}>
					<p>
						Hello! My name is Gregory, I am a full-stack developer with more than 10 years of experience in the full development cycle.
					</p>
					<p>
						Some of my hobby projects are presented below:
					</p>
				</div>
				<Card
					title = 'Mandelbrot set'
					img_src = 'imgs/mandelbrot.png'
					img_alt = 'Mandelbrot set'
					gh_page_link = 'https://gbessonov.github.io/mandelbrot'
					gh_repo_link = 'https://github.com/gbessonov/mandelbrot'

					className = {css_classes(styles.main__card)}
				>
					<p>It is pure html/js application which renders <a href="https://en.wikipedia.org/wiki/Mandelbrot_set">Mandlelbrot set</a> via <a href="https://get.webgl.org/">WebGL</a>.</p>
				</Card>
			</main>
			<footer className={css_classes(styles.footer, styles.section)}>
				<h2>
					<a href='mailto:greg.bessonov@gmail.com'>greg.bessonov@gmail.com</a>
				</h2>
			</footer>
		</div>
	);
}
