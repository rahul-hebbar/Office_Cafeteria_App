import React, { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import NavComponent from "./NavComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./Menu";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Axios from "axios";

// Axios.defaults.baseURL = 'http://localhost:5000';

const login_state = atom({
	key: 'login',
	default: null,
});

const menu_state = atom({
	key: 'menu',
	default: null,
})

export default function Home() {
	const [login, setLogin] = useRecoilState(login_state);
	const [menu, setMenu] = useRecoilState(menu_state);
	const [loading, isLoading] = useState(true);

	useEffect(() => {
		Axios.get('/api/menulist')
			.then((resp) => {
				setMenu(resp.data.list)
				isLoading(false);
			}).catch((err) => console.log(err))
	}, [])

	return (
		<>
			<NavComponent login={login} setLogin={setLogin} />
			<Switch>
				<Route exact path='/menu'><Menu menu={menu} loading={loading}/></Route>
				<Route path='/profile'><Profile emailid={login} /></Route>
				<Route path='/admin/dashboard'><Dashboard login={login}/></Route>
				<Redirect to='/menu' />
			</Switch>
		</>
	);
}