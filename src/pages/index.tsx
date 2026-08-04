import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function FeatureCard({icon, title, description}: {icon: string; title: string; description: string}) {
  return (
    <div style={{
      background: 'var(--ifm-color-primary-lighter)',
      borderRadius: '8px',
      padding: '16px 20px',
      flex: '1 1 200px',
      color: '#3a2e22',
    }}>
      <div style={{fontSize: '28px', marginBottom: '8px'}}>{icon}</div>
      <div style={{fontWeight: 700, fontSize: '15px', marginBottom: '6px', color: '#3a2e22'}}>{title}</div>
      <div style={{fontSize: '13px', opacity: 0.85, color: '#3a2e22'}}>{description}</div>
    </div>
  );
}

function DocCard({icon, title, description, href}: {icon: string; title: string; description: string; href: string}) {
  return (
    <Link href={href} style={{
      display: 'block',
      textDecoration: 'none',
      color: '#3a2e22',
      background: 'var(--ifm-color-primary-lightest)',
      borderRadius: '10px',
      padding: '24px 28px',
      border: '2px solid var(--ifm-color-primary-light)',
      flex: '1 1 250px',
    }}>
      <div style={{fontSize: '36px', marginBottom: '12px'}}>{icon}</div>
      <div style={{fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: '#3a2e22'}}>{title}</div>
      <div style={{fontSize: '14px', opacity: 0.85, color: '#3a2e22'}}>{description}</div>
      <div style={{marginTop: '12px', fontWeight: 600, color: '#8B6914'}}>
        Read more →
      </div>
    </Link>
  );
}

function HomePage() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline as string}>
      <div className="tresorone-homepage">
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '60px 20px 40px',
        }}>
          {/* Hero */}
          <img src={useBaseUrl('/img/logo.png')} alt="TresorOne Logo" style={{width: '80px', height: '80px', marginBottom: '20px'}} />
          <h1 style={{fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px'}}>
            {siteConfig.title}
          </h1>
          <p style={{fontSize: '1.2rem', opacity: 0.85, maxWidth: '640px', lineHeight: 1.6, marginBottom: '36px'}}>
            {siteConfig.tagline}
          </p>

          {/* CTA card */}
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '56px', width: '100%', justifyContent: 'center'}}>
            <DocCard
              icon="📘"
              title="User Guide"
              description="Get started, connect to a Tresor gateway, and manage providers, aliases, rules, logs, and settings through the client."
              href="/TresorOne-docs/docs/user/getting-started/intro"
            />
          </div>

          {/* Features */}
          <h2 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px'}}>Key Features</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', width: '100%', marginBottom: '40px'}}>
            <FeatureCard icon="🖥️" title="Cross-Platform" description="Windows, macOS, Linux, iOS, and Android from a single Flutter codebase." />
            <FeatureCard icon="🚀" title="Local Mode" description="One-click setup: download the Tresor binary, auto-config, and connect — no manual config." />
            <FeatureCard icon="☁️" title="Remote Mode" description="Connect to any Tresor daemon by host:port + JWT auth. Switch modes without restarting." />
            <FeatureCard icon="🧩" title="Master-Detail Editor" description="Side-by-side provider, alias, and rule editing with swipe-to-delete on model chips." />
            <FeatureCard icon="📺" title="Live Log Stream" description="Server-Sent Events pipeline inspector with parsed + raw view of captured payloads." />
            <FeatureCard icon="🎨" title="Themes" description="Light / dark / pure-black mode, color palette picker, and adjustable text size." />
          </div>

          {/* GitHub link */}
          <Link
            href="https://github.com/ladbaby/TresorOne"
            style={{fontSize: '15px', opacity: 0.8}}
          >
            View source on GitHub →
          </Link>
        </section>
      </div>
    </Layout>
  );
}

export default function Home() {
  return <HomePage />;
}
