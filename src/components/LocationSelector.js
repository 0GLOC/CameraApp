import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import colors from '../utils/colors';

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    preview: {
        width: "100%",
        height: 250,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

const LocationSelector = ({ onLocation }) => {
    const [pickedLocation, setPickedLocation] = React.useState();

    const handleGetLocation = async () => {
        const isLocationGranted = await verifyPermissions();

        if(!isLocationGranted) return

        const location = await Location.getCurrentPositionAsync({
            timeInterval: 5000,
        });

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })

        onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
    }

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                "Permisos Insuficientes",
                "Por favor, habilita la localización para continuar",
                [{ text: "Ok" }]
            );
            return false;
        }

        return true;
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {pickedLocation ? (
                    <Text>{`latitud: ${pickedLocation.lat}, longitud: ${pickedLocation.lng}`}</Text>
                ) : (
                    <Text>Esperando ubicación...</Text>
                )}
            </View>
            <Button title="Obtener ubicación" onPress={handleGetLocation} color={colors.three}/>
        </View>
    )
}

export default LocationSelector;