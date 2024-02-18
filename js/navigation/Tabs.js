import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Movies from "../screens/Movies";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Search" screenOptions={{tabBarActiveTintColor: "red"}} >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" options={{tabBarBadge: 5 }} component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
