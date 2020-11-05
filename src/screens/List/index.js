import React from 'react';
import {Button, ScrollView, StyleSheet, View, TouchableOpacity, Overlay} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MOODS from '@config/store';
import Mood from "@components/Mood";
import {getItems, setItems} from "@config/store";

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moods: [],
            displayAdd: true,
        }

    }

    async componentDidMount() {
        const moodsInit = [
            {id:1,mood:5,title:"Parfait"},
        ];
        // await setItems('@moods',moodsInit);
        const storedMoods = await getItems('@moods');
        console.log(storedMoods);
        this.setState('moods',storedMoods);
    }

    _addMood() {
        const { moods } = this.state;
        const updatedMoods = [
            ...moods,
            {
                id: moods.length,
                mood: 1,
                title: 'Mal'
            }
        ];

        setItems('@moods',updatedMoods);
        this.setState({
            displayAdd: false,
            moods: updatedMoods
        })

    }

    render() {
        const { moods, displayAdd } = this.state;
        const moodFaces = [
            {id:1,mood:5,title:"Parfait",face:":D"},
            {id:2,mood:4,title:"Bien",face:":)"},
            {id:3,mood:3,title:"Normal",face:":|"},
            {id:4,mood:2,title:"Pas bien",face:":/"},
            {id:5,mood:1,title:"Mal",face:":("}
        ];

        const addMood = (key) => {
            console.log(moods[key],moodsTmp[0]);
            if (!moodsTmp.indexOf(moods[key])) {
                moodsTmp.push(moods[key]);
            }
        };

        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.moods}>
                {
                    moods.map(mood => (
                        <Mood key={mood.id.toString()} mood={mood.mood} title={mood.title}/>
                    ))
                }
                </ScrollView>
                <View style={styles.overlay}>
                    {displayAdd && (
                        <View style={styles.faces}>
                            {
                                moodFaces.map((face,key) => (
                                    <Button
                                        onPress={() => {this.setState({
                                                moods: [
                                                    ...moods,
                                                    {
                                                        id: moods.length + 1,
                                                        mood: face.mood,
                                                        title: face.title,
                                                    }
                                                ]
                                            });
                                        }}
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
                        onPress={() => this.setState({displayAdd: !displayAdd})}
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

export default List;