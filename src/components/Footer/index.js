import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Veltrix
      <span className="d-none d-sm-inline-block">
        - Refactored with <i className="mdi mdi-heart text-danger" /> by{' '}
        <a
          href="https://github.com/Manogel"
          target="_blank"
          className="font-500 text-primary"
        >
          Manogel
        </a>
      </span>
      .
    </footer>
  );
}
