import React from 'react'
import {Text , View, StyleSheet} from 'react-native';

function Header({title}) {
  return (
     <View style={styles.heading}>
         <Text style={styles.title}>{title}</Text>
     </View>
  )
}

const styles = StyleSheet.create({
    heading : {
        width:'100%',
        backgroundColor: '#833471',
        height:90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        color:'#9980FA',
        fontSize : 30,
        marginTop:20,
        fontWeight:'bold'
    }
})

export default Header