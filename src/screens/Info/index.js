import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Info = () => {
    return (
        <View>
            <Text style={styles.text}>Info component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        marginTop: 20,
        fontSize: 20,
        fontFamily: 'Arial',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Info;