import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { RouteProp } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Lista from "../../components/lista";

type DashboardRouteProp = RouteProp<StackParamsList, 'Dashboard'>

interface DashboardProps {
    route: DashboardRouteProp;
}

export default function Dashboard({ route }: DashboardProps) {
    const { nomeLista } = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <FontAwesome name="arrow-left" size={30} color="#fff" />
                </TouchableOpacity>
                {/* <Text style={styles.title}>voltar</Text> */}
            </View>
            <Lista titulo={nomeLista} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d2e'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#22272e',
    },
    backButton: {
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});
