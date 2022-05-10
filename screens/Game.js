import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import Card from './Card';
import Number from './Number';

const guessNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Game({selectedNumber, gameExitHandler}) {

  const [OpponentGuess, setOpponentGuess] = useState(guessNumber(0,100));
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [count, setCount] = useState(0)

  const showAlert = () => {
    Alert.alert(
        `Don't Cheat`,
        `Please provide the valid information`,
        [{style:"destructive"}]
    )
  }

  const handleHigher = () => {
    if(OpponentGuess < selectedNumber){
        setMin(OpponentGuess+1);
        const newNumber = guessNumber(OpponentGuess+1, max);
        setOpponentGuess(newNumber);
        setCount(count => count+1);
    }
    else{
        showAlert();
    }
  }

  const handleLower = () => {
    if(OpponentGuess > selectedNumber){
        setMax(OpponentGuess);
        const newNumber = guessNumber(min, OpponentGuess);
        setOpponentGuess(newNumber);
        setCount(count => count+1);
    }
    else{
        showAlert();
    }
  }

  const exitHandler = () => {
    gameExitHandler();
  }

  return (
    <View style={styles.container}>


        <Card style={styles.OpponentGuessWrapper}>
            <Text style={styles.OpponentGuessHeading}>Opponents's Guess!</Text>
            <Number>{OpponentGuess}</Number>
        </Card>


        <Card style={styles.OpponentGuessWrapper2}>
            {
                (selectedNumber === OpponentGuess) ?
                // <BlurView intensity={90} tint="dark" style={styles.blur}>
                    <View style={styles.OpponentGuessWrapper}>
                    <Text style={styles.OpponentGuessHeading}>Opponent guessed your number in <Number>{count}</Number> counts.</Text> 
                    <View style={styles.btn}>
                            <Button 
                                title='Exit'
                                color="#841584"  
                                onPress={exitHandler}
                            />
                    </View>
                    </View>
                // </BlurView>
                :
                <View style={styles.OpponentGuessWrapper}>
                    <Text style={styles.OpponentGuessHeading}>Your Number is </Text>
                    <View style={styles.btnWrapper}>
                        <View style={styles.btn}>
                            <Button           
                                title='higher' 
                                color="#841584"               
                                onPress={handleHigher}
                            />
                        </View>
                        <View style={styles.btn}>
                            <Button 
                                title='lower' 
                                color="#f7287b" 
                                onPress={handleLower}
                            />
                        </View>
                    </View>
                </View>
            }        
        </Card>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#EAD5F2',
    },
    OpponentGuessWrapper:{
        margin:20,
        justifyContent:'center',
        alignItems:'center',
    },
    OpponentGuessWrapper2:{
        margin:20,
        justifyContent:'center',
        alignItems:'center',
        blurRadius:1
    },
    OpponentGuessHeading:{
        fontSize:20,
    },
    btnWrapper : {
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop:10,
    },
    btn:{
        paddingHorizontal:10,
        width:'45%',
        color:'black',
        marginTop:10
    },
    blur:{
        // flex:1
    }
})

export default Game