
import React, { useState } from 'react';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scale, setScale] = useState(1);

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col items-center justify-center p-4 ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <header className="absolute top-0 w-full p-6 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">GL</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">GeometricLoader</h1>
        </div>
        
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`px-4 py-2 rounded-full border transition-all hover:scale-105 active:scale-95 ${
            isDarkMode 
              ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700' 
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-md text-center gap-12 mt-20">
        <section className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Seamless Geometric <span className="text-blue-500">Fluidity</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            A precisely choreographed SVG animation featuring interlocking rings with dynamic stroke transitions.
          </p>
        </section>

        <section className="relative flex items-center justify-center min-h-[300px] w-full">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div 
            className="relative transform transition-transform duration-300" 
            style={{ transform: `scale(${scale})` }}
          >
            <Loader />
          </div>
        </section>

        <section className="w-full space-y-6">
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium text-slate-500 uppercase tracking-widest">Scaling Visualization</label>
            <input 
              type="range" 
              min="0.5" 
              max="2" 
              step="0.1" 
              value={scale} 
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50">
              <span className="block text-xs text-slate-400 mb-1">Duration</span>
              <span className="text-lg font-bold">2.0s</span>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50">
              <span className="block text-xs text-slate-400 mb-1">Elements</span>
              <span className="text-lg font-bold">4 Rings</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-7xl p-8 text-center text-sm text-slate-400">
        Built with React & Tailwind • Visualizing Custom SVG Keyframes
      </footer>
    </div>
  );
};

export default App;
