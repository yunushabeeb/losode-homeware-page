# 🏡 Losode Homeware Homepage

Live Demo 👉 [losode-homeware-page.vercel.app](https://losode-homeware-page.vercel.app)

A responsive, intelligent, and component-driven homepage built for **Losode** to support the launch of its **Homeware** category. This complements the existing Men and Women sections and maintains visual and structural consistency with Losode’s brand.

---

## 📦 Project Brief

As part of its product expansion strategy, **Losode** is introducing a **Homeware** category. The task was to:

- Review the existing Men and Women pages.
- Build a consistent yet category-tailored homepage for Homeware.
- Focus on clean structure, usability, responsiveness, and code quality.
- (Bonus) Add **AI-powered features** to enrich the user experience.

---

## 🚀 Key Features

- ✨ **Modern UI** – Designed to match Losode’s aesthetic
- 📱 **Mobile responsive** – Fully optimized across devices
- ⚛️ **Component-driven** architecture for scalability and reusability
- 🧠 **AI integration** via Gemini API (Google Generative AI)
- 🔍 **Fuzzy Smart Search** using Fuse.js
- 🎠 **Carousel** for visual richness (using `react-slick`)
- 🎯 **Interactive UX** – Inline caption generation for each section
- 🧼 **Clean code**, modular structure, and TypeScript safety

---

## 🧠 AI Features Implemented ✅

### 1. **Product Tagline Generator**
Generates engaging taglines like:
> *"Elevate your space with elegance"*

### 2. **Trends Generator**
AI-generated micro-trends relevant to Homeware using the same Gemini integration.

### 3. **Smart Sectional Caption Buttons**
Each major section includes a button like _“Generate Caption”_ or _“Generate Trends”_ to dynamically create tailored AI text using Gemini.

> 🧠 All AI logic is modularized using **custom hooks**.

---

## 🧩 Custom Hooks

- `useTaglineGenerator` – Generate product taglines using Gemini
- `useTrendsGenerator` – Generate trends text
- `useProductsGenerator` – Generate product ideas or promotional text

Each hook is connected to Gemini and returns loading state, generated content, and a simple trigger.

---

## 🔍 Smart Search Behavior

- **Fuse.js** fuzzy search lets users find products easily.
- Typing in the **search bar (top-right)**:
  - Hides all other page content except the navbar and product list.
  - Shows only matching product cards.
  - Clears back to the full homepage when input is cleared.

---

## 🌐 State Management

- ✅ **React Context API** used to manage:
  - Product listings
  - Searching state
- Ensures seamless data flow without prop drilling

---

## 🛠️ Tech Stack

- **React 19 + TypeScript** – Strong typing, clarity, and developer confidence
- **TailwindCSS 4** – Rapid styling with utility-first classes
- **Fuse.js** – Lightweight fuzzy search
- **Gemini API** – AI text generation via Google Generative AI
- **Vite** – Lightning-fast dev server
- **React Slick** – Smooth, responsive carousel

---

## 📂 Project Structure

```

src/
├── components/       # Modular, reusable UI components
├── hooks/            # AI-related custom hooks
├── context/          # React Context setup
├── lib/              # AI helpers, config
├── App.css           # Tailwind and custom styles
├── Home.tsx          # Main component
└── App.tsx           # Root component

```

---

## 🧪 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (preferred package manager)

### Setup

```bash
# Clone the repository
git clone https://github.com/yunushabeeb/losode-homeware-page.git
cd losode-homeware-page

# Install dependencies
pnpm install

# Start development server
pnpm dev
````

> ⚠️ To use the AI Tagline Generator and Trends Generator, create a `.env` file in the root:

```env
VITE_GEMINI_API_KEY=your_google_api_key_here
```

---

## 📜 Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production
pnpm lint      # Run code linting
```

---

## 🔗 Live Demo

🖥️ Hosted on **Vercel**:
👉 [https://losode-homeware-page.vercel.app](https://losode-homeware-page.vercel.app)

---

## 📌 Assessment Note

This project was completed as a **Frontend Engineer Task Assessment** for **Losode** on May 26, 2025. It showcases:

* Technical competence in React and TypeScript
* Practical application of AI in UI
* Clean structure, responsiveness, and search optimization
* Attention to UX details and component reusability

---

## 🙌 Acknowledgments

* [Losode](https://www.losode.com)
* [Google Generative AI](https://ai.google.dev/)
* [TailwindCSS](https://tailwindcss.com)
* [Fuse.js](https://fusejs.io)

---

## 📄 License

This project is for demonstration and assessment purposes only.
