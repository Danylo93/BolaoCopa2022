import { Center, Text, Icon } from 'native-base';
import {Fontisto } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';
import React from 'react';
import Logo from '../assets/logo.svg';
import { Button } from '../components/Button';
import { color } from 'native-base/lib/typescript/theme/styled-system';


export function SignIn() {
  const { signInWithGoogle, userStorageLoading} = useAuth();
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button title='ENTRAR COM GOOGLE'
       type='SECONDARY'
       leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />} 
       mt={12}
       onPress={signInWithGoogle}
       isLoading={userStorageLoading}
       _loading  ={{_spinner: {color: 'white'}}}
       />
      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma {'\n'} informação além  do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}

