import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import loginHeroImg from '../assets/login-hero.png'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role') === 'admin' ? 'admin' : 'technician'
  const [email, setEmail] = useState(searchParams.get('email') || '')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { loginWithEmail } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password to continue.')
      return
    }
    setError('')
    // Demo/mock authentication: any non-empty email + password signs you in.
    // If this email signed up earlier, their real name carries over; otherwise
    // we derive a friendly display name from the email itself.
    loginWithEmail(email, role)
    navigate(role === 'admin' ? '/user-dashboard' : '/technician-dashboard')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-illustration">
          <div className="login-hero-frame">
            <img
              className="login-hero-img"
              src={loginHeroImg}
              alt="Isometric illustration of QR codes, gears, and dashboard panels"
            />
          </div>
          <div className="login-caption">
            <h2>Intelligent Asset Management</h2>
            <p>Scan. Report. Diagnose. Maintain.</p>
          </div>
        </div>

        <div className="login-form-panel">
          <h1>Welcome back</h1>
          <p className="login-sub">
            Log in as <strong>{role === 'admin' ? 'Admin' : 'Technician'}</strong> to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="email">Email Address</label>
              <div className="login-input-wrap">
                <svg className="icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="login-field">
              <div className="login-row-between">
                <label htmlFor="password">Password</label>
                <a href="#">Forgot password?</a>
              </div>
              <div className="login-input-wrap">
                <svg className="icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="11" width="16" height="9" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="login-toggle-eye"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label="Toggle password visibility"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            {error && (
              <p style={{ color: '#dc2626', fontSize: 13, fontWeight: 600, marginTop: -6, marginBottom: 12 }}>
                {error}
              </p>
            )}

            <label className="login-keep-row">
              <input type="checkbox" /> Keep me logged in
            </label>

            <button type="submit" className="login-btn-primary">Sign In</button>
          </form>

          <div className="login-divider">
            <div className="login-line"></div>
            <span>or continue with</span>
            <div className="login-line"></div>
          </div>

          <button type="button" className="login-btn-google">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.66-.22-2.44H12v4.62h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.81Z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.92l-3.87-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.1A12 12 0 0 0 12 24Z" />
              <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.28a12 12 0 0 0 0 10.74l3.99-3.1Z" />
              <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.63l3.99 3.1C6.22 6.88 8.87 4.77 12 4.77Z" />
            </svg>
            Google Workspace
          </button>

          <p className="login-signup">
            Don&apos;t have an account? <Link to="/signup">Start 14-day free trial</Link>
          </p>
          <div className="login-footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help Center</a>
          </div>
          <p className="login-signup" style={{ marginTop: 8 }}>
            <Link to="/">← Back to home</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
