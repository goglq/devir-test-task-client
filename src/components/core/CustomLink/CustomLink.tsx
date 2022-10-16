import React from 'react';
import { Link } from 'react-router-dom';

import { Icon, Text, Link as ChakraLink, HStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface CustomLinkProps {
	key: string;
	to: string;
	title: string;
	icon?: IconType;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, title, icon }) => {
	return (
		<Link to={to}>
			<ChakraLink>
				<HStack spacing="0.2rem">
					<Icon as={icon} fontSize="1.5rem" />
					<Text>{title}</Text>
				</HStack>
			</ChakraLink>
		</Link>
	);
};

export default CustomLink;
