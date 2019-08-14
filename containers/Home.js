import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://mk54o7cdli.execute-api.us-east-2.amazonaws.com/prod')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.images,
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
					<Text>Loading Here</Text>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
			<View>
				<CardStack
					loop={true}
					verticalSwipe={false}
					renderNoMoreCards={() => null}
					ref={swiper => (this.swiper = swiper)}
				>
					{this.state.dataSource.map((item, index) => (
						<Card key={index}>
							<CardItem
								image={item.ImageId.S}
								name={item.ImageId.S}
								
								actions
								onPressLeft={() => this.swiper.swipeLeft()}
								onPressRight={() => this.swiper.swipeRight()}
							/>
						</Card>
					))}
				</CardStack>
			</View>
      // <View style={{flex: 1, paddingTop:20}}>
			// 	<Text>Not Loading</Text>
			// 	<Text>END</Text>
      //   <FlatList
      //     data={this.state.dataSource}
      //     renderItem={({item}) => <Text>{item.ImageId.S}</Text>}
      //   /> 
      // </View>
    );
  }
}








// // import React from "react";
// // import { View, ImageBackground } from "react-native";
// // import CardStack, { Card } from "react-native-card-stack-swiper";
// // import City from "../components/City";
// // import Filters from "../components/Filters";
// // import CardItem from "../components/CardItem";
// // import styles from "../assets/styles";
// // import Demo from "../assets/data/demo.js";


// // const Home = () => {
// // 	return (
// // 		<ImageBackground
// // 			source={require("../assets/images/bg.png")}
// // 			style={styles.bg}
// // 		>
// // 			<View style={styles.containerHome}>
// // 				<CardStack
// // 					loop={true}
// // 					verticalSwipe={false}
// // 					renderNoMoreCards={() => null}
// // 					ref={swiper => (this.swiper = swiper)}
// // 				>
// // 					{Demo.map((item, index) => (
// // 						<Card key={index}>
// // 							<CardItem
// // 								image={item.image}
// // 								name={item.name}
// // 								description={item.description}
// // 								matches={item.match}
// // 								actions
// // 								onPressLeft={() => this.swiper.swipeLeft()}
// // 								onPressRight={() => this.swiper.swipeRight()}
// // 							/>
// // 						</Card>
// // 					))}
// // 				</CardStack>
// // 			</View>
// // 		</ImageBackground>
// // 	);
// // };

// // export default Home;


// import React from "react";
// import { View, ImageBackground } from "react-native";
// import CardStack, { Card } from "react-native-card-stack-swiper";
// import CardItem from "../components/CardItem";
// import styles from "../assets/styles";
// import Demo from "../assets/data/demo.js";

// import {
//   Text,
//   TouchableOpacity,
//   ActivityIndicator,
//   FlatList,
// } from "react-native";

// export default class Source extends React.Component {

// // static navigationOptions = ({ navigation }) => {
// // return {
// //   title: "Source Listing",
// //   headerStyle: {backgroundColor: "#fff"},
// //   headerTitleStyle: {textAlign: "center",flex: 1}
// //  };
// // };
// constructor(props) {
//  super(props);
//  this.state = {
//    dataSource:[]
//   };
// }

// componentDidMount(){
// return fetch('https://mk54o7cdli.execute-api.us-east-2.amazonaws.com/prod')
// .then((response) => response.json())
// .then((responseJson) => {

//   this.setState({
// 	dataSource: responseJson
//   }, function(){

//   });

// })
// .catch((error) =>{
//   console.error(error);
// });
// }

// render(){
// 	// return(
// 	// 		<ImageBackground
// 	// 		source={require("../assets/images/bg.png")}
// 	// 		style={styles.bg}
// 	// 	>
// 	// 		<View style={styles.containerHome}>
		
// 	// 			<CardStack
// 	// 				loop={true}
// 	// 				verticalSwipe={false}
// 	// 				renderNoMoreCards={() => null}
// 	// 				ref={swiper => (this.swiper = swiper)}
// 	// 			>
// 	// 				{this.state.dataSource.map((item, index) => (
// 	// 					<Card key={index}>
// 	// 						<CardItem
// 	// 							image={item.url}
// 	// 							name={item.url}
// 	// 							description={item.key}
// 	// 							matches={item.key}
// 	// 							actions
// 	// 							onPressLeft={() => this.swiper.swipeLeft()}
// 	// 							onPressRight={() => this.swiper.swipeRight()}
// 	// 						/>
// 	// 					</Card>
// 	// 				))}
// 	// 			</CardStack>
// 	// 		</View>
// 	// 	</ImageBackground>
// 	// 	)}

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
// 				<Text>This is something?</Text>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.ImageId}</Text>}
//           keyExtractor={({id}, index) => id}
//         />
//       </View>

//     );
// 	}
// }
