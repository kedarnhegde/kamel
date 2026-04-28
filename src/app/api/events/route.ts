import { NextResponse } from "next/server";
import { Event, EventType } from "@/lib/types";

const eventTypes: EventType[] = [
  "ride_requested",
  "ride_completed",
  "user_signup",
  "payment_success",
];

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

function generateMockEvents(users: any[], count = 50): Event[] {
  return Array.from({ length: count }).map((_, i) => {
    const user = users[Math.floor(Math.random() * users.length)];
    return {
      id: `event_${i}`,
      type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
      timestamp: new Date(
        Date.now() - Math.random() * 1000 * 60 * 60 * 24
      ).toISOString(),
      userId: user.id.toString(),
      userName: user.name,
      value: Math.floor(Math.random() * 100),
    };
  });
}

export async function GET() {
  try {
    const users = await fetchUsers();
    const events = generateMockEvents(users);
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}