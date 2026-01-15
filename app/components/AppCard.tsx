import { App } from '../config/apps';

interface AppCardProps {
  app: App;
}

const statusConfig = {
  online: { label: 'Online', className: 'bg-green-500' },
  offline: { label: 'Offline', className: 'bg-red-500' },
  maintenance: { label: 'Maintenance', className: 'bg-yellow-500' },
};

export function AppCard({ app }: AppCardProps) {
  const status = statusConfig[app.status];

  return (
    <a
      href={app.url}
      className="group block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 hover:bg-slate-800/70 hover:border-slate-600/50 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-1">
        {/* Gradient accent */}
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${app.color}`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{app.icon}</span>
            <div>
              <h2 className="text-xl font-semibold text-white group-hover:text-slate-100">
                {app.name}
              </h2>
            </div>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${status.className} animate-pulse`} />
            <span className="text-xs text-slate-400">{status.label}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {app.description}
        </p>

        {/* Link indicator */}
        <div className="flex items-center text-slate-500 text-sm group-hover:text-slate-400 transition-colors">
          <span className="truncate">{app.url}</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
