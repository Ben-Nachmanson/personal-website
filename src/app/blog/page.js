"use client";

// Example LinkedIn posts array
const linkedInPosts = [
  {
    title: "A Practical Framework for Debugging with AI",
    image: "/1745264789773.png", // Add your image to public folder
    url: "https://www.linkedin.com/pulse/practical-framework-debugging-ai-ben-nachmanson-lulyc",
  },
  {
    title: "Self Hosting a Media Server",
    image: "/1733260599228.jpeg",
    url: "https://www.linkedin.com/pulse/self-hosting-media-server-ben-nachmanson-luepc",
  },
  {
    title: "Handwritten Digit Classification",
    image: "/1_lho2WADqQGMFPjEAMlte-A.jpeg",
    url: "https://medium.com/p/3154e15b378c",
  }
];

export default function Blog() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#27c46c', marginBottom: '1rem' }}>Blog</h1>
      <p style={{ fontSize: '1.1rem', color: '#bfc7d5', textAlign: 'center', maxWidth: 600 }}>
        
      </p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
        {linkedInPosts.map((post, idx) => (
          <a
            key={idx}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#222',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              width: 260,
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={post.image} alt={post.title} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <span style={{ color: '#27c46c', fontWeight: 700, fontSize: '1.1rem' }}>{post.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
