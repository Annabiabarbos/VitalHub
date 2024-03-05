import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../home/Home'
import { Profile } from '../profile/Profile'
import { FontAwesome , FontAwesome5 } from '@expo/vector-icons'


const BottomTab = createBottomTabNavigator()

export const Main = () => {
    return (
        <BottomTab.Navigator

        screenOptions={({route}) =>({
            tabBarStyle:{backgroundColor : "white", height: 80, paddingTop: 10},
            tabBarActiveBackgroundColor: "transparent",
            tabBarShowLabel: false,
            headerShown: false,

            TabBarIcon : ({focused}) =>
            {
                if(route.name === "Home"){
                    return(
                        <>
                        </>
                    )
                }else{
                    
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