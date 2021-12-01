import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GlobalStyle from '@components/GlobalStyle';
import Loading from '@routes/Loading';
import IconLink from '@common/iconLink';
import Sidebar from '@common/sidebar';

// TODO: type definition 다른 폴더로 빼기
declare global {
	interface Window {
		kakao: any;
	}
}

const Home = lazy(() => import('@home/Home'));
const Login = lazy(() => import('@routes/Login'));
const MyPage = lazy(() => import('@routes/MyPage'));
const Signup = lazy(() => import('@routes/Signup'));
const Withdraw = lazy(() => import('@routes/Withdraw'));

const App = (): JSX.Element => (
	<Router>
		<GlobalStyle />
		<Wrapper>
			<Sidebar>
				<IconLink to="/" icon={<HomeIcon fontSize="large" />} />
				<IconLink
					to="/login"
					icon={<AccountCircleIcon fontSize="large" />}
				/>
			</Sidebar>
			<Switch>
				<Suspense fallback={<Loading />}>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/mypage" component={MyPage} />
					<Route path="/withdraw" component={Withdraw} />
				</Suspense>
			</Switch>
		</Wrapper>
	</Router>
);

const Wrapper = styled('div')({
	display: 'flex',
	width: '100%',
	height: '100%',
});

export default hot(App);
