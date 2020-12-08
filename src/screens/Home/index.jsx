import React from 'react';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/solution">Solution</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
