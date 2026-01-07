# FutureSelf.id – App Overview

This document gives a **beginner-friendly tour** of the main screens and files.

---

## 1. Layout: App shell

- **File:** `src/components/AppLayout.tsx`
- **What it does:** Wraps the sidebar, header, and the main content area.
- **Where you see it:** Any route like `/terminal`, `/timeline`, `/identity`, `/archives`.

Inside:

- `<AppSidebar />` – left navigation.
- `<AppHeader />` – top bar with connection status and user info.
- `<Outlet />` – the current page content (Timeline, Identity, etc.).

---

## 2. Terminal (Dashboard)

- **Route:** `/terminal`
- **File:** `src/pages/Terminal.tsx`
- **Purpose:** Main “command console” of the app.
- **What you can do:**
  - Click on **Core Commands** to navigate to Reflection, Timeline, Identity, Archives.
  - See **System Alerts** about your “future self”.

---

## 3. Timeline (Trajectory Map)

- **Route:** `/timeline`
- **File:** `src/pages/Timeline.tsx`
- **Purpose:** View future intentions, current focus, and past logs.
- **What you can do:**
  - See static example goals and milestones.
  - (Future work) Turn this into a real, dynamic timeline.

---

## 4. Identity Configuration

- **Route:** `/identity`
- **File:** `src/pages/Identity.tsx`
- **Purpose:** Describe who you are now vs. who you want to become.
- **What you can do:**
  - See current skills, target skills, routines, and values.
  - (Future work) Allow editing and saving this data.

---

## 5. Memory Archives

- **Route:** `/archives`
- **File:** `src/pages/Archives.tsx`
- **Purpose:** Store past reflections, photos, and voice logs.
- **What you can do:**
  - See example fragments (quote, letter, photo, voice log).
  - See “time capsules” that unlock in the future.
  - (Future work) Connect this to real saved reflections.

---

## 6. Reflection (Writing Interface)

- **Route:** `/reflection`
- **File:** `src/pages/Reflection.tsx`
- **Purpose:** Write to your future self.
- **What you can do:**
  - Type a long-form reflection.
  - See word count and a simple progress bar.
  - Click “Send to 2029” (future work: actually save the entry).

---

## 7. Auth Pages

- **Login:** `/login` – `src/pages/Login.tsx`  
- **Signup:** `/signup` – `src/pages/Signup.tsx`  
- **Terms:** `/terms` – `src/pages/Terms.tsx`  
- **Privacy:** `/privacy` – `src/pages/Privacy.tsx`

Right now, these are mostly **UI** and are perfect places for beginners to start adding real logic.
