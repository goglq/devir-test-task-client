import React from 'react'

import { Box } from '@chakra-ui/react'

interface SectionProps {
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return <Box h="80vh">{children}</Box>
}

export default Section
