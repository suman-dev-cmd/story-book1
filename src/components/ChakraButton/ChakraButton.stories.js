import React from 'react';
import {Button} from '@chakra-ui/react';

export default{
     title:'Button',
     component:Button
}

export const Success = ()=> <Button variant='green'>Success</Button>
export const Danger = ()=> <Button variant='red'>Danger</Button>