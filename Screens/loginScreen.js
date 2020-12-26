
import React from 'react';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends Component {
constructor(){
    super();
    this.state={
        email:'',
        password:'',
    }
}

login=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
        return(
            alert('SuccessFully Login')
        )
    })
    .catch((error)=>{
        return(
            alert('error')
        )
    })
        
    

}

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.login}>LoginScreen</Text>
        <TextInput style={styles.input}
        placeholder='Enter your ID'
        keyboardType='email-address'
        onChangeText={(text)=>{
            this.setState({
                email:text
            })
        }}/>

<TextInput style={styles.input}
        placeholder='Enter your Password'
        keyboardType='password'
        onChangeText={(text)=>{
            this.setState({
                password:text
            })
        }}/>
        
        <TouchableOpacity style={styles.touchable} onPress={()=>{this.login(this.state.email,this.state.password)}}>
            <Text style={styles.login}>Login</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.login}>signUp</Text>

        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
      color:"lightBlue",
      fontSize:20,
      fontWeight:'bold',
  },
  input:{
      width:50,
      height:50,
      borderWidth:5,
  },
  touchable:{
      width:100,
      height:80,
  }
});
