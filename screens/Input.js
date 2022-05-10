import React from 'react'
import {TextInput, StyleSheet} from 'react-native';

function Input(props) {
  return (
    <TextInput 
        {...props}
        style={{...styles.input, ...props.style}} 
        placeholder={props.placeholder}
    />
  )
}

const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        padding:10,
        height:40,
        margin:10,
    },
})

export default Input