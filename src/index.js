import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/app';

const container = document.getElementsByClassName('todoapp')[0];
const root = createRoot(container);

root.render(<App />);
