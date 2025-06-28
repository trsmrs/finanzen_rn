import { colors } from "@/constants/Colors";
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";



export default function TabsLayout() {
    const { height: screenHeight } = Dimensions.get('window');
    

    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: colors.primary },
                headerTintColor: colors.primaryContrast,
                headerTitleAlign: 'center',
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.inactive,
                tabBarStyle: {
                    height: screenHeight * 0.1 + 10,
                    paddingTop: 5,
                    backgroundColor: colors.background
                },
                tabBarButton: (props) => <TouchableOpacity  {...props} activeOpacity={0.8}/>
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "Transações",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="attach-money" size={28} color={color} />)
            }} />

            <Tabs.Screen name="add-transactions" options={{
                title: "Adicionar Transação",
                tabBarLabel: "",
                tabBarIcon: () => (
                    <View style={styles.addButton}>
                        <MaterialIcons name="add" size={40} color={colors.primaryContrast} />
                    </View>
                )
            }} />

            <Tabs.Screen name="summary" options={{
                title: "Resumo",
                tabBarIcon: ({ color }) => (<Feather name="pie-chart" size={28} color={color} />)
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    addButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 64,
        width: 64,
        borderRadius: 32,
        backgroundColor: colors.primary
    }
})