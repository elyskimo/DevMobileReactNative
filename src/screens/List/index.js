import React, { useState } from 'react';
import {Button, ScrollView, StyleSheet, View, TouchableOpacity, Overlay} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mood from "@components/Mood";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMood, removeMood } from "@redux/moods/actions";

const List = (props) => {
    const { addMood, moods } = props;
    const [displayAdd, setDisplayAdd] = useState(false);

    const _addMood = (item) => {
      addMood(item);
    }

    const moodFaces = [
        {id:1,mood:5,title:"Parfait",face:":D"},
        {id:2,mood:4,title:"Bien",face:":)"},
        {id:3,mood:3,title:"Normal",face:":|"},
        {id:4,mood:2,title:"Pas bien",face:":/"},
        {id:5,mood:1,title:"Mal",face:":("}
    ];
    console.log('mooods',moods);
    // _addMood({id:1,mood:5,title:"Parfait",face:":D"});
    // return false
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.moods}>
            {
                moods.map(mood => (
                    <Mood
                        // key={mood.id.toString()}
                        id={mood.id} mood={mood.mood}
                        title={mood.title}
                    />
                ))
            }
            </ScrollView>
            <View style={styles.overlay}>
                {displayAdd && (
                    <View style={styles.faces}>
                        {
                            moodFaces.map((face,key) => (
                                <Button
                                    onPress={() => _addMood(face)}
                                    title={face.face}
                                    key={key}
                                    style={styles.buttonFace}
                                />
                            ))
                        }
                    </View>
                )}
                <TouchableOpacity
                    style={styles.roundButton}
                    onPress={() => setDisplayAdd(!displayAdd)}
                >
                    <Icon name={displayAdd ? "minus" : "plus"}
                          size={25}
                          color="#f194ff"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        minWidth: '1OO%'
    },
    button: {
        flex: 1,
        minHeight: 30,
    },
    // overlay: {
    //     width: '100%',
    //     height: 100,
    // },
    roundButton: {
        borderWidth:1,
        // flex: 1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        marginBottom: 10,
        backgroundColor:'#fff',
        borderRadius:100,
        zIndex: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
        position: 'absolute',
        left: 10,
        bottom: 0,
        // width: '100%',
        // height: '100%'
    },
    buttonFace: {
        // flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        zIndex: 5,
    },
    faces: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // width: '100%',
        alignSelf: 'stretch',
        // alignItems: 'center',
        justifyContent: 'center'
    },
    moods: {
        minWidth: '100%',
        alignItems: 'flex-start',
    },
    // text: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     color: 'red',
    //     height: '100%',
    //     marginTop: 20,
    //     fontSize: 20,
    //     fontFamily: 'Arial',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});

const mapStateToProps = (state) => ({
    moods: state.moods.moods,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            addMood,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(List);