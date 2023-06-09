import { Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'

type SearchInputProps = {

}

const SearchInput: React.FC<SearchInputProps> = () => {
    return (
        <Flex flexGrow={1} mr={2} align='center'>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' mb={1} />
                </InputLeftElement>
                <Input
                    placeholder='Search Reddit'
                    fontSize='10pt'
                    _placeholder={{ color: 'gray.500' }}
                    _hover={{
                        bg: 'white',
                        border: '1px solid',
                        borderColor: 'blue.500',
                    }}
                    _focus={{
                        border: '1px solid',
                        borderColor: 'blue.500',
                    }}
                    height='34px'
                    bg='gray.50'
                />
            </InputGroup>
        </Flex>
    )
}

export default SearchInput;
