import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './modules/home/pages/Home';
import WhatHero from './modules/whatHero/pages/WhatHero';

import styles from './app.module.scss';
export function App() {
  useEffect(() => {
    const {
      NX_MARVEL_BASE_URL,
      NX_MARVEL_HASH,
      NX_MARVEL_TS,
      NX_MARVEL_API_KEY,
    } = process.env;
    fetch(
      `${NX_MARVEL_BASE_URL}comics?ts=${NX_MARVEL_TS}&apikey=${NX_MARVEL_API_KEY}&hash=${NX_MARVEL_HASH}`
    )
      .then((_) => _.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Comics</Link>
            </li>
            <li>
              <Link to="/what-hero">What hero am I?</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/what-hero">
            <WhatHero />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
