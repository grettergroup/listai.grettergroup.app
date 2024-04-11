import React, { useContext } from "react";

import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";

import AuthRoutes from "./auth.routes";
import { AuthContext } from "../context/AuthContext";



function Routes() {
    const { isAuthenticated, loading } = useContext(AuthContext);
    // const isAuthenticated = false
    // const loading = false
    if (loading) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#1D1D2E',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size={60} color="#fff" />
            </View>
        )
    }
    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;