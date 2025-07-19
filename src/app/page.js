import Image from "next/image";

export default function Home() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem', minHeight: '60vh' }}>
      <Image
        src="/laser-eyes.png"
        alt="Profile"
        width={120}
        height={120}
        style={{ borderRadius: '50%', objectFit: 'cover', border: '4px solid #27c46c', marginBottom: '1.5rem' }}
      />
      <h1
        style={{
          color: '#27c46c',
          fontWeight: 800,
          fontSize: '2.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
          letterSpacing: '0.01em',
          lineHeight: 1.1,
          maxWidth: '90vw',
          wordBreak: 'break-word',
        }}
      >
        Ben Nachmanson
      </h1>
      <p style={{ color: '#bfc7d5', fontSize: '1.3rem', textAlign: 'center', maxWidth: 700, marginBottom: '2.5rem' }}>
        I&apos;m a Software Engineer based in Austin, currently focused on infastructure reliability, availability, and automation.
      </p>
      <div style={{ background: '#222', borderRadius: 16, boxShadow: 'none', padding: '2rem', marginTop: '1rem', width: '100%', maxWidth: 900, textAlign: 'left', border: '1px solid #333' }}>
        <h2 style={{ color: '#27c46c', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>Experience</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '1.2rem' }}>
            <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Software Engineer, General Motors</strong>
            <span style={{ color: '#bfc7d5', marginLeft: 8 }}>(2022–Present)</span>
            <ul style={{ color: '#bfc7d5', marginTop: 8, fontSize: '1rem', paddingLeft: '1.2em', listStyle: 'disc' }}>
              <li>Part of the Infrastructure Operations team. I work on automation, internal tools, and large-scale Linux systems — making things faster, more reliable, and less manual.</li>
            </ul>
            <div style={{ color: '#bfc7d5', marginTop: 8, fontSize: '1rem' }}>
              Stack: Python, C#, Ansible, Linux, VMware, Red Hat OpenShift
            </div>
          </li>
          {/* <li style={{ marginBottom: '1.2rem' }}>
            <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Software Developer Freelance, UC San Diego</strong>
            <span style={{ color: '#bfc7d5', marginLeft: 8 }}>(2021)</span>
            <ul style={{ color: '#bfc7d5', marginTop: 8, fontSize: '1rem', paddingLeft: '1.2em', listStyle: 'disc' }}>
              <li>Built a Web Application for a PhD research team.</li>
            </ul>
          </li>
          <li>
            <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Software Engineer Internship, University of Washington</strong>
            <span style={{ color: '#bfc7d5', marginLeft: 8 }}>(2021)</span>
            <ul style={{ color: '#bfc7d5', marginTop: 8, fontSize: '1rem', paddingLeft: '1.2em', listStyle: 'disc' }}>
              <li>Build a desktop application to automate experimental lab cycles for a PhD research team.</li>
            </ul>
          </li> */}
        </ul>
      </div>
      {/* <div style={{ background: '#222', borderRadius: 16, boxShadow: 'none', padding: '2rem', marginTop: '1.5rem', width: '100%', maxWidth: 900, textAlign: 'left', border: '1px solid #333' }}>
        <h2 style={{ color: '#27c46c', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.7rem' }}>Skills</h2>
        <div style={{ color: '#bfc7d5', fontSize: '1rem', marginBottom: '0.5rem' }}>Python, C#, C++</div>
        <div style={{ color: '#bfc7d5', fontSize: '1rem', marginBottom: '0.5rem' }}> ASP.NET, Flask, open.js</div>
        <div style={{ color: '#bfc7d5', fontSize: '1rem', marginBottom: '0.5rem' }}>Linux, Git, ChatGPT, Github Copilot, Visual Studio, Azure, Ansible, Grafana, Kubernetes</div>
        <div style={{ color: '#bfc7d5', fontSize: '1rem' }}><strong>Certifications:</strong> Red Hat Certified Systems Administrator (RHCSA), Microsoft Azure Fundamentals (AZ-900)</div>
      </div> */}
    </section>
  );
}
