import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='app'>
						<Navbar title='GitHub Finder' icon={faGithub} />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route
									exact
									path='/user/:login'
									component={User}
								/>
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
