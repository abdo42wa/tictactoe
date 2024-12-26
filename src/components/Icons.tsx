import React from 'react'
import type { PropsWithChildren } from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import FontAwesome from '@react-native-vector-icons/fontawesome';

type IconProps = PropsWithChildren<{
    name: string
}>

// circle => circle-thin  cross => times default => Pencil
export const Icons = ({ name }: IconProps) => {

    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#F7CD2E" />
        case 'cross':
            return <Icon name="times" size={38} color="#38CC77" />
        default:
            return <Icon name="home" size={30} color="#0D0D0D" />
    }
}
