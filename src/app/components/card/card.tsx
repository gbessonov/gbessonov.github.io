import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import css_classes from '../../tools/css_classes';

import styles from './card.module.css';

type CardProps = {
	className?: string,
	children?: React.ReactNode,
	gh_page_link: string,
	gh_repo_link: string,
	img_src: string | StaticImport,
	img_alt: string,
}

const Card = (props: CardProps) => {
	return (
		<div className={css_classes(styles.card, props.className)}>
			<main className={css_classes(styles.card__main)}>
				<a
					className={css_classes(styles.card__img_container)}
					href={props.gh_page_link}
				>
					<Image
						className={css_classes(styles.card__img)}
						alt={props.img_alt}
						src={props.img_src}
						priority
					/>
				</a>
			</main>
			<header className={css_classes(styles.card__header)}>
				<h3>
					{props.children}
				</h3>
			</header>
			<footer  className={css_classes(styles.card__footer)}>
				<p><a href={props.gh_repo_link}>Sources</a></p>
			</footer>
		</div>
	)
}

export default Card;