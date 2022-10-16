import React from 'react';

import { Box, Center, HStack } from '@chakra-ui/react';

import CustomLink from '../CustomLink';

import { RouteInfo } from '../../../objects/routeInfo';

interface NavbarProps {
	routeInfos: RouteInfo[];
}

const Navbar: React.FC<NavbarProps> = ({ routeInfos }) => {
	return (
		<Center marginTop="0.5rem">
			<Box backgroundColor="red" padding="1rem" borderRadius="0.5rem">
				<HStack spacing="1rem">
					{routeInfos &&
						routeInfos.map((routeInfo) => (
							<CustomLink {...routeInfo} />
						))}
				</HStack>
			</Box>
		</Center>
	);
};

export default Navbar;
