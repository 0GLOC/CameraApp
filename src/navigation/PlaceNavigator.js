import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceListScreen from "../screens/PlaceListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const PlaceNavigator = () => (
    <Stack.Navigator
        initialRouteName="Place"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? colors.three : colors.four,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen 
            name="Place" 
            component={PlaceListScreen} 
            options={{ title: 'Direcciones' }}
            />
            <Stack.Screen 
            name="PlaceDetail" 
            component={PlaceDetailScreen} 
            options={{ title: 'Detalle de Dirección' }}
            />
            <Stack.Screen 
            name="NewPlace" 
            component={NewPlaceScreen} 
            options={{ title: 'Nueva Dirección' }}
            />
            <Stack.Screen 
            name="Map" 
            component={MapScreen} 
            options={{ title: 'Mapa' }}
            />
    </Stack.Navigator>
)

export default PlaceNavigator;
