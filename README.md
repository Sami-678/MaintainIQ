# MaintainIQ — React + Vite + Tailwind

This project is a faithful React/Vite/Tailwind rebuild of the original static
home page and login page, with the requested changes applied.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## What's inside

- `src/pages/Home.jsx` — the landing page, built with Tailwind utility classes.
- `src/pages/Login.jsx` — a single login page shared by both roles. It
  reads a `?role=technician` / `?role=admin` query param to know which
  dashboard to send you to after signing in.
- `src/pages/Signup.jsx` — the signup page (from the provided mockup),
  responsive for all screen sizes, with a Technician/Admin role picker.
- `src/pages/technician/` — the Technician Dashboard app (Dashboard,
  My Tasks, History, Profile) — brought over from the "real" project.
- `src/pages/userdashboard/` — the Admin Dashboard / user-management
  app (Asset CRUD, QR Generation, Issue Assignment, Analytics, Asset
  History, Search) — also brought over from the "real" project.
- `src/index.css` — Tailwind directives plus custom CSS (glass card,
  floating animation, scroll-reveal, dot pattern, login-page styles,
  and the `glass-effect` utility used on the signup page).

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/login?role=technician` | Login (Technician) |
| `/login?role=admin` | Login (Admin) |
| `/signup` | Signup |
| `/technician-dashboard/*` | Technician Dashboard |
| `/user-dashboard/*` | Admin Dashboard (user management) |

## Changes made per this request

1. **Signup page created** from the provided mockup and made fully
   responsive (uses `clamp()`-based spacing/typography so it no longer
   looks oversized on laptop screens, while still looking good on
   large desktop monitors and compact on mobile).
2. **Navbar wiring:**
   - **TMS** button → `/login?role=technician`
   - **Admin** button → `/login?role=admin`
   - The right-most navbar button now reads **Sign Up** and links to `/signup`.
3. **Dynamic mock login:** the Login page accepts *any* non-empty
   email + password (this is a front-end demo, not real auth) and, on
   submit, routes you to the matching dashboard:
   - Technician role → `/technician-dashboard`
   - Admin role → `/user-dashboard`
4. **Technician Dashboard & Admin (User Management) Dashboard**
   brought over from the "real" project and connected to the TMS/Admin
   login flow above.
5. **Admin sidebar logo:** the "USER MANAGEMENT" subtext under the
   MaintainIQ logo in that dashboard's sidebar now reads **"ADMIN
   PANEL"**, reframing it from the Admin's perspective (the "User
   Management" item is still available as a page in the sidebar nav).
