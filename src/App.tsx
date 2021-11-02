import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('@routes/Home'));
const Login = lazy(() => import('@routes/Login'));

const App = (): JSX.Element => (
	<Router>
		<Link to="/">메인</Link>
		<Link to="/login">로그인</Link>
		<Switch>
			<Suspense fallback={<div>loading...</div>}>
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
			</Suspense>
		</Switch>
	</Router>
);

export default hot(App);