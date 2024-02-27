import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { useAssets } from "expo-asset";
import Tabs from "./js/navigation/Tabs";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";


SplashScreen.preventAutoHideAsync();

// const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

// const assets = (assets) =>
//   assets.map((asset) => {
//     if (typeof asset === "string") {
//       return Image.prefetch(asset); //load images from network
//     } else {
//       return Asset.loadAsync(asset); //load images from local
//     }
//   });

export default function App() { 
  const [appIsReady, setAppIsReady] = useState(false);
  //use this hook when you just want to load assets
  const [assets, error] = useAssets([require("./assets/me.jpg")]); //use this hook to load images from local or network
  const [fontsLoaded, fontError] = useFonts(Entypo.font); //use this hook to load fonts from local or network


  if (assets && fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer >
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          SplashScreen Demo! <Entypo name="rocket" size={20} />
        </Text> */}
      <Tabs />
      {/* </View> */}
    </NavigationContainer>
  );
}
