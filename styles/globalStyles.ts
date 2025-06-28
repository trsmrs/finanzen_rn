import { colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    screenContainer: {
        display: "flex",
        flex: 1,
    },
    content: {
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    input: {
        height: 40,
        padding: 6,
        borderColor: colors.secondaryText,
        borderWidth: 1,
        borderRadius: 8,
        flexGrow: 1
    },
    inputPicker :{
        display: 'flex',
        justifyContent: 'center',
        height: 44,
        borderColor: colors.secondaryText,
        borderWidth: 1,
        borderRadius: 8,
        flexGrow: 1
    },
    inputLabel: {
        fontSize: 16,
        color: colors.primaryText,
        marginBottom: 4
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 44,
        borderRadius: 8,
        backgroundColor: colors.primary
    },
    text: {
        color: colors.primaryContrast,
        fontSize: 18,
        fontWeight: 600
    },

    // Forms
    form: {
        gap: 12,
        marginBottom: 40,
        marginTop: 10
    }
})