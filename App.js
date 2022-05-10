import React,{ useState} from 'react';
import { StyleSheet, View } from 'react-native';


import Header from './screens/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';

export default function App() {

  const [Continue, setContinue] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const gameStartedHandler = (selectedNumber) => {
    setContinue(true);
    setSelectedNumber(selectedNumber);
  }

  const gameExitHandler = () => {
    setContinue(false);
  }

  return (
    <View style={styles.container}>
      <Header title="GUESS GAME"/>
      {
        !Continue ? 
          <StartGame gameStartedHandler={gameStartedHandler}/>:
          <Game selectedNumber={selectedNumber} gameExitHandler={gameExitHandler}/>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
