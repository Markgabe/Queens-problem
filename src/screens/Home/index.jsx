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
            <Link to="/game/5">Game</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
