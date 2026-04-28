export type EventType =
  | "ride_requested"
  | "ride_completed"
  | "user_signup"
  | "payment_success";

export interface Event {
  id: string;
  type: EventType;
  timestamp: string;
  userId: string;
  userName: string;
  value?: number;
}