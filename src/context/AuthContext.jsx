import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const SESSION_KEY = 'maintainiq_session'
const USERS_KEY = 'maintainiq_users'

function safeGet(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function safeSet(key, value) {
  try {
    if (value === null) localStorage.removeItem(key)
    else localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage unavailable in this environment (e.g. a sandboxed preview) — the
    // in-memory React state still keeps everything working for the current session.
  }
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('') || 'U'
}

function nameFromEmail(email) {
  const local = email.split('@')[0] || 'User'
  return local
    .replace(/[._-]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => safeGet(SESSION_KEY))

  // Called on signup: remembers { name, email, role } for this email so a later
  // login (even a fresh browser session, if localStorage is available) shows
  // the right name instead of the generic demo user.
  const registerUser = (email, name, role) => {
    const cleanEmail = email.trim().toLowerCase()
    const record = { name: name.trim() || nameFromEmail(cleanEmail), email: cleanEmail, role }
    const users = safeGet(USERS_KEY) || {}
    users[cleanEmail] = record
    safeSet(USERS_KEY, users)
    return record
  }

  // Called on login: looks up a previously-registered name for this email,
  // otherwise derives a friendly display name from the email itself.
  const loginWithEmail = (email, role) => {
    const cleanEmail = email.trim().toLowerCase()
    const users = safeGet(USERS_KEY) || {}
    const existing = users[cleanEmail]
    const record = {
      name: existing?.name || nameFromEmail(cleanEmail),
      email: cleanEmail,
      role,
      avatarInitials: initials(existing?.name || nameFromEmail(cleanEmail)),
    }
    setUser(record)
    safeSet(SESSION_KEY, record)
    return record
  }

  const logout = () => {
    setUser(null)
    safeSet(SESSION_KEY, null)
  }

  return (
    <AuthContext.Provider value={{ user, registerUser, loginWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
