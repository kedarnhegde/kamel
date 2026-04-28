import { Event } from "@/lib/types";

export default function EventItem({ event }: { event: Event }) {
  return (
    <div className="border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl flex justify-between hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
      <div>
        <p className="font-semibold capitalize text-purple-300">
          {event.type.replaceAll("_", " ")}
        </p>
        <p className="text-sm text-gray-400 mt-1">
          {new Date(event.timestamp).toLocaleString()}
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-300 font-medium">{event.userName}</p>
        {event.value !== undefined && (
          <p className="text-lg font-bold text-green-400 mt-1">${event.value}</p>
        )}
      </div>
    </div>
  );
}