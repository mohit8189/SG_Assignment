import React from 'react';
import {View,Text, FlatList,} from 'react-native'
import Card from '../../../components/card/controller';
import { texts } from '../../../utils/constants';
import { gameBoard } from '../styles';

const BoardView = ({restartGame,cardList,flippedCards,handleClick,steps}) => {
    return  <View style={gameBoard.container}> 
                <View style={gameBoard.listContainer}>
                    <Text onPress={restartGame} style={gameBoard.reset}>{texts.reset}</Text>
                    <Text style={ gameBoard.steps}>{`${texts.steps} ${steps}`}</Text>
                </View>
                <FlatList 
                    data={cardList}
                    renderItem={({item,index}) => (
                        <Card
                                key={index}
                                id={index}
                                name={item.name}
                                flipped={item.flipped}
                                matched={item.matched}
                                clicked={flippedCards.length === 2 ? () => {} : handleClick}
                            />
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index+item.toString()}
                />
            </View>

}

export default BoardView;