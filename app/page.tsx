import { AppCard } from './components/AppCard';
import { apps } from './config/apps';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Dev Server
          </h1>
          <p className="text-slate-400 text-lg">
            Applications and services running on this server
          </p>
        </header>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Empty state */}
        {apps.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No apps configured yet.</p>
            <p className="text-slate-600 text-sm mt-2">
              Add apps in <code className="bg-slate-800 px-2 py-1 rounded">app/config/apps.ts</code>
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 text-slate-500 text-sm">
          <p>Server Dashboard</p>
        </footer>
      </div>
    </div>
  );
}
