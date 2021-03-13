import {SafeAreaView, StatusBar, View, StyleSheet, ScrollView} from "react-native";
import {Icon, SearchBar} from "react-native-elements";
import React from "react";
import {Constants} from "../Constants";


export default function CategoriesHeader(props) {
    const icondata = [
        {name:"fast-food-outline", type:"ionicon", search:"food"},
        {name:"american-football-outline", type:"ionicon", search:"sport"},
        {name:"people-outline", type:"ionicon", search:"people"},
        {name:"brush-outline", type:"ionicon", search:"paint"},
        {name:"game-controller-outline", type:"ionicon", search:"game"},
        {name:"leaf-outline", type:"ionicon", search:"nature"},
        {name:"library-outline", type:"ionicon", search:"book"},
        {name:"rainy-outline", type:"ionicon", search:"rain"},
    ]
    return (
        <View style={styles.mainview}>
        <ScrollView style={styles.scrollview} horizontal={true} showsHorizontalScrollIndicator={false}>
            {icondata.map((data, index) =>
                <Icon name={data.name} type={data.type} size={50} key={index} style={styles.icon} onPress={()=>props.changeParentsearchQuery(data.search)}/>
            )}

        </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    mainview: {
        alignItems: "center",
    },
    scrollview: {
        height: 80,
        width: Constants.windowWidth - 50,
        flexDirection: "row",
        paddingTop: 10
    },
    scrollviewcontent: {
        alignItems: "center",
        justifyContent: "space-around",
    },
    icon: {
        paddingLeft:20,
        paddingRight:20
    }
});
