import React, {useState} from 'react';
import {Button, Overlay, ListItem, Icon, Image} from 'react-native-elements';
import {View, Text, StyleSheet, ActivityIndicator,} from "react-native";
import {Constants} from "./Constants";

export default function ImageDataOverlay(props) {

    return (
        <View>
            <Overlay isVisible={props.visible}
                     backdropStyle={styles.overlayaround}
                     overlayStyle={styles.container}
                     onBackdropPress={() => props.setshowOverlay(false)}>
                <Image
                    source={{uri: props.imageurl}}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator/>}
                    placeholderStyle={{backgroundColor: props.avg_color,}}
                />
                <View style={styles.textview}>
                <Text style={styles.text}>
                    {props.photographer}
                </Text>
                </View>

            </Overlay>
        </View>
    );
};


const styles = StyleSheet.create({
    overlayaround: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    container: {
        height: 450 ,
        width: Constants.windowWidth - 30,
        borderRadius: 35,
        alignItems: "center"
    },
    image: {
        height: 300,
        width: Constants.windowWidth - 60,
        borderRadius: 60
    },
    textview:{
        flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        height: 150,
        width: Constants.windowWidth - 60,
    },
    text: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: "Futura-Medium",
    }
});
