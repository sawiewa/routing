export default function Articles({ title, author, text }) {
	const styles = {
		marginTop: 40,
	};
	return (
		<article style={styles}>
			<h3 style={{ marginBottom: 3, textTransform: 'uppercase' }}>
				Tytuł: {title}
			</h3>
			<span style={{ display: 'block', marginBottom: 5, fontSize: 12 }}>
				Autor: {author}
			</span>
			<p style={{ fontSize: 15 }}>Artykuł: {text}</p>
		</article>
	);
}
