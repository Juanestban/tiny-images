import { BrowserRouter } from 'react-router-dom';

import { Anchor, GithubIcon } from '@/components';
import AppRoute from '@/config/AppRoute';

import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <header className="flex justify-between items-center px-28">
        <Anchor to="/" className="m-0 p-0">
          <h1 className="text-2xl m-0 p-0">Minify Images</h1>
        </Anchor>
        <nav className="p-0 m-0">
          <ul className="p-0 m-0 flex gap-2">
            <li className="flex items-center">
              <Anchor to="/">Home</Anchor>
            </li>
            <li className="flex items-center">
              <Anchor to="https://www.npmjs.com/package/compressor-image" target="_blank">
                Install
              </Anchor>
            </li>
            <li className="flex items-center">
              <a href="https://github.com/Juanestban" target="_blank">
                <GithubIcon />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col justify-between">
        <AppRoute />
        <footer className="text-center p-4">
          <h2>©Copyright - Juanestban 2024</h2>
        </footer>
      </main>
      <div className="polygon">
        <div className="circle size-custom-1" />
        <div className="circle size-custom-2" />
        <div className="circle size-custom-3" />
      </div>
    </BrowserRouter>
  );
}

export default App;
