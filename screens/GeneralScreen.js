import React, {Component} from 'react';
import {StatusBar} from "expo-status-bar"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,

  ImageBackground,
  Image
} from 'react-native';
import HomeFead from "../Feeds/HomeFeed"
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
Icon.loadFont();
 console.disableYellowBox=true;
export default class GeneralScreen extends Component{  
  render() {  
    return (  
      <View style={{flex:1,backgroundColor:"#ffff"}}>
        <StatusBar style="inverted" />
        <Image source={require("../assets/gk.png")}/>
            
            <Header style={{backgroundColor:"#fff",shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,}}>
              <TouchableOpacity style={{alignItems:"flex-start",margin:12}} onPress={()=>this.props.navigation.openDrawer()}>
              <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png"}} style={{width:30,height:30,top:-1}} />
              <Hed>NewsTime</Hed>
              </TouchableOpacity>
              </Header>
              <Body>
                 <HomeFead/> 
                 </Body> 
      </View>
    );  
  }  
}  


const Header =styled.View`

position: absolute;
width: 321px;
height: 53px;
left: 17px;
top: 45px;

border-radius: 10px;

`

const Hed = styled.Text`

left:108;
top:-28;
font-size:18px;
color:red;
font-family:"serif";



`

const Body = styled.View`

top:-5px;
flex:1;


`