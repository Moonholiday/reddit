'use client'

import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import SearchInput from './SearchInput';
import AuthButtons from './RightContent/AuthButtons';
import RightContent from './RightContent/RightContent';

const Navbar: React.FC = () => {
    return (
        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex align='center'>
                <Image src="/images/redditFace.svg" height='30px' />
                <Image src="/images/redditText.svg" height='46px' display={{ base: 'none', md: "unset" }} />
            </Flex>
            <SearchInput />
            <RightContent />
        </Flex>
    );
}
export default Navbar
