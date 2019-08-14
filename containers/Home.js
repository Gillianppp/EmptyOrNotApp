import React from "react";
import { View, ImageBackground , FlatList, ActivityIndicator, Text } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import City from "../components/City";
import Filters from "../components/Filters";
import CardItem from "../components/CardItem";
import styles from "../assets/styles";
import Demo from "../assets/data/demo.js";


export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  updateFilled() {
    this.swiper.swipeLeft();
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
      .catch((error) => {

      })
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
					<Text>Loading Here LOADING LOADING</Text>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
    <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
      <View style={styles.containerHome}>
      {/* <FlatList data={this.state.dataSource}
           renderItem={({item}) => <Text>{item.url}</Text>}
        /> */}
        <CardStack
					loop={true}
					verticalSwipe={false}
					renderNoMoreCards={() => null}
					ref={swiper => (this.swiper = swiper)}
				>
					{this.state.dataSource.map((item, index) => (
						<Card key={index}>
							<CardItem
								image={item.url}
								name={item.id}
								description={item.id}
								matches={item.id}
                actions
								onPressLeft={() => this.updateFilled()}
								onPressRight={() => this.swiper.swipeRight()}
							/>
						</Card>
					))}
				</CardStack>
      </View>
    </ImageBackground>
    )
  }
 }
