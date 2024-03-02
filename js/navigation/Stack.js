import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Two")}>
      <Text>Screen One</Text>
    </TouchableOpacity>
  );
};
const ScreenTwo = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>Screen Two</Text>
    </TouchableOpacity>
  );
};
const ScreenThree = ({ navigation: { setOptions } }) => {
  return (
    <TouchableOpacity onPress={() => setOptions({ title: "Hello World" })}>
      <Text>Change Title</Text>
    </TouchableOpacity>
  );
};

export default function Stack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        animation: "flip",
        presentation: "card",
        headerTintColor: "Tomato",
      }}
    >
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
}
