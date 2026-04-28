# Event Dashboard

A real-time event analytics dashboard built with Next.js, featuring interactive charts and KPI tracking.

## Features

- **Real-time Event Tracking** - Monitor ride requests, completions, signups, and payments
- **Interactive Analytics** - Visual charts showing event distribution by type
- **KPI Cards** - Track total events, revenue, and event type breakdowns
- **Dark Mode UI** - Modern gradient design with purple/pink accents
- **Responsive Design** - Works seamlessly on desktop and mobile

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Recharts (data visualization)
- JSONPlaceholder API (mock data)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── app/
│   ├── api/events/route.ts    # API endpoint for event data
│   ├── page.tsx               # Main dashboard page
│   └── globals.css            # Global styles
├── components/
│   ├── EventItem.tsx          # Individual event card
│   ├── EventsChart.tsx        # Bar chart component
│   └── KpiCard.tsx            # KPI metric card
└── lib/
    ├── analytics.ts           # Analytics utility functions
    └── types.ts               # TypeScript type definitions
```

## Screenshots

### Dashboard Overview
<img width="1470" height="880" alt="Screenshot 2026-04-28 at 13 19 18" src="https://github.com/user-attachments/assets/2677ed99-f5ba-4453-8157-4ed981deb647" />

### Event Analytics
<img width="1465" height="680" alt="Screenshot 2026-04-28 at 13 19 52" src="https://github.com/user-attachments/assets/b9635c42-75ad-4635-8e2d-1646535d9846" />


### Event List
<img width="1470" height="799" alt="Screenshot 2026-04-28 at 13 20 01" src="https://github.com/user-attachments/assets/cf7e0ba2-8b82-4430-9e4e-9b2cd51a2d20" />



## API

The dashboard fetches data from `/api/events` which generates mock events using the JSONPlaceholder API for user data.

**Event Types:**
- `ride_requested`
- `ride_completed`
- `user_signup`
- `payment_success`

## Build for Production

```bash
npm run build
npm start
```
