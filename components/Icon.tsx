import {View , Text} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import type { PropsWithChildren } from 'react';


type IconProps = PropsWithChildren<{
    name: string;
    size ?:number;
    color?:string;
    solid?:boolean;
}>

export default function Icon({name,size,color,solid}:IconProps) : JSX.Element{
    return(
        <View>
            <Icons name={name} size={size? size:30} color={color? color: '#000000'} solid={solid} />
        </View>
    )

}