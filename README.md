# JG University Website

A modern, high-performance, and fully responsive university website built using Next.js and Tailwind CSS. This project serves as a comprehensive multi-page application for JG University, featuring elegant UI components, interactive carousels, and seamless client-side routing.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Assets:** Local SVG and highly-optimized modern image formats (`.webp`, `.avif`).

---

## ⚙️ How It Works & Architecture

This website leverages the **Next.js App Router** architecture (`src/app/` directory).

### 1. Global Layout (`src/app/layout.js`)
Instead of duplicating the header and footer on every single page, the `Navbar` and `Footer` components are injected directly into the root layout. This means that navigation is persistent and doesn't re-render as users navigate between pages, offering a true SPA (Single Page Application) feel.

### 2. Multi-Page Routing
The application has several distinct routes, mapped automatically by the App Router based on folder names:
- `/` (Home page)
- `/campus` (Campus showcase with fade carousel)
- `/programs`, `/collaborations`, `/media`, `/career`, `/discover-us`, `/contact-us` (Sub-pages using their respective `page.js` files).

Client-side navigation between these pages is handled by the Next.js `<Link href="...">` component ensuring instantaneous page transitions without full-page reloads.

---

## 🎨 Next.js & Tailwind CSS Usage

### Tailwind CSS Styling Strategies
The project heavily utilizes Tailwind utility classes for a "premium" design aesthetic:
- **Glassmorphism:** Achieved via custom global CSS utility classes (`.glass-card`) which apply `rgba` backgrounds, `backdrop-blur()`, and subtle white borders.
- **Gradients:** Vibrant textual and background gradients (e.g., `bg-gradient-primary`, `text-gradient`) defined in `globals.css` and applied as utility classes.
- **Responsive Design:** Extensive use of `md:`, `lg:`, and `sm:` breakpoint prefixes to ensure perfect layout scaling on mobile, tablet, and desktop viewports.
- **Flexbox & CSS Grid:** Grid is used for structuring repeating UI elements like the *Faculty Members* and *Testimonials* sections (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).

### Next.js Image Optimization
All local imagery (e.g., from `src/assets/`) is rendered using the Next.js `<Image />` component. 
- **Automatic Optimization:** It prevents layout shift and automatically serves images in modern formats like WebP or AVIF based on browser support.
- **Object-Fit & Fill:** Layouts frequently use the `fill` property combined with `className="object-cover"` to create highly responsive image containers that don't warp aspect ratios.

### Framer Motion Animations
Interactive micro-interactions and scroll-animations are injected using Framer Motion.
- Uses `<motion.div>` with `initial={{ opacity: 0, y: 30 }}` and `whileInView={{ opacity: 1, y: 0 }}` to trigger elegant fade-in-up animations as the user scrolls down the page.
- Utilizes `<AnimatePresence>` in `Gallery.jsx` and `CampusSlider.jsx` to manage smooth cross-fade transitions between array elements in state.

---

## 🛠 How to Run Locally

To spin up this project on your local machine:

1. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **View the Site**
   Open [http://localhost:3000](http://localhost:3000) in your web browser. The server supports Fast Refresh, meaning any changes you make to the code will immediately update in the browser without reloading the page.

---

## 📁 Key Directories

- `src/app/` - The core routing layer. Contains `page.js` files for all URLs, `layout.js`, and `globals.css`.
- `src/components/` - Reusable UI building blocks (e.g., `Navbar.jsx`, `CampusSlider.jsx`, `Leaders.jsx`, `Faculty.jsx`).
- `src/assets/` - All static local images organized by purpose (`/campus`, `/faculty`, `/incharges`, `/logo`, `/students`).
