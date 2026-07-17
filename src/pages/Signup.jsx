import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const brandImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCfifbtArzPkF1NxpaQLavV9RGaGlHfJPgHIlRbAuz7IiQzi2KsUma9d1z-Zj7o-g7PGeJdO2Tg8rK6o_JXECMeEjQVv2AHUlZ1_Qz00zl8k9rG2_GhX74WiNz3s6ZGpEtrpqEAn6e_eYIDJv0lcvhiiiTG04BvUbFN9VQiagB1N8yzdg1H2kTiZSdVxuvjQzNYcnxMwbLr1Wkr3vJv5ia0dwwWsGopN5fb4EZ-_op6BPtcJP9bG8bi'

export default function Signup() {
  const navigate = useNavigate()
  const { registerUser } = useAuth()
  const [role, setRole] = useState('technician')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    registerUser(email, fullName, role)
    navigate(`/login?role=${role}&email=${encodeURIComponent(email.trim())}`)
  }

  return (
    <div className="signup-page flex min-h-screen min-h-[100dvh] overflow-hidden bg-surface">
      {/* Left Panel: Branded aesthetic */}
      <div className="relative hidden w-1/2 flex-col overflow-hidden bg-primary md:flex">
        <div className="absolute inset-0 z-0 flex items-center justify-center p-[clamp(20px,4vw,48px)]">
          <img src={brandImg} className="relative h-auto max-w-full opacity-60 mix-blend-overlay" alt="" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/90"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col p-[clamp(20px,4vw,48px)]">
          <div className="mb-[clamp(20px,5vh,48px)] flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
              qr_code_scanner
            </span>
            <span className="text-xl font-extrabold tracking-tight text-white">MaintainIQ</span>
          </div>

          <div className="mt-auto max-w-lg">
            <h1 className="mb-4 text-[clamp(24px,3.2vw,40px)] font-extrabold leading-tight text-white">
              Empower your field operations.
            </h1>
            <p className="mb-[clamp(16px,3vh,32px)] text-[clamp(14px,1.1vw,17px)] leading-relaxed text-white/90">
              Join the industry leader in digital asset management. Scan. Report. Diagnose. Maintain. All from the palm of your hand.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-[clamp(12px,2vh,20px)] backdrop-blur-sm">
                <span className="mb-1 block text-2xl font-extrabold text-white">99.9%</span>
                <span className="text-xs uppercase tracking-widest text-white/70">Uptime Reliable</span>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-[clamp(12px,2vh,20px)] backdrop-blur-sm">
                <span className="mb-1 block text-2xl font-extrabold text-white">2M+</span>
                <span className="text-xs uppercase tracking-widest text-white/70">Assets Logged</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Signup Form */}
      <div className="flex w-full flex-col items-center justify-center overflow-y-auto bg-surface-variant p-[clamp(16px,4vh,48px)] md:w-1/2">
        <div className="w-full max-w-md py-[clamp(8px,3vh,32px)]">
          <div className="mb-[clamp(16px,4vh,32px)] flex items-center justify-center gap-2 md:hidden">
            <span className="material-symbols-outlined text-primary text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              qr_code_scanner
            </span>
            <span className="text-lg font-bold text-primary">MaintainIQ</span>
          </div>

          <div className="mb-[clamp(16px,4vh,40px)] text-center md:text-left">
            <h2 className="mb-2 text-[clamp(20px,2.2vw,28px)] font-extrabold text-on-surface">Create Account</h2>
            <p className="text-sm text-on-surface-variant">Start managing your facility with precision.</p>
          </div>

          <form className="space-y-[clamp(10px,2vh,20px)]" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label htmlFor="full_name" className="ml-1 text-xs font-semibold text-on-surface-variant">
                Full Name
              </label>
              <div className="group relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-slate-400 group-focus-within:text-primary">
                  person
                </span>
                <input
                  id="full_name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="org_name" className="ml-1 text-xs font-semibold text-on-surface-variant">
                Organization Name
              </label>
              <div className="group relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-slate-400 group-focus-within:text-primary">
                  domain
                </span>
                <input
                  id="org_name"
                  type="text"
                  placeholder="Enterprise Corp"
                  required
                  className="w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="ml-1 text-xs font-semibold text-on-surface-variant">
                Work Email
              </label>
              <div className="group relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-slate-400 group-focus-within:text-primary">
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="ml-1 text-xs font-semibold text-on-surface-variant">Select Your Role</span>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-all ${
                    role === 'technician' ? 'border-primary bg-primary/5' : 'border-outline-variant hover:bg-surface-variant'
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="technician"
                    checked={role === 'technician'}
                    onChange={() => setRole('technician')}
                    className="hidden"
                  />
                  <span className="material-symbols-outlined mb-1 text-on-surface-variant">engineering</span>
                  <span className="text-sm font-medium">Technician</span>
                </label>
                <label
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-all ${
                    role === 'admin' ? 'border-primary bg-primary/5' : 'border-outline-variant hover:bg-surface-variant'
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={() => setRole('admin')}
                    className="hidden"
                  />
                  <span className="material-symbols-outlined mb-1 text-on-surface-variant">admin_panel_settings</span>
                  <span className="text-sm font-medium">Admin</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="password" className="ml-1 text-xs font-semibold text-on-surface-variant">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="confirm_password" className="ml-1 text-xs font-semibold text-on-surface-variant">
                  Confirm
                </label>
                <input
                  id="confirm_password"
                  type="password"
                  placeholder="********"
                  required
                  className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 px-1">
              <input type="checkbox" id="terms" required className="mt-1 h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary" />
              <label htmlFor="terms" className="text-xs text-on-surface-variant">
                I agree to the <a href="#" className="font-medium text-primary hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="font-medium text-primary hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98]"
            >
              Create Account
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          <div className="mt-[clamp(12px,3vh,24px)] text-center">
            <p className="text-sm text-on-surface-variant">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
