import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TIconProps } from '../types';

export const Icons = ({ name }: TIconProps) => {

    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#F7CD2E" />
        case 'cross':
            return <Icon name="times" size={38} color="#38CC77" />
        default:
            return <Icon name="home" size={30} color="#0D0D0D" />
    }
}
