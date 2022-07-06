import React, { useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import ImageSelector from "../components/ImageSelector";
import { addPlace } from "../store/place.slices";
import colors from "../utils/colors";

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const handleTitleChange = (text) => setTitle(text);
    const handleSave = () => {
        dispatch(addPlace(title));
        navigation.navigate('Place')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Titulo</Text>
                <TextInput 
                style={styles.input}
                value={title}
                onChangeText={handleTitleChange}
                />
                <ImageSelector
                    onImage={(image) => {
                        console.log(image);
                    }}
                />
                <Button 
                title="Grabar Dirección" 
                color={colors.five} 
                onPress={() => handleSave()} 
                />
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