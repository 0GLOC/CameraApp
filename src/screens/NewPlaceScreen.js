import React from "react";
import { StyleSheet, Text, TextInput, ScrollView, View, Button } from "react-native";
import colors from "../utils/colors";

const NewPlaceScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Titulo</Text>
                <TextInput style={styles.input}/>
                <Button title="Grabar Dirección" color={colors.four} onPress={() => null} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        margin: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        borderBottomColor: colors.three,
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 5,
    },
});

export default NewPlaceScreen;