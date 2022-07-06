import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PlaceNavigator from "./PlaceNavigator";
import { StatusBar } from "react-native";
import colors from "../utils/colors";

export default () => (
    <NavigationContainer>
        <StatusBar backgroundColor={colors.three}/>
        <PlaceNavigator/>
    </NavigationContainer>
)