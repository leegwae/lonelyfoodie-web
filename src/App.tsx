import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import GlobalStyle from '@components/GlobalStyle';
import IconLink from '@components/iconLink';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// TODO: type definition 다른 폴더로 빼기
declare global {
	interface Window {
		kakao: any;
	}
}

const Home = lazy(() => import('@routes/Home'));
const Login = lazy(() => import('@routes/Login'));

const App = (): JSX.Element => (
	<Router>
		<GlobalStyle />
		<Wrapper>
			<SideBar>
				<IconLink to="/" icon={<HomeIcon fontSize="large" />} />
				<IconLink
					to="/login"
					icon={<AccountCircleIcon fontSize="large" />}
				/>
			</SideBar>
			<Switch>
				<Suspense fallback={<div>loading...</div>}>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={Login} />
				</Suspense>
			</Switch>
		</Wrapper>
	</Router>
);

const SideBar = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '70px',
	height: '100%',
	padding: '40px 0px',
	boxShadow:
		'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
});

const Wrapper = styled('div')({
	display: 'flex',
	width: '100%',
	height: '100%',
});

export default hot(App);
