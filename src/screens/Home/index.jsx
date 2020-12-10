import React from 'react';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/button'

// import { Container } from './styles';

function Home() {
  return (
    <div className="vh-100">
		<Link to="/game">
			<Button block className="h-50" variant="dark">
				<p className="display-1 font-weight-bold">
					Game
				</p>
			</Button>
		</Link>

		<Link to="/solution">
			<Button block className="h-50" variant="dark">
				<p className="display-1 font-weight-bold">
					Solution
				</p>
			</Button>
		</Link>
    </div>
  );
}

export default Home;
