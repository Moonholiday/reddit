import React, { useState } from 'react'
import { Text, Button, Flex, Input } from '@chakra-ui/react'
import { authModalState } from '@/atoms/authModalAtom'
import { useSetRecoilState } from 'recoil'

type LoginProps = {

}


const Login: React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    const onSubmit = () => { }
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                required
                name='email'
                placeholder='email'
                type='email'
                mb={2}
                onChange={onChange}
                fontSize='10pt'
                _placeholder={{ color: 'gray.500' }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                bg='gray.50'
            />
            <Input
                required
                name='password'
                placeholder='password'
                type='password'
                mb={2}
                onChange={onChange}
                fontSize='10pt'
                _placeholder={{ color: 'gray.500' }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                bg='gray.50'
            />
            <Button
                width='100%'
                height='36px'
                type='submit'
                mt={2}
                mb={2}
            >
                Log In
            </Button>
            <Flex
                fontSize='9pt'
                justifyContent='center'
            >
                <Text mr={1}>New to Reddit?</Text>
                <Text
                    color='blue.500'
                    fontWeight={700}
                    cursor='pointer'
                    onClick={() => setAuthModalState((prev) => ({
                        ...prev,
                        view: 'signup'
                    }))}
                >
                    Sign Up
                </Text>
            </Flex>
        </form>
    )
}


export default Login
