import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Mood = (props) => {

    const getColor = (mood) => {
        const colors = ['purple','red','orange','yellow','green'];
        return colors[mood-1];
    };

    const getHeight = (mood) => {
        const heights = ['20%','40%','60%','80%','100%'];
        return heights[mood-1];
    };

    return (
        <View style={[styles.bckground, { backgroundColor: getColor(props.mood), width: getHeight(props.mood)}]}>
            <Text style={styles.text} key={props.id}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
        // backgroundColor: 'lightgrey',
        // marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bckground: {
        // flex: 1,
        // minWidth: '100%',
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Mood;