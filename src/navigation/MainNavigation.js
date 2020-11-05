import React from "react";
import {StatusBar, Text, View, TouchableOpacity, Image, StyleSheet} from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import List from "@screens/List";
import Info from "@screens/Info";
import Profile from "@screens/Profile";
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const StackProfile = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabsNavigation = () => (
    <Tabs.Navigator
        initialRouteName="Main"
        tabBarOptions={{
            activeBackgroundColor: "#fff",
            inactiveBackgroundColor: "#fff",
            showLabel: true,
            showIcon: true,
            activeTintColor: "green",
            inactiveTintColor: "#828282",
        }}
        tabStyle={{
            flexDirection: "row",
        }}
    >
        <Tabs.Screen
            name="Main"
            component={List}
            options={{
                title: "Moods",
            }}
            listeners={({ navigation }) => ({
                tabPress: () => {
                    navigation.navigate("Main");
                },
            })}
        />
        <Tabs.Screen
            name="Info"
            component={Info}
            options={{
                title: "Info",
            }}
            listeners={({ navigation }) => ({
                tabPress: () => {
                    navigation.navigate("Info");
                },
            })}
        />
    </Tabs.Navigator>
);

const StackNavigation = () => (
    <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
            name="Main"
            component={TabsNavigation}
            options={({ navigation }) => ({
                headerTitle: null,
                headerLeft: () => (
                    <TouchableOpacity
                        // style={styles.roundButton}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Icon name={"bars"}
                              size={25}
                              color="#000"
                              style={{
                                  marginHorizontal: 10,
                              }}
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <Text style={styles.title}>MrMood.</Text>
                ),
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            })}
        />
    </Stack.Navigator>
);

const StackProfileNavigation = () => (
    <StackProfile.Navigator initialRouteName="Profile">
        <StackProfile.Screen
            name="Profile"
            component={Profile}
            options={({ navigation }) => ({
                headerTitle: null,
                headerLeft: () => (
                    <TouchableOpacity
                        // style={styles.roundButton}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Icon name={"bars"}
                              size={25}
                              color="#000"
                              style={{
                                  marginHorizontal: 10,
                              }}
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <Text style={styles.title}>MrMood.</Text>
                ),
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            })}
        />
    </StackProfile.Navigator>
);

const MainNavigation = () => (
    <NavigationContainer>
        <StatusBar
            hidden={false}
            backgroundColor="transparent"
            barStyle="dark-content"
        />
        <Drawer.Navigator initialRouteName="Home"
                             // screenOptions={{
                             //     headerStyle: {
                             //         backgroundColor: '#f4511e',
                             //     },
                             //     headerTintColor: '#fff',
                             //     headerTitleStyle: {
                             //         fontWeight: 'bold',
                             //         alignItems: 'end',
                             //     },
                             // }}
        >
            <Drawer.Screen
                name="Home"
                component={StackNavigation}
            />
            <Drawer.Screen
                name="Profile"
                component={StackProfileNavigation}
            />

        </Drawer.Navigator>
    </NavigationContainer>
);

// options={{
//     headerTitle: null,
//         headerLeft: (props) => (
//         <TouchableOpacity
//             // style={styles.roundButton}
//             onPress={() => props.navigation.openDrawer()}
//         >
//             <Icon name={"bars"}
//                   size={25}
//                   color="#fff"
//                   style={{
//                       marginHorizontal: 10,
//                   }}
//             />
//         </TouchableOpacity>
//     ),
//         headerRight: () => (
//         <Text>MrMood</Text>
//     ),
// }}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginRight: 20,
    },
    logo: {
        marginLeft: 20,
        width: 28,
        height: 28,
    },
});

export default MainNavigation;