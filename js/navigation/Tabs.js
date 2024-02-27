import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Movies from "../screens/Movies";
import { Text, View } from "react-native";
import { useColorScheme } from "react-native";
import { DARK, DARK_GRAY, GRAY, LIGHT, YELLOW } from "../styles/color";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? DARK : LIGHT,
        },
        tabBarActiveTintColor: isDark ? YELLOW : DARK,
        tabBarInactiveTintColor: isDark ? GRAY : DARK_GRAY,
        headerStyle: {
          backgroundColor: isDark ? DARK : LIGHT,
        },
        headerTitleStyle: {
          color: isDark ? GRAY : DARK,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          marginTop: -5,  
          fontSize: 12,
          fontWeight: "bold",
        }
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="film" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="tv-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="search" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
