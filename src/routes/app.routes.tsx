import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../pages/Dashboard";
import CriarListas from "../pages/CriarListas";


export type StackParamsList = {
  Dashboard: { nomeLista: string };
  CriarListas: undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CriarListas"
        component={CriarListas}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}

export default AppRoutes;