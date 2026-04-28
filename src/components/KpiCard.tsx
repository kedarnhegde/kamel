interface KpiCardProps {
  title: string;
  value: string | number;
  children?: React.ReactNode;
}

export default function KpiCard({ title, value, children }: KpiCardProps) {
  return (
    <div className="p-6 border border-purple-500/20 rounded-2xl shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm hover:border-purple-500/40 transition-all">
      <p className="text-sm text-purple-300 uppercase tracking-wide">{title}</p>
      <p className="text-3xl font-bold text-white mt-2 mb-3">{value}</p>
      <div className="text-gray-300">{children}</div>
    </div>
  );
}