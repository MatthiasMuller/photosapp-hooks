import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from "react-native";
import {SearchBar, Icon} from 'react-native-elements';
import React, {useEffect, useState} from "react";
import {Constants} from "../Constants";
import CategoriesHeader from "./CategoriesHeader";
import SettingsOverlay from "./SettingsOverlay";


export default function MainHeader(props) {

    const [showOverlay, setshowOverlay] = useState(false);
    const [searchQuery, setsearchQuery] = useState(props.ParentsearchQuery)

    useEffect(
        () => {
            let timer = setTimeout(() => changeParentsearchQuery(),  1000);
            return () => {
                clearTimeout(timer);
            };
        },
        [searchQuery]
    );

    const toggleOverlay = () => {
        setshowOverlay(!showOverlay);
    };

    const changeParentsearchQuery = () => {
        props.changeParentsearchQuery(searchQuery)
    }

    const  onChangeText = (query) =>  {
        console.log("QueryFast:" + query)
        setsearchQuery(query)
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" hidden={false} translucent={true}/>
            <View style={styles.header}>
                <View style={styles.headercontent}>
                    <View style={styles.icon}>
                        <Icon name={"settings-outline"} type={"ionicon"} size={38} onPress={toggleOverlay}/>
                    </View>
                    <View style={styles.searchbar}>
                        <SearchBar
                            placeholder="Type Here..."
                            containerStyle={styles.searchcontainer}
                            inputContainerStyle={styles.inputcontainer}
                            inputStyle = {styles.inputstyle}
                            placeholderTextColor = {"black"}
                            rightIconContainerStyle = {styles.rightIconContainerStyle}
                            onChangeText={onChangeText}
                            value = {searchQuery}
                        />
                    </View>

                </View>
            </View>
            <CategoriesHeader changeParentsearchQuery = {props.changeParentsearchQuery}/>
            <SettingsOverlay visible={showOverlay} setshowOverlay = {toggleOverlay} changeImagesPerRow = {props.changeImagesPerRow}/>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    header: {
        height: 60,
        width: Constants.windowWidth,

    },
    headercontent: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 20,
        paddingLeft: 20
    },
    icon: {
        flex: 0.3,
    },
    searchbar: {
        flex: 1,
    },
    searchcontainer: {
        backgroundColor: "white",
        borderTopWidth: 0, //works
        borderBottomWidth: 0, //works
        // Esto hay que optimizarlo
        paddingBottom: 0,
        paddingTop: 0
    },
    inputcontainer: {
        borderRadius: 40,
        backgroundColor: "#EFF0F4",
        height: 40,
    },
    inputstyle: {
        color: "black"
    },
    rightIconContainerStyle: {
        color: "black"
    }
});
