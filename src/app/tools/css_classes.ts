const css_classes = (...args: (string | undefined)[]) => {
	return args.
		filter(arg => arg !== undefined).
		join(' ');
}
export default css_classes;