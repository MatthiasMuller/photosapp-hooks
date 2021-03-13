import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainHeader from "./components/Header/MainHeader";
import MainContent from "./components/MainContent";
import {Constants} from "./components/Constants";





export default function App() {
    const [imagesPerRow, setimagesPerRow] = useState(2);
    const [searchQuery, setsearchQuery] = useState("food");
    const changeImagesPerRow = (action) => {
        action==="ADD"? setimagesPerRow(Math.min(imagesPerRow + 1, 4)):setimagesPerRow(Math.max(imagesPerRow - 1, 1));
    };
    const changesearchQuery = (query) => {
        console.log("Query:" + query)
        setsearchQuery(query)
    };

    return (
        <View style={styles.screencontainer}>
             <MainHeader changeImagesPerRow = {changeImagesPerRow} changeParentsearchQuery = {changesearchQuery} ParentsearchQuery = {searchQuery}/>
             <MainContent imagesPerRow = {imagesPerRow} changesearchQuery = {changesearchQuery} searchQuery = {searchQuery}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screencontainer: {
        width: Constants.windowWidth,
        height: Constants.windowHeight,
        flex: 1
    },
});


