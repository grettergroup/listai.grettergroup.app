import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

interface NovaListaProps {
    nome: string;
    onRemove: () => void;
}

export default function NovaLista({ nome, onRemove }: NovaListaProps) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{nome}</Text>
            <TouchableOpacity onPress={onRemove}>
                <FontAwesome name="trash" size={20} color="#1D1D2E" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 4,
        marginTop: 14
    },
    itemText: {
        fontSize: 18,
    },
});
