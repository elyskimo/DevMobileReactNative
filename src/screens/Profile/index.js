import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
    return (
        <View>
            <Text style={styles.text}>Profile component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'green',
        marginTop: 20,
        fontSize: 20,
        fontFamily: 'Arial',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Profile;