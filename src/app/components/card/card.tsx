import Image from 'next/image';

import css_classes from '../../tools/css_classes';

import styles from './card.module.css';

type CardProps = {
	className?: string,
	title: string,
	children?: React.ReactNode,
	gh_page_link: string,
	gh_repo_link: string,
	img_src: string,
	img_alt: string,
}

const Card = (props: CardProps) => {
	return (
		<div className={css_classes(styles.card, props.className)}>
			<header className={css_classes(styles.card__header)}>
				<h4>
					{props.title}
				</h4>
			</header>
			<main className={css_classes(styles.card__main)}>
				{props.children}
				<a href={props.gh_page_link}>
					<Image
						alt={props.img_alt}
						src={props.img_src}
						width={400}
						height={300}
						priority={true}
					/>
				</a>
			</main>
			<footer  className={css_classes(styles.card__footer)}>
				<p><a href={props.gh_page_link}>View on GitHub pages</a></p>
				<p><a href={props.gh_repo_link}>Check the repository</a></p>
			</footer>
		</div>
	)
}

export default Card;