export default function Blog() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#27c46c', marginBottom: '1rem' }}>Blog</h1>
      <p style={{ fontSize: '1.1rem', color: '#bfc7d5', textAlign: 'center', maxWidth: 600 }}>
        This is the Blog page. Add your posts and articles here.
      </p>
    </section>
  );
}
