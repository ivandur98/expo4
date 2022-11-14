
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import {Picker} from '@react-native-picker/picker';

const buttonColor=['red','orange','violet', 'green', 'blue', 'chocolate','brown']
const xylophoneSounds= [ 
  require('./assets/22.mp3'),
  require('./assets/23.mp3'),
  require('./assets/24.mp3'),
  require('./assets/25.mp3'),
  require('./assets/26.mp3'),
  require('./assets/27.mp3'),
  require('./assets/28.mp3'),
]
const soundOne=[
  require('./assets/22.mp3'),
  require('./assets/12.mp3'),
  require('./assets/13.mp3'),
]
export default function App() {
  const [selectedValue, setSelectedValue] = useState("a");
  handlePlaySound2 = async () => {
    if(selectedValue === 'a'){
      const soundObj2= new Audio.Sound()
      try{
        let source2 = soundOne[0]
        await soundObj2.loadAsync(source2)
        await soundObj2
          .playAsync()
          .then(async playbackStatus => {
            setTimeout(() => {
              soundObj2.unloadAsync()
            }, playbackStatus.playableDurationMillis)
          })
          .catch(error =>{
            console.log(error)
          })
      }catch(error){
        console.log(error)
      }
    }else if(selectedValue === 'b'){
      const soundObj23= new Audio.Sound()
      try{
        let source3 = soundOne[1]
        await soundObj23.loadAsync(source3)
        await soundObj23
          .playAsync()
          .then(async playbackStatus => {
            setTimeout(() => {
              soundObj23.unloadAsync()
            }, playbackStatus.playableDurationMillis)
          })
          .catch(error =>{
            console.log(error)
          })
      }catch(error){
        console.log(error)
      }
    }else if(selectedValue === 'c'){
      const soundObj4= new Audio.Sound()
      try{
        let source4 = soundOne[2]
        await soundObj4.loadAsync(source4)
        await soundObj4
          .playAsync()
          .then(async playbackStatus => {
            setTimeout(() => {
              soundObj4.unloadAsync()
            }, playbackStatus.playableDurationMillis)
          })
          .catch(error =>{
            console.log(error)
          })
      }catch(error){
        console.log(error)
      }
    }
    else{
      console.log('it didnt work')
    }
  }
  return(
    <View style={styles.container}>
          <TouchableOpacity onPress={()=>this.handlePlaySound2()} style=
          {styles.button2}>
          <Text>Play Sound</Text>
          </TouchableOpacity>
          <Picker
            style={styles.pickerStyle}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Song 1" value="a" />
            <Picker.Item label="Song 2" value="b" />
            <Picker.Item label="Song 3" value="c" />
          </Picker>        
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonContainer:{
    height:40,
    margin: 5,
  },
  button:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
    },
  buttonText:{
    color: '#fff',
    fontSize: 18,
  }
})