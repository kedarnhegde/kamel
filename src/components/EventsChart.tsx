"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: Record<string, number>;
}

export default function EventsChart({ data }: Props) {
  const chartData = Object.entries(data).map(([type, count]) => ({
    type: type.replaceAll("_", " "),
    count,
  }));

  return (
    <div className="p-6 border border-purple-500/20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg col-span-full">
      <p className="text-sm text-purple-300 uppercase tracking-wide mb-4">Events by Type</p>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis dataKey="type" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #a855f7',
                borderRadius: '8px',
                color: '#fff'
              }}
              cursor={{ fill: 'rgba(168, 85, 247, 0.1)' }}
            />
            <Bar dataKey="count" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ec4899" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}