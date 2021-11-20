import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import GlobalStyle from '@components/GlobalStyle';
import IconLink from '@components/iconLink';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Loading from '@routes/Loading';

// TODO: type definition 다른 폴더로 빼기
declare global {
	interface Window {
		kakao: any;
	}
}

const Home = lazy(() => import('@routes/Home'));
const Login = lazy(() => import('@routes/Login'));
const MyPage = lazy(() => import('@routes/MyPage'));
const Signup = lazy(() => import('@routes/Signup'));

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
				<Suspense fallback={<Loading />}>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/mypage" component={MyPage} />
					<Redirect path="*" to="/" />
				</Suspense>
			</Switch>
		</Wrapper>
	</Router>
);

const SideBar = styled('div')({
	zIndex: 10,
	display: 'flex',
	flexDirection: 'column',
	width: '70px',
	height: '100%',
	padding: '40px 0px',
	boxShadow: 'rgba(17, 17, 26, 0.1) 3px 3px 4px 1px',

	backgroundColor: '#F4F0EF',
});

const Wrapper = styled('div')({
	display: 'flex',
	width: '100%',
	height: '100%',
});

export default hot(App);
