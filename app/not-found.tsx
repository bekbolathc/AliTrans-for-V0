export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <h1>404 — Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ marginTop: '20px', padding: '10px 20px', background: '#D9A441', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        Back to Home
      </a>
    </div>
  );
}
