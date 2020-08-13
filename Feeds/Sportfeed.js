import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, View,ActivityIndicator,FlatList,Dimensions,Image,TouchableWithoutFeedback,Linking,Share,ImageBackground} from 'react-native';
import { Directions } from 'react-native-gesture-handler';
const {width,height} = Dimensions.get('window');
console.disableYellowBox = true;
export default class Sportfeed extends React.Component{

   state={
      news:[],
      loading:true,
   }
   fetchnews= ()=>{
      fetch('http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a7108905c2e546dcae97a4b89f29cfed')
      .then((res) =>res.json())
      .then((response) =>{
         this.setState({
            news:response.articles,
            loading:false
         })
      })
   }
   componentDidMount(){
         this.fetchnews()
      }   
   sharearticle= async articles =>{
      try{
         await Share.share({
            message : "Check out this article" + articles
         })

      }catch(error){
         console.log("error")
      }
      

   }
      render(){  
          if(this.state.loading){
            return(
               
               <View style={{backgroundColor:"#fff",flex:1,alignItem:"center",justifyContent:"center"}}>
                   <ActivityIndicator size="large" color="#323232" />
               </View>
                  
               
            );
   }
   else{
      return(
      <View style={styles.Container}>
                   
                  <View style={styles.Header}>
                 
                     <Text style={{color:"#333",fontSize:23,fontWeight:"bold"}}>Top Headline</Text>
                     <Text style={{color:"#333",fontSize:20,fontWeight:"400"}}>Sports</Text>
                           <Text style={{color:"red",left:280,top:-50}}>LIVE</Text>
                           </View>
                           <View style={styles.news} >
                         <FlatList 
                         data = {this.state.news}
                         renderItem={({item})=>{
                            return(
                               <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.url)} >
                                  <View style={{width:width-50,height:180,backgroundColor:"#fff",marginBottom:15,borderRadius:15}}>
                                   <Image source ={{uri: item.urlToImage}} style={[StyleSheet.absoluteFill,{borderRadius:15}]} />
                                   <View style={styles.gradiens}>
                                      <Text style={{position:"absolute",bottom:0,color:"#fff",fontSize:15,padding:5}}>{item.title}</Text>
                                      <Icon  name='share' type='font-awesome'  color='#fff' size={20} onPress={()=>this.sharearticle(item.url)} style={{position:"absolute",top:0,right:0,padding:5}} />
                                      </View>
                                      </View>
                               
                               </TouchableWithoutFeedback>
                            );
                         }}
                         />  
                        
                           </View>
                          </View>
                          );
   }
}
}
 

const styles =  StyleSheet.create({

Container:{
   flex:1,
   backgroundColor:"#ffff"
},
Header:{
   padding:25,
   top:0,
   
},
news:{
   alignSelf:'center',
   top:-10,
   
},
gradiens:{
   width:"100%",
   height:"100%",
   backgroundColor:"rgba(0,0,0,0.5)",
   borderRadius:15
}

})