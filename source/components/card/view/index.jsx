import React from 'react';
import {Text, TouchableOpacity,Animated} from 'react-native'
import { cardStyle } from '../style';

const CardView = ({ id, name, flipped, flipCard ,flipFront ,flipBack }) =>{

    return  (
            <TouchableOpacity  style={[cardStyle.card, ]} onPress={() => (flipped ? undefined : flipCard(name,id) )} >
                <Animated.View   View style={[cardStyle.front, flipFront() ]}>
                <Text style={[{ transform: [{ rotateY: '180deg'}]},{ color: 'black',fontSize:30},]}>{name}</Text>
                </Animated.View>
                <Animated.View style={[cardStyle.back,flipBack()]}>
                <Text style={{ color: 'white', fontWeight: "bold",fontSize:25 }}>?</Text>
                </Animated.View>
            </TouchableOpacity>
            )

}
export default CardView;
