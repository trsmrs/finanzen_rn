
import { globalStyles } from "@/styles/globalStyles";
import { Text, TouchableHighlight } from "react-native";

type TransationsAdd = {
    children: string;
    onPress : () => void;
}

export function AddTransationButton({children, onPress}: TransationsAdd){
    return(
        <TouchableHighlight style={globalStyles.button} onPress={onPress}>
            <Text style={globalStyles.text}>{children}</Text>
        </TouchableHighlight>
    )
}