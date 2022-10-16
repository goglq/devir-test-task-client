import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Box, Container } from '@chakra-ui/react';

import DevirNavbar from '../DevirNavbar';

const DevirLayout: React.FC = () => {
	return (
		<BrowserRouter>
			<DevirNavbar />
			<Container
				bg={['red', 'orange', 'yellow', 'green', 'blue']}
				maxW={['100%', '100%', '80%', '80%', '60%']}
			>
				<Routes>
					<Route path="/" element={<Box>Introduction</Box>} />
					<Route path="/form" element={<Box>Form</Box>} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

export default DevirLayout;
