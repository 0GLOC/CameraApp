import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const NewPlaceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>MapScreen</Text>
        </View>
    );
};

export default NewPlaceScreen;