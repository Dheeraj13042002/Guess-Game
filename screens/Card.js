import React from 'react'
import {View , Text, StyleSheet} from 'react-native';

function Card({children, style}) {
  return (
    <View style={{...styles.card, ...style}}>{children}</View>
  )
}

const styles = StyleSheet.create({
    card : {
        elevation: 8,
        backgroundColor:'#E9CDF3',
        borderRadius: 6,
        padding:20,
    }
})

export default Card