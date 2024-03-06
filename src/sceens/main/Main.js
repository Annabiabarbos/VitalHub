import { Home } from '../home/Home'
import { Profile } from '../profile/Profile'
import { ContentIcon, TextIcon } from './Style'

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const BottomTab = createBottomTabNavigator()

export const Main = () => {
    return (
        <BottomTab.Navigator

            initialRouteName="Home"

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "white", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,


                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name="calendar" size={24} color="black" />
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    }
                    else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name="user-circle" size={24} color="black" />
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )
                    }
                }
            })}
        >

            <BottomTab.Screen
                name="Home"
                component={Home}
            />

            <BottomTab.Screen
                name="Profile"
                component={Profile}
            />


        </BottomTab.Navigator>
    )
}