import {StyleSheet, Text, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import {ActivityIndicator, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import ImageComponent from "./ImageComponent";
import fetchImages from "./fetchImages";
import {Constants} from "./Constants";
import ImageDataOverlay from "./ImageDataOverlay";

function ImageRow(props) {
    return (
        <View style={styles.imageRowView} >
            {props.imagedata.map((imagedata, index) =>
                <ImageComponent
                    imageurl={imagedata.url}
                    bigurl = {imagedata.bigurl}
                    avg_color={imagedata.avg_color}
                    key={index}
                    imagesPerRow={props.imagesPerRow}
                    photographer={imagedata.photographer}/>
            )}

        </View>
    );
}

// Funcion de https://stackoverflow.com/questions/41056761/detect-scrollview-has-reached-the-end
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
};

export default function MainContent(props) {
    const [currentPage, setcurrentPage] = useState(1);
    const [imagesData, setimagesData] = useState([]);
    const [fetching, setfetchingstate] = useState(false);

    useEffect(
        () => {
            (async () => {
                /* Con darle valor [] hacemos que se reinicie la grid, dandole un toque de animacion*/
                setimagesData([])
                setfetchingstate(true)
                /* El primer fetch es por defecto la pagina 1*/
                const fetchedimagesdata = await fetchImages(1, props.searchQuery, props.imagesPerRow);
                setimagesData(fetchedimagesdata)
                setcurrentPage(2)
                setTimeout(function () {
                    setfetchingstate(false)
                }, 500);
            })()
        }
        , [props.searchQuery]
    );

    const fetchMorePhotos = async () => {
        setfetchingstate(true)
        const fetchedimagesdata = await fetchImages(currentPage, props.searchQuery, props.imagesPerRow)
        let returnarray = imagesData.concat(fetchedimagesdata);
        setimagesData(returnarray)
        setTimeout(function () {
            setfetchingstate(false)
        }, 500);
    }

    return (
        <ScrollView
            style={styles.container}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent) && !fetching && props.searchQuery !== "") {
                    (async () => {
                        await fetchMorePhotos()
                        setcurrentPage(currentPage + 1)
                    })()
                }
            }}
            scrollEventThrottle={400}>
            <View style={styles.photoscontainer}>
                {imagesData.map((data, index) =>
                    index % props.imagesPerRow === 0 ?
                        <ImageRow imagedata={imagesData.slice(index, index + props.imagesPerRow)} key={index}
                                  imagesPerRow={props.imagesPerRow}/> : null
                )}
                {imagesData === [] ? <Text>No photos found</Text> : null}
            </View>
            {fetching ? <ActivityIndicator size="large" style={styles.loadingindicator}/> :
                <View style={{marginBottom: 100}}/>}

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "white"
    },
    photoscontainer: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10
    },
    placeholderstyle: {},
    imageRowView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: 10,
        paddingTop: 10
    },
    loadingindicator: {
        paddingTop: 10,
        paddingBottom: 50
    }
});
