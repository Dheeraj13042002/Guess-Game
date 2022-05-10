import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Number({children}) {
  return (
    <View style={styles.container}>
        <Text style={styles.number}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderColor:'#B53471',
        borderWidth:2,
        borderRadius:6,
        padding:5,
    },
    number:{
        fontSize:20,
        color:'#B53471',
    }
})

export default Number