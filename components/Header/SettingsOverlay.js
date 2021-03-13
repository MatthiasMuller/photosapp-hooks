import React, {useState} from 'react';
import {Button, Overlay, ListItem, Icon} from 'react-native-elements';
import {View, Text, StyleSheet,} from "react-native";

export default function SettingsOverlay(props) {

    return (
            <Overlay isVisible={props.visible}
                     backdropStyle={styles.overlayaround}
                     overlayStyle={styles.container}
                     onBackdropPress={props.setshowOverlay}>
                <Text style={styles.text}>
                    SETTINGS
                </Text>
                <View style={styles.plusminuscontainer}>
                <Icon name={"add-circle-outline"} type={"ionicon"} size={60} onPress={() => props.changeImagesPerRow("ADD")}/>
                <Icon name={"remove-circle-outline"} type={"ionicon"} size={60} onPress={() => props.changeImagesPerRow("SUBTRACT")}/>
                </View>
            </Overlay>
    );
};
/**/


const styles = StyleSheet.create({
    overlayaround: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    container: {
        height: 200,
        width: 300,
        borderRadius: 60,
    },
    text: {
        textAlign: "center",
        fontSize: 40,
        paddingTop: 20
    }
    ,
    plusminuscontainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around",
    }
});

