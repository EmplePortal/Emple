'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-root">
      {/* Animated background grid */}
      <div className="auth-grid" />

      {/* Ambient glows */}
      <div className="auth-glow-a" />
      <div className="auth-glow-b" />

      {/* Floating decorative orbs */}
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-orb auth-orb-3" />

      {/* Navbar */}
      <nav className="auth-nav">
        <Link href="/" className="nav-brand">
          <div className="nav-logo-box"><span>e</span></div>
          <span className="nav-wordmark"><em>e</em>mple</span>
        </Link>
      </nav>

      {/* Main content */}
      <main className="auth-main">
        {children}
      </main>

      {/* Footer strip */}
      <div className="auth-footer">
        <span>© 2026 <em style={{ color: 'var(--clr-accent)', fontStyle: 'normal' }}>Emple</em>. All rights reserved.</span>
        <div className="auth-footer-links">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Help</Link>
        </div>
      </div>
    </div>
  )
}
