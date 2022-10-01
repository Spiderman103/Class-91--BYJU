import React, {Component} from "react";
import{View,Text,StyleSheet} from "react-native";

export default class FeedScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}> Feed Screen </Text> 
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        marginTop: 20,
        fontSize: 35,
        color: "black",
        fontFamily: "Bubblegum-Sans",
        fontWeight: "bold"
    }
})