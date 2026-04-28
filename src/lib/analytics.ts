import { Event } from "./types";

// total number of events
export function getTotalEvents(events: Event[]): number {
  return events.length;
}

// count events by type
export function getEventsByType(events: Event[]) {
  return events.reduce<Record<string, number>>((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {});
}

// total revenue (sum of value for payment_success or ride_completed)
export function getTotalRevenue(events: Event[]): number {
  return events.reduce((sum, event) => {
    if (
      event.type === "payment_success" ||
      event.type === "ride_completed"
    ) {
      return sum + (event.value || 0);
    }
    return sum;
  }, 0);
}

// events in last X hours
export function getRecentEvents(events: Event[], hours: number) {
  const cutoff = Date.now() - hours * 60 * 60 * 1000;

  return events.filter(
    (event) => new Date(event.timestamp).getTime() > cutoff
  );
}