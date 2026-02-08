TAHWUL Dashboard
A React dashboard for tracking digital transformation initiatives across different perspectives.

How to Run
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

Open http://localhost:5173 in your browser.

How I Built This
I structured the project with component reusability in mind. The main folder structure is:
src/
├── components/     # Reusable UI components
├── pages/         # Dashboard and detail pages
├── data/          # Mock data
└── types/         # TypeScript types
Tech Stack:

React 18 + TypeScript
Vite for faster builds
Tailwind CSS for styling
React Router for navigation
Recharts for charts
Lucide React for icons

Key Decisions:

Used component composition to keep things modular and reusable
Created a custom Tailwind config with brand colors (navy palette)
Built reusable components like Card, ProgressCircle, and RecentActivities
Used React Router params for dynamic perspective pages
Kept state management simple with useState (would use Zustand/Redux for larger apps)

Assumptions

Followed the Figma designs as the source of truth
Used navy blue as the primary brand color
Assumed percentage values are pre-calculated
Built for modern browsers (Chrome, Firefox, Safari, Edge)
Designed the data structure to match typical REST API responses for easy backend integration later
Made the UI responsive with mobile-first approach

What I'd Improve With More Time
Performance:

Add lazy loading for routes and components
Implement virtual scrolling for large lists
Use React.memo to prevent unnecessary re-renders

Features:

Real API integration instead of mock data
Add filters and sorting to tables
Implement search functionality
Add data export (PDF/Excel)
Dark mode toggle
Toast notifications for user actions

Code Quality:

Add unit tests with Vitest
Set up E2E tests with Playwright
Add proper error boundaries
Implement better loading states
Add form validation

Accessibility:

Add ARIA labels throughout
Ensure keyboard navigation works everywhere
Test with screen readers

Developer Experience:

Set up ESLint and Prettier
Add Storybook for component documentation
Add pre-commit hooks with Husky