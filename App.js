
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';
import GeneralScreen from './screens/GeneralScreen';
import EnScreen from './screens/EnScreen';
import SportScreen from './screens/SportScreen';
import TeachScreen from './screens/TeachScreen';
import { Button } from 'react-native';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


 class App extends Component{
   render(){
     return(
      <View style={{flex:1}}>
         <App2 />

      </View>
     );
   }
 }

 const CustomDrawerContentComponent = (props)=>(
   <View>
     <SafeAreaView>
       <View style={{justifyContent:'center', height:200}}>
        <ImageBackground  source={{uri:"https://apeonthemoon.com/wp-content/uploads/2019/02/4_AuteurTheory.jpg"}} style={styles.backgroundContainer}/>
        <Image source={{uri:"https://i2.wp.com/files.123freevectors.com/wp-content/uploads/new/people/362-free-fist-vector-images-for-illustrator.png?w=800&q=95"}} style={styles.drawerImage} />
        <Text style={styles.imageText}>
           ... Stunning news
        </Text>
       </View>
       <View>
        <DrawerItems {...props} />
       </View>
     </SafeAreaView>
   </View>
 )

 const DrawerNavigator = createDrawerNavigator({
  General:{
     screen:GeneralScreen,
     navigationOptions:{
       drawerIcon: (
         <Icon name="home" size={24} color="#323232" />
       ),
     },
   },
   Entertainment:{
    screen:EnScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="slideshare" size={24} color="#323232" />
      ),
    },
  },

  Sports:{
    screen:SportScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="flag" size={24} color="#323232" />
      ),
    },
  },

  Technology:{
    screen:TeachScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="mobile" size={24} color="#323232" />
      ),
    },
  },
  

 },{
   initialRouteName: 'General',
   contentComponent: CustomDrawerContentComponent,
   drawerPosition: 'left',
   drawerOpenRoute: 'DrawerOpen',
   drawerCloseRoute: 'DrawerClose',
   drawerToggleRoute: 'DrawerToggle'
 })

 const App2 = createAppContainer(DrawerNavigator)

 const styles = StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     justifyContent: 'center',
     backgroundColor:"#060507",
   },
   backgroundContainer:{
     flex:1,
     position: 'absolute',
     top:0,
     left:0,
     right:0,
     bottom:0,
     alignItems:'center'
   },
   drawerImage:{
     height:50,
     width:50,
     alignSelf:'center'
   },
   imageText:{
     alignSelf:'center',
     color: '#fff',
     padding:10,
     fontWeight: 'bold',
     fontStyle: 'italic'
   }
 });

export default App;