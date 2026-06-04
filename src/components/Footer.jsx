const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Samson V.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
