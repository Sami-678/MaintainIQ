import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const heroImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4aWHB9dirSDf6ttDwgtNSCXnrkRZ2sUpcxcq_O34AbpL9RyykpIJoD3ZoLlp-pu5dpyDctsDU8IjVrCBBF3Rd7teETifPilWqVVL872e2D-IDxX23wKujRwtWnzycKhp4QAhb_Jh1XxLu0fA2SOsJz3LOux8L4gsyjQ1YzZQtg65wHZ3TLMFuiFTRpLYXuK_ZU3Ch3H570nxZnRjI3odCG8IjEN7Z1WB0H6G2xEj1nx2xOEpJgI7'

const adminDashboardImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGx6bfFJ-6lFiINhLi8W5vFYvsD8HBIRgG97n-7Bb6builH5tQngDMXjWhuTEBkLcGrJWFA3l-fCNbDv-jt2DoWUDV9iKjX6FqwgsOVL22agAo8klS0MkJ8RHR5nSLDRaP17AY0JtiAGM94e-jZXnDseyMq4prpOBvSpLdGeOU_vrO0AOYfV0vPhlsR8F3axIIgd4sIVMk89q9S6RQzbddox5PJg9sjWNi28k_QDlL5mtj4zYrHRr'

const testimonialAvatars = {
  chen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmYKwvLQHYt7b_0i9zS8DIUefYbPGWWJoXq2eMwqzGT6kM49OIFTzpWaCHiDZN9GtX7CtZ-9BCTMBIS1rBie0Z2Ebkhtumdsg1vnIpr2qT7QwGTyPbfRnL_v4mynMGKEeT7ly_ZitI8dx7za816xvybKx6ER15bm1IoTDbdEPbsAl_3cPxbAdHzxeUmlE0KeYQPIpvIR2vk9LdzyHpBJxLFlbtVjJMWSj6lr6cMCt45-9AJ7zpgBne',
  miller:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDsk8vqreOkb31daBAGfhBHrMaw5KjYFemiW_B6MuDnwyYA2JeUYJmUKnUOyaXtwGgoMgGqDgUJdORf_8FWtWseb-F-moFON_l7j1D6SEtJBYotRKzrl2xoeLeBuoKkfen4x1xXiWNwzEpaDGN5F1II4YmehcV8GEpYIR4dhQ1sCt1hugTIB4mXPeJZgqNwMeWTGB7SXdF4dM7jfj8TRkgDGbaPl9W5p34yAvXJABt8-lW6uvlFFl7h',
  lawson:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCM9tW70t9Biok2usFYgO2eOAju3bdD8qsBd64Bb_VlDTgxUJ3qa_UNkScaS4V0lPtyvOaQvkmsYoHaWt2vFS-airK1FlRcls96Af8tTJ8oZTfZhFRy1ABNREVQuXw1H60-RzA1cD0tzlVzaccRD0UDdd4D5gJD7Oq4-KWsfr-GxArOTKDuMki-o-PI8dncoZmTKRK_1oeEmjVUnxSz5Wv-e2V8Kxvxu_fmXIuKHJDHej1lDpOwcd9s',
}

function Star() {
  return (
    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
      star
    </span>
  )
}

const features = [
  {
    icon: 'qr_code_2',
    bg: 'bg-blue-50',
    hoverBg: 'group-hover:bg-blue-600',
    color: 'text-blue-600',
    title: 'Universal Scanning',
    desc: 'Instant access to full repair history, manuals, and service logs with a single secure scan from any device.',
  },
  {
    icon: 'psychology',
    bg: 'bg-orange-50',
    hoverBg: 'group-hover:bg-orange-600',
    color: 'text-orange-600',
    title: 'Predictive Triage',
    desc: 'Our AI analyzes sensor data and reports to automatically categorize priority and suggest likely fixes.',
  },
  {
    icon: 'account_tree',
    bg: 'bg-green-50',
    hoverBg: 'group-hover:bg-green-600',
    color: 'text-green-600',
    title: 'Smart Workflows',
    desc: 'Automated task routing from initial report to final resolution, ensuring zero bottlenecks in your team.',
  },
  {
    icon: 'verified_user',
    bg: 'bg-purple-50',
    hoverBg: 'group-hover:bg-purple-600',
    color: 'text-purple-600',
    title: 'Secure Audits',
    desc: 'Immutable logs for every inspection and repair. Maintain total compliance with zero manual paperwork.',
  },
  {
    icon: 'admin_panel_settings',
    bg: 'bg-indigo-50',
    hoverBg: 'group-hover:bg-indigo-600',
    color: 'text-indigo-600',
    title: 'Granular Access',
    desc: 'Define precise roles for admins, technicians, and external vendors to keep your data protected.',
  },
  {
    icon: 'cloud_done',
    bg: 'bg-cyan-50',
    hoverBg: 'group-hover:bg-cyan-600',
    color: 'text-cyan-600',
    title: 'Cloud Scalability',
    desc: 'Global infrastructure that scales with your growth, from a single facility to international campus clusters.',
  },
]

const modules = [
  {
    icon: 'inventory_2',
    title: 'Asset Management',
    desc: 'A powerful centralized database for high-value equipment with automated status tracking.',
    delay: 0,
  },
  {
    icon: 'monitoring',
    title: 'Real-time Analytics',
    desc: 'Visualize downtime costs, technician efficiency, and lifecycle ROI through custom dashboards.',
    delay: 100,
  },
  {
    icon: 'history_edu',
    title: 'Digital Audit Trails',
    desc: 'Chronological repair logs and inspection notes for every unit, accessible instantly via cloud sync.',
    delay: 200,
  },
]

const testimonials = [
  {
    quote:
      '"MaintainIQ transformed our hospital maintenance. We reduced response times by 40% in the first month."',
    name: 'Dr. James Chen',
    role: 'Facilities Manager, City Hospital',
    avatar: testimonialAvatars.chen,
    delay: 0,
  },
  {
    quote:
      '"The QR code scanning is a total game changer for our field technicians. Information is always at our fingertips."',
    name: 'Sarah Miller',
    role: 'Operations Lead, Metro Tech',
    avatar: testimonialAvatars.miller,
    delay: 150,
  },
  {
    quote:
      '"The AI triage feature helps us focus on what really matters. It\'s like adding an extra layer of oversight."',
    name: 'Robert Lawson',
    role: 'Estate Director, Ivy Schools',
    avatar: testimonialAvatars.lawson,
    delay: 300,
  },
]

export default function Home() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    }, observerOptions)
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'), 10)
            const suffix = entry.target.innerText.includes('%') ? '%' : '+'
            let count = 0
            const duration = 2500
            const frameRate = 16
            const totalFrames = duration / frameRate
            const increment = target / totalFrames
            const updateCount = () => {
              count += increment
              if (count < target) {
                entry.target.innerText = Math.floor(count).toLocaleString() + suffix
                requestAnimationFrame(updateCount)
              } else {
                entry.target.innerText = target.toLocaleString() + suffix
              }
            }
            updateCount()
            counterObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('.counter').forEach((counter) => counterObserver.observe(counter))

    return () => {
      observer.disconnect()
      counterObserver.disconnect()
    }
  }, [])

  return (
    <div className="bg-surface text-on-surface font-sans overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant h-20">
        <nav className="flex justify-between items-center h-full px-margin-desktop max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-xl">
            <div className="text-2xl font-extrabold text-primary tracking-tighter flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl font-bold">qr_code_scanner</span>
              MaintainIQ
            </div>
            <div className="hidden lg:flex items-center space-x-lg mx-auto">
              <a className="text-primary font-semibold text-sm transition-all" href="#">Home</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-all text-sm" href="#">About</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-all text-sm" href="#">Contact Us</a>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <Link
              to="/login?role=technician"
              className="border border-outline-variant text-on-surface font-bold px-6 py-2.5 rounded-full hover:bg-surface-variant transition-all active:scale-95 text-sm"
            >
              TMS
            </Link>
            <Link
              to="/login?role=admin"
              className="border border-outline-variant text-on-surface font-bold px-6 py-2.5 rounded-full hover:bg-surface-variant transition-all active:scale-95 text-sm"
            >
              Admin
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-white font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 text-sm"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative flex items-center overflow-hidden pt-8 pb-2xl md:pt-10 md:pb-3xl">
          {/* Abstract background blobs */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] -z-10 -translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center w-full">
            <div className="z-10 text-left reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                AI-Powered Asset Intelligence
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-xl">
                Give Every Asset a <br />
                <span className="text-primary italic">Digital Identity</span>
              </h1>
              <p className="text-xl text-on-surface-variant mb-2xl max-w-xl leading-relaxed">
                Scan. Report. Diagnose. Maintain. AI-powered management for schools, hospitals, offices, and large-scale facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-md">
                <Link
                  to="/login"
                  className="bg-primary text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all active:scale-95 text-center"
                >
                  Login
                </Link>
                <button className="bg-white border border-outline-variant text-on-surface font-bold text-lg px-10 py-5 rounded-full hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative lg:block reveal active">
              <div className="relative w-full rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] overflow-hidden border border-outline-variant transform lg:rotate-2">
                <img alt="Technician scanning QR code" className="w-full h-full object-cover" src={heroImg} />
              </div>
              {/* Floating AI Card */}
              <div className="absolute top-1/2 -left-12 lg:-left-20 glass-card p-xl rounded-2xl border border-white/50 shadow-2xl max-w-[320px] animate-float">
                <div className="flex items-center gap-sm mb-md">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      auto_awesome
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">AI Issue Triage</span>
                    <span className="text-xs text-primary font-bold uppercase tracking-wider">Priority: Critical</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Critical vibration detected in Motor B-12. Assigning to Chief Technician for immediate diagnostic.
                </p>
                <div className="mt-md pt-md border-t border-black/5 flex justify-between items-center">
                  <span className="text-xs font-semibold text-on-surface-variant">2 mins ago</span>
                  <span className="text-xs font-bold text-primary cursor-pointer hover:underline">View Alert</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-xl">
          <div className="max-w-6xl mx-auto px-margin-desktop">
            <div className="bg-white rounded-[2rem] shadow-xl border border-outline-variant p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-xl divide-x divide-outline-variant/50">
              <div className="text-center px-4">
                <div className="flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined text-3xl">inventory_2</span>
                </div>
                <div className="text-4xl font-extrabold text-on-surface mb-1 counter" data-target="15000">15,000+</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.1em]">Assets Tracked</div>
              </div>
              <div className="text-center px-4">
                <div className="flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined text-3xl">corporate_fare</span>
                </div>
                <div className="text-4xl font-extrabold text-on-surface mb-1 counter" data-target="250">250+</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.1em]">Organizations</div>
              </div>
              <div className="text-center px-4">
                <div className="flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined text-3xl">bolt</span>
                </div>
                <div className="text-4xl font-extrabold text-on-surface mb-1 counter" data-target="99">99%</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.1em]">System Uptime</div>
              </div>
              <div className="text-center px-4">
                <div className="flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined text-3xl">support_agent</span>
                </div>
                <div className="text-4xl font-extrabold text-on-surface mb-1">24/7</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.1em]">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-3xl relative">
          <div className="absolute inset-0 dot-pattern -z-10 opacity-30"></div>
          <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="text-center mb-2xl reveal active">
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-md">Engineered for Reliability</h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
                MaintainIQ centralizes your operations with enterprise-grade features designed for modern infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group bg-white p-xl rounded-2xl border border-outline-variant shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all reveal active"
                >
                  <div className={`w-16 h-16 rounded-2xl ${f.bg} flex items-center justify-center ${f.color} mb-lg ${f.hoverBg} group-hover:text-white transition-all duration-500`}>
                    <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-md">{f.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="bg-surface-variant py-3xl overflow-hidden border-y border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-2xl gap-lg">
              <div className="max-w-2xl reveal active">
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-md">Comprehensive Ecosystem</h2>
                <p className="text-xl text-on-surface-variant leading-relaxed">
                  One platform. Infinite possibilities. Explore our specialized modules designed for precision operations.
                </p>
              </div>
              <div className="flex gap-md reveal active">
                <button className="w-14 h-14 rounded-full border border-outline-variant bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-14 h-14 rounded-full border border-outline-variant bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
              {modules.map((m) => (
                <div
                  key={m.title}
                  className="group bg-white p-2xl rounded-3xl border border-outline-variant shadow-xl hover:shadow-2xl transition-all reveal active"
                  style={{ transitionDelay: `${m.delay}ms` }}
                >
                  <div className="mb-xl transform group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'wght' 200" }}>
                      {m.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-extrabold text-on-surface mb-md">{m.title}</h4>
                  <p className="text-on-surface-variant mb-xl leading-relaxed">{m.desc}</p>
                  <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group-hover:underline" href="#">
                    View Features <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-3xl">
          <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="text-center mb-2xl reveal active">
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-md">Trusted by Industry Leaders</h2>
              <p className="text-xl text-on-surface-variant">Hear from those who are transforming their facilities with MaintainIQ.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white p-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant flex flex-col justify-between reveal active"
                  style={{ transitionDelay: `${t.delay}ms` }}
                >
                  <div>
                    <div className="flex gap-1 text-orange-400 mb-lg">
                      <Star /><Star /><Star /><Star /><Star />
                    </div>
                    <p className="text-xl text-on-surface font-medium italic leading-relaxed mb-xl">{t.quote}</p>
                  </div>
                  <div className="flex items-center gap-md">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-50">
                      <img alt={t.name} className="w-full h-full object-cover" src={t.avatar} />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-on-surface">{t.name}</div>
                      <div className="text-sm font-semibold text-on-surface-variant">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admin Access Section */}
        <section className="py-3xl bg-dark-navy text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
            <div className="reveal active">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-xl tracking-tight leading-tight">
                Universal Control, <br />Simplified.
              </h2>
              <p className="text-xl text-slate-400 mb-2xl leading-relaxed">
                Empower your decision-makers with holistic visibility. The Admin Panel centralizes every asset, technician, and report into a single high-performance interface.
              </p>
              <div className="space-y-lg mb-2xl">
                <div className="flex items-start gap-md">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Universal Asset Visibility</h4>
                    <p className="text-slate-400">Track 10,000+ assets across multiple locations in one view.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Custom Workflow Automation</h4>
                    <p className="text-slate-400">Define logic-based triggers for maintenance cycles and alerts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Exportable Compliance Logs</h4>
                    <p className="text-slate-400">Generate audit-ready reports in PDF or CSV with a single click.</p>
                  </div>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white font-bold px-12 py-5 rounded-full shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1">
                Enter Admin Portal
              </button>
            </div>
            <div className="relative reveal active" style={{ transitionDelay: '200ms' }}>
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <img
                alt="Admin Dashboard Mockup"
                className="relative rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 w-full transform lg:rotate-6 lg:scale-110"
                src={adminDashboardImg}
              />
            </div>
          </div>
        </section>

        {/* Vision/CTA Section */}
        <section className="py-3xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
          <div className="max-w-4xl mx-auto px-margin-desktop text-center reveal active">
            <div className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-black tracking-widest uppercase mb-lg">Our Vision</div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-on-surface mb-xl tracking-tight leading-[1.1]">
              The future of facilities management is <span className="text-primary italic">intelligent.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-xl mb-2xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">speed</span>
                <span className="font-bold text-on-surface-variant">Zero Downtime Future</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">eco</span>
                <span className="font-bold text-on-surface-variant">Sustainable Lifecycle Management</span>
              </div>
            </div>
            <button className="bg-primary text-white font-extrabold px-14 py-6 rounded-full text-xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_70px_rgba(37,99,235,0.4)] hover:-translate-y-2 transition-all active:translate-y-0">
              Join the Network Today
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-3xl pb-xl border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2xl mb-2xl">
            <div className="lg:col-span-2">
              <div className="text-2xl font-extrabold text-primary tracking-tighter mb-lg">MaintainIQ</div>
              <p className="text-on-surface-variant max-w-sm leading-relaxed text-lg">
                The intelligence layer for your physical assets. Reliable, systematic, and AI-driven management for the modern enterprise.
              </p>
              <div className="flex gap-md mt-xl">
                <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-lg">Platform</h4>
              <ul className="space-y-md text-on-surface-variant font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Hero Overview</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Admin Tools</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Mobile App</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">API Access</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-lg">Company</h4>
              <ul className="space-y-md text-on-surface-variant font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Our Story</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Partner Network</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-lg">Legal</h4>
              <ul className="space-y-md text-on-surface-variant font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Compliance</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-xl border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md text-sm font-bold text-on-surface-variant">
            <p>© 2024 MaintainIQ AI Platforms. Built for high-reliability environments.</p>
            <div className="flex gap-xl">
              <span>Status: Optimal</span>
              <span>Region: US-East</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
