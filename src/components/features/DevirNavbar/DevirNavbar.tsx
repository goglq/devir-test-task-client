import React from 'react';

import { HiBookOpen, HiHome } from 'react-icons/hi';

import Navbar from '../../core/Navbar';
import { RouteInfo } from '../../../objects/routeInfo';

const routeInfos: RouteInfo[] = [
	{
		key: 'home-link',
		title: 'Home',
		to: '/',
		icon: HiHome
	},
	{
		key: 'form-link',
		title: 'Form',
		to: '/form',
		icon: HiBookOpen
	}
];

const DevirNavbar: React.FC = () => {
	return <Navbar routeInfos={routeInfos} />;
};

export default DevirNavbar;
