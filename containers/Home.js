// import React from "react";
// import { View, ImageBackground } from "react-native";
// import CardStack, { Card } from "react-native-card-stack-swiper";
// import City from "../components/City";
// import Filters from "../components/Filters";
// import CardItem from "../components/CardItem";
// import styles from "../assets/styles";
// import Demo from "../assets/data/demo.js";


// const Home = () => {
// 	return (
// 		<ImageBackground
// 			source={require("../assets/images/bg.png")}
// 			style={styles.bg}
// 		>
// 			<View style={styles.containerHome}>

// 				<CardStack
// 					loop={true}
// 					verticalSwipe={false}
// 					renderNoMoreCards={() => null}
// 					ref={swiper => (this.swiper = swiper)}
// 				>
// 					{Demo.map((item, index) => (
// 						<Card key={index}>
// 							<CardItem
// 								image={item.image}
// 								name={item.name}
// 								description={item.description}
// 								matches={item.match}
// 								actions
// 								onPressLeft={() => this.swiper.swipeLeft()}
// 								onPressRight={() => this.swiper.swipeRight()}
// 							/>
// 						</Card>
// 					))}
// 				</CardStack>
// 			</View>
// 		</ImageBackground>
// 	);
// };

// export default Home;


import React from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "../components/CardItem";
import styles from "../assets/styles";
import Demo from "../assets/data/demo.js";

import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

export default class Source extends React.Component {

// static navigationOptions = ({ navigation }) => {
// return {
//   title: "Source Listing",
//   headerStyle: {backgroundColor: "#fff"},
//   headerTitleStyle: {textAlign: "center",flex: 1}
//  };
// };
constructor(props) {
 super(props);
 this.state = {
   loading: true,
   dataSource:[]
  };
}

componentDidMount(){
return fetch('')
.then((response) => response.json())
.then((responseJson) => {

  this.setState({
	isLoading: false,
	dataSource: responseJson
  }, function(){

  });

})
.catch((error) =>{
  console.error(error);
});
}

render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.key}, {item.url}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }

// componentDidMount(){
// fetch("https://uxp25wdi9g.execute-api.us-east-1.amazonaws.com/PROD/images")
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
// 	<ImageBackground
// 	source={require("../assets/images/bg.png")}
// 	style={styles.bg}
// >
// 	<View style={styles.containerHome}>

// 		<CardStack
// 			loop={true}
// 			verticalSwipe={false}
// 			renderNoMoreCards={() => null}
// 			ref={swiper => (this.swiper = swiper)}
// 		>
// 			{this.dataSource.map((item, index) => (
// 				<Card key={index}>
// 					<CardItem
// 						image={item.url}
// 						name={item.key}
// 						description={item.key}
// 						matches={item.key}
// 						actions
// 						onPressLeft={() => this.swiper.swipeLeft()}
// 						onPressRight={() => this.swiper.swipeRight()}
// 					/>
// 				</Card>
// 			))}
// 		</CardStack>
// 	</View>
// </ImageBackground>
// )}
}
