import * as firebase from 'firebase'
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Alert,TextInput } from 'react-native';
import * as firebase from 'firebase'

export default class AuthScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailID: '',
            password: ''
            }
    }
    userLogin = (email, password)=>{
        
      if(email && password){
        try{
            console.log('Hello')
           firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            console.log('Logged in Successfully')
            return Alert.alert('Logged in Successfully')
           })
        }catch(error){
          var errorCode = error.code
          var errorMessage = error.message
             console.log(errorMessage)
             return Alert.alert(errorMessage)
             
        }
        
      }else {
          console.log('Enter Email and Password')
          Alert.alert('Enter Email and Password')
      }
    }
    userSignup= (email, password)=>{
        
        if(email && password){
          try{
              console.log('Hello')
             firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
              console.log('Logged in Successfully')
              return Alert.alert('Logged in Successfully')
             })
          }catch(error){
            var errorCode = error.code
            var errorMessage = error.message
               console.log(errorMessage)
               return Alert.alert(errorMessage)
               
          }
          
        }else {
            console.log('Enter Email and Password')
            Alert.alert('Enter Email and Password')
        }
      }
    render(){
        return(
           <KeyboardAvoidingView>
             <View>
               <TextInput
               placeholder = 'xyz@gmail.com'
               onChangeText = {(text)=>{
                 this.setState({
                   emailID: text
                 })
               }}
               >

               </TextInput>
             </View>

             <View>
               <TextInput
               placeholder = 'Enter your password here'
               onChangeText = {(text)=>{
                 this.setState({
                   password: text
                 })
               }}
               >

               </TextInput>
             </View>
             <View>
               <TouchableOpacity
               style = {styles.loginButton}
               onPress = {()=>{
                         this.userLogin(this.state.emailID, this.state.password)
                     }}
               >
                 <Text>
                   Login
                 </Text>
               </TouchableOpacity>
             </View>

             <View>
               <TouchableOpacity
               style = {styles.loginButton}
               onPress = {()=>{
                         this.userSignup(this.state.emailID, this.state.password)
                     }}
               >
                 <Text>
                   Sign Up
                 </Text>
               </TouchableOpacity>
             </View>
           </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
  loginButton: {
        width: 200,
        height: 50,
        margin: 10,
        borderRadius: 15,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center'
    },
})