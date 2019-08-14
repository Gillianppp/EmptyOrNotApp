import React from "react";
import { View, ImageBackground , FlatList, ActivityIndicator, Text, Alert } from "react-native";
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
      isLoading: true,
      updateResponse:"response"
    }
  }

  updateEmpty(id, empty, filled, active) {
    this.swiper.swipeLeft();

    if(empty != undefined){
      empty = parseInt(empty);
    }
    if(filled !=undefined){
      filled = parseInt(filled);
    }

    empty++;
    this.updateSinkStatus(id, empty, filled ,active);
  }

  updateFilled(id, empty, filled, active){
    this.swiper.swipeRight();

    if(empty != undefined){
      empty = parseInt(empty);
    }
    if(filled !=undefined){
      filled = parseInt(filled);
    }

    filled++;
    this.updateSinkStatus(id, empty , filled, active);
  }

  updateSinkStatus(id, empty, filled, active){
    fetch('https://mk54o7cdli.execute-api.us-east-2.amazonaws.com/prod?id='+id+'&empty='+empty+'&filled='+filled+'&active='+active, {  
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({})
    })
    .then((response) => {
      // Alert.alert("response: "+JSON.stringify(response));
      // this.setState({
      //   updateResponse: response
      // }, function(){

      // });
    })
    .catch((error) => {
      // Alert.alert("Error:"+error);
      // this.setState({
      //   updateResponse: "error: "+error
      // }, function(){

      // });
    })
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
        <View style={{flex: 1, justifyContent:'center'}}>
          <ActivityIndicator size="large" color="#0c62fb" />
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
								matches={item.id}
                actions
								onPressLeft={() => this.updateEmpty(item.id, item.emptyNum, item.filledNum, item.active)}
								onPressRight={() => this.updateFilled(item.id, item.emptyNum, item.filledNum, item.active)}
							/>
						</Card>
					))}
				</CardStack>
      </View>
    </ImageBackground>
    )
  }
 }
