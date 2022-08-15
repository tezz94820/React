import React, { useState } from 'react'
import { StyleSheet, View ,Text, TextInput, Button, TouchableOpacity, TouchableHighlight, Pressable, Alert, ToastAndroid} from 'react-native'

function TextInputKeyBoard() {

  const [name,setName] = useState('')
  const [submit,SetSubmit] = useState(false)
  const submitHandler = () => {
    if(name.length>3)
      SetSubmit(!submit)
    else{
        //Alert

      // Alert.alert('Warning' , 'the name must be at least 3 characters',
      // [
      //   {text:'Do not Show Again',onPress:() => console.warn('Do not show again pressed')},
      //   {text:'Cancel',onPress:() => console.warn('Cancel pressed')},
      //   {text:'OK',onPress:() => console.warn('OK pressed')}
      // ],
      // {cancelable:true,onDismiss:() => console.warn('cancelld by clicking outside')}
      // )


          //Toast messages
          ToastAndroid.showWithGravity('the name must be at least 3 characters',ToastAndroid.TOP,ToastAndroid.CENTER)
    }
  }

  return (
    <View style={styles.body}>
        <Text style={styles.text}> Enter your Name</Text>
        <TextInput style={styles.input}
          placeholder='Name'
          onChangeText={value => setName(value)}
          //multiline // converts input field to textArea
          maxLength={40}  //max 40 characters
          //editable={true}  //blocked for user
          //secureTextEntry  //hides when password
        />

        <Text>Buttojn</Text>
        {/* Button     */}
        <Button style={styles.button}
          title={submit?'Clear':'Submit'}
          onPress={submitHandler} 
          />

        <Text>Touchables</Text>
        {/*  Touchables   */}
        <TouchableOpacity style={styles.touchable}
          onPress={submitHandler}>
          <View>
            <Text style={styles.text}>{submit?'Clear':'Submit'}</Text>
          </View>
        </TouchableOpacity>


        <TouchableHighlight style={styles.touchable}
          onPress={submitHandler}
          underlayColor='pink'>
          <View>
            <Text style={styles.text}>{submit?'Clear':'Submit'}</Text>
          </View>
        </TouchableHighlight>

        <Text>Pressable</Text>
        <Pressable style={styles.touchable}
          onPress={submitHandler}  
          onLongPress={submitHandler}   //long pressed for 3 sec 
          android_ripple={{color:'orange'}}
          hitSlop={{left:50 , right:50}}      //in 10 unit distance if clicked then even pressable is pressed
          >
            <View>
              <Text style={styles.text}>{submit?'Clear':'Submit'}</Text>
            </View>
        </Pressable>

          {/*Text when submt is clicked */}
          { submit?
            <View>
              <Text style={styles.text}> Username is {name}</Text>
            </View>
           : ''}
    </View>
  )
}

export default TextInputKeyBoard


const styles = StyleSheet.create({
    text:{
        fontSize:30
    },
    body:{
        height:'100%',
        width:'100%',
        backgroundColor:'skyblue',
        alignItems: 'center',
    },
    input:{
      borderColor:'white',
      borderWidth:2,
      width:150,
      textAlign:'center',
      fontSize:20,
    },
    touchable:{
      backgroundColor:'green',
      borderWidth:2,
      marginTop:10,
      height:40,
      width:100,
      alignItems: 'center',
    }
})