import React, { useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';


import Card from './Card';
import Input from './Input';
import Number from './Number';

function StartGame({gameStartedHandler}) {

   const [enteredText, setEnteredText] = useState('');
   const [confirm, setConfirm] = useState(false);
   const [selectedNumber, setSelectedNumber] = useState(0);

   const InputChangeHandler = (text) => {
       setEnteredText(text.replace(/[^0-9]/g, ''));
   }

   const resetHandler = () => {
       setEnteredText('');
       setConfirm(false);
   }

   const confirmHandler = () => {
       const number = parseInt(enteredText);
       if( isNaN(number)  || number <= 0 || number > 99){
            Alert.alert(
                'Invalid Number!',
                'Enter a number between 1 to 99',
                [{text: 'Okay' , style: 'destructive' , onPress: resetHandler}]
            )
            return;
       }

       setConfirm(true);
       setSelectedNumber(number);
       setEnteredText('');
       Keyboard.dismiss();
   }

   const cancelHandler = () => {
       resetHandler();
       setSelectedNumber(0);
   }

   const continueHandler = () => {

   }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.text}>Start a new Game!</Text>
            <Card style={styles.inputWrapper}>
                <Text style={styles.enterNumber}>Enter a Number</Text>
                <Input 
                    style={styles.input}  
                    placeholder='...'
                    blurOnSubmit
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={InputChangeHandler}
                    value={enteredText}
                />

                <View style={styles.btnWrapper}>
                    <View style={styles.btn}>
                        <Button 
                            color="#841584"
                            title='Reset'
                            onPress={resetHandler}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button 
                            color="#f7287b" 
                            title='Confirm'
                            onPress={confirmHandler}
                    />
                    </View>
                </View>
            </Card>

            {
                selectedNumber > 0 &&
                (
                    <Card style={styles.selectedNumber}>
                        <View style={styles.confirmationWrapper}>
                            <Text style={styles.selectedNumberStyle}>Your Selected Number is</Text>
                            <Text style={styles.selectedNumberValue}>
                                <Number>{selectedNumber}</Number>
                            </Text>
                            <Text style={styles.selectedNumberStyle}>Want to proceed ?</Text>
                        </View>
                        <View style={styles.btnWrapper}>
                            <View style={styles.btn}>
                                <Button 
                                    color="#841584"
                                    title='Cancel'
                                    onPress={cancelHandler}
                                />
                            </View>
                            <View style={styles.btn}>
                                <Button 
                                    color="#f7287b" 
                                    title='Continue'
                                    onPress={() => gameStartedHandler(selectedNumber)}
                            />
                            </View>
                        </View>
                    </Card>
                )
            }

            

        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container : {
        // margin : 10,
        flex:1,
        alignItems:'center',
        backgroundColor: '#EAD5F2',
    },
    text :{
        fontSize: 20,
        margin:20,
        color:'#B53471'
    }, 
    input:{
        borderColor:'#C578C5',
    },
    enterNumber:{
        marginLeft:70,
        fontSize:15
    },
    inputWrapper: {
    },
    
    btnWrapper : {
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop:10,
    },
    btn:{
        paddingHorizontal:10,
        width:'45%',
        color:'black'
    },
    selectedNumber:{
        marginTop:50,
    },
    selectedNumberStyle:{
        fontSize:15
    },
    confirmationWrapper:{
        alignItems:'center'
    },
    selectedNumberValue:{
        fontSize:20,
    },
    confirmBtnHandler:{
        flexDirection: 'row',
    }
})

export default StartGame