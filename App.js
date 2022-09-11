import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/HomePage';
import ShortListed from './screens/ShortListed';
import { Ionicons } from "@expo/vector-icons"
import { GlobalStyles } from './style';
const BottomTabs = createBottomTabNavigator();





export default function App()
{

  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer >
        <BottomTabs.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.secondaryColor,
            },
            headerTintColor: GlobalStyles.colors.textColor,
            tabBarStyle: {
              backgroundColor: GlobalStyles.colors.secondaryColor
            },
            tabBarActiveTintColor: GlobalStyles.colors.accentColor
          }}
        >
          <BottomTabs.Screen name='HomePage' component={HomePage}

            options={{
              headerShown: false,
              title: "Home Page",
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) =>
              {
                return <Ionicons name="home" size={size} color={color} />
              }
            }}
          />
          <BottomTabs.Screen name='ShortListed' component={ShortListed} options={{
            title: "Short listed Movie List",
            tabBarLabel: "Short Listed",
            tabBarIcon: ({ color, size }) =>
            {
              return <Ionicons name="bookmarks-outline" size={size} color={color} />
            }
          }} />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}

