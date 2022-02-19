import React from 'react';
import { View, Text } from "react-native";

import style from './style';

const Card = ({projectTitle, children}) => {

    return (
        <View style={style.card}>
            <View>
                <Text style={style.expTitle}>{projectTitle}</Text>
            </View>
            <View>
                <Text style={style.expTitle}>{children}</Text>
            </View>
        </View>
    )
}

export default Card