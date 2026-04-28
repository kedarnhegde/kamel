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
![Dashboard](./screenshots/dashboard.png)

### Event Analytics
![Analytics](./screenshots/analytics.png)

### Event List
![Events](./screenshots/events.png)

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
