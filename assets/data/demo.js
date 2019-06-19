

// import React from "react";
// import {
//   StyleSheet,
//   View,
//   ActivityIndicator,
//   FlatList,
//   Text,
//   TouchableOpacity
// } from "react-native";

// export default class Source extends React.Component {

// static navigationOptions = ({ navigation }) => {
// return {
//   title: "Source Listing",
//   headerStyle: {backgroundColor: "#fff"},
//   headerTitleStyle: {textAlign: "center",flex: 1}
//  };
// };
// constructor(props) {
//  super(props);
//  this.state = {
//    loading: true,
//    dataSource:[]
//   };
// }
// componentDidMount(){
// fetch("https://uxp25wdi9g.execute-api.us-east-1.amazonaws.com/test/images")
// .then(response => response.json())
// .then((responseJson)=> {
//   this.setState({
//    loading: false,
//    dataSource: responseJson
//   })
// })
// .catch(error=>console.log(error)) //to catch the errors if any
// }
// FlatListItemSeparator = () => {
// return (
//   <View style={{
//      height: .5,
//      width:"100%",
//      backgroundColor:"rgba(0,0,0,0.5)",
// }}
// />
// );
// }
// renderItem=(data)=>
// <TouchableOpacity style={styles.list}>
// <Text style={styles.lightText}>{data.item.name}</Text>
// <Text style={styles.lightText}>{data.item.email}</Text>
// <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
// render(){
//  if(this.state.loading){
//   return( 
//     <View style={styles.loader}> 
//       <ActivityIndicator size="large" color="#0c9"/>
//     </View>
// )}
// return(
//  <View style={styles.container}>
//  <FlatList
//     data= {this.state.dataSource}
//     ItemSeparatorComponent = {this.FlatListItemSeparator}
//     renderItem= {item=> this.renderItem(item)}
//     keyExtractor= {item=>item.id.toString()}
//  />
// </View>
// )}
// }

module.exports = [
	{
		id:1,
    image:require('../images/01.jpg'),
	},
	{
		id:2,
		image:require('../images/02.jpg'),
	},
	{
		id:3,
		image:require('../images/03.jpg'),
	}
]