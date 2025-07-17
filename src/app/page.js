import Image from "next/image";

export default function Home() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <img src="/laser-eyes.png" alt="Profile" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '4px solid #27c46c', marginBottom: '1.5rem' }} />
      <h1 style={{ color: '#27c46c', fontWeight: 800, fontSize: '4rem', marginBottom: '1rem', textAlign: 'center' }}>Ben Nachmanson</h1>
      <p style={{ color: '#bfc7d5', fontSize: '1.3rem', textAlign: 'center', maxWidth: 700, marginBottom: '2.5rem' }}>
        Welcome! I'm a Software Engineer based in Austin.
      </p>
    </section>
  );
}
