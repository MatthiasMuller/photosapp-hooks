import {StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import {Constants} from "./Constants";
import ImageDataOverlay from "./ImageDataOverlay";

export default function ImageComponent(props) {
    const [showOverlay, setshowOverlay] = useState(false)
    let imageSize = (Constants.windowWidth / props.imagesPerRow) - 20;
    let imagestyle = {
        height: imageSize,
        width: imageSize,
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 2
    }
    let avg_color = /^#[0-9A-F]{6}$/i.test(props.avg_color) ? props.avg_color.replace("#", "#32") : "red"
    return (
        <TouchableOpacity onPress={() => setshowOverlay(true)}>
            <Image
                source={{uri: props.imageurl}}
                style={imagestyle}
                PlaceholderContent={<ActivityIndicator/>}
                placeholderStyle={{backgroundColor: avg_color,}}
            />
            {showOverlay ? <ImageDataOverlay setshowOverlay={setshowOverlay}
                                             imageurl={props.bigurl}
                                             photographer={props.photographer}
                                             avg_color={avg_color}/> : null}
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    placeholderstyle: {
        backgroundColor: "red"
    },
});
