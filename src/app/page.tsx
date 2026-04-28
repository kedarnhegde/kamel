"use client";

import { useEffect, useState } from "react";
import { Event } from "@/lib/types";
import {
  getTotalEvents,
  getEventsByType,
  getTotalRevenue,
} from "@/lib/analytics";
import KpiCard from "@/components/KpiCard";
import EventItem from "@/components/EventItem";
import EventsChart from "@/components/EventsChart";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const totalEvents = getTotalEvents(events);
  const eventsByType = getEventsByType(events);
  const totalRevenue = getTotalRevenue(events);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <div className="p-6">Loading...</div>;

  if (!events.length) {
    return <div className="p-6">No events found</div>;
  }

  return (
    <>
      <main className="p-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Event Dashboard
          </h1>
          <p className="text-gray-400">Real-time analytics and insights</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KpiCard title="Total Events" value={totalEvents} />

          <KpiCard title="Revenue" value={`$${totalRevenue}`} />

          <KpiCard title="Event Types" value="">
            {Object.entries(eventsByType).map(([type, count]) => (
              <p key={type} className="text-sm capitalize">
                {type.replaceAll("_", " ")}: {count}
              </p>
            ))}
          </KpiCard>
          <EventsChart data={eventsByType} />
        </div>

        {/* Event List */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-300">Recent Events</h2>
          {events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}