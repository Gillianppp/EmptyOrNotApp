import React from "react";
import styles from "../assets/styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const CardItem = ({
	actions,
	description,
	image,
	matches,
	name,
	onPressLeft,
	onPressRight,
	status,
	variant
}) => {
	// Custom styling
	const fullWidth = Dimensions.get("window").width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 170 : 350,
			margin: variant ? 0 : 20
		}
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
			paddingBottom: variant ? 5 : 7,
			color: "#363636",
			fontSize: variant ? 15 : 30
		}
	];

	return (
		<View style={styles.containerCardItem}>
			{/* IMAGE */}
			{/* <Image source={image} style={imageStyle} /> */}
 <Image source={{uri: "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"}} style={imageStyle} />

			{/* NAME */}
			<Text style={nameStyle}>{name}</Text>

			{/* ACTIONS */}
			{actions && (
				<View style={styles.actionsCardItem}>
					<TouchableOpacity style={styles.miniButton}>
						<Text style={styles.star}>
							<Icon name="star" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
						<Text style={styles.like}>
							<Icon name="like" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => onPressRight()}
					>
						<Text style={styles.dislike}>
							<Icon name="dislike" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.miniButton}>
						<Text style={styles.flash}>
							<Icon name="flash" />
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default CardItem;
