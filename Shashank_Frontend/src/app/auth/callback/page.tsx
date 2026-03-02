'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useDescope } from '@descope/nextjs-sdk/client'

export default function CallbackPage() {
  const router = useRouter()
  const sdk = useDescope()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = new URLSearchParams(window.location.search).get('code')
        if (code) {
          const resp = await sdk.oauth.exchange(code)
          if (resp.ok) {
            router.push('/user/dashboard')
          } else {
            router.push('/auth/login?error=failed')
          }
        } else {
          router.push('/auth/login')
        }
      } catch (err) {
        console.error('Callback error:', err)
        router.push('/auth/login?error=failed')
      }
    }
    handleCallback()
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#0f0f0f',
      gap: '16px'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #2a2a2a',
        borderTop: '3px solid #6366f1',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <p style={{ color: '#6b7280', fontSize: '14px', fontFamily: 'sans-serif' }}>Signing you in...</p>
    </div>
  )
}
