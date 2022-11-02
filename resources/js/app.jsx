import '../css/app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

InertiaProgress.init({ color: '#4B5563' });

createInertiaApp({
  resolve: name =>
    resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    return createRoot(el).render(<App {...props} />);
  },
});
