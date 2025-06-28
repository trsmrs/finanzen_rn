import { AddTransationButton } from "@/components/buttons/ButtonAddTransations";
import { categories } from "@/constants/Category";
import { globalStyles } from "@/styles/globalStyles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Alert, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

type ValuesProps = {
    description: string;
    value: number;
    date: Date;
    category: string;
}


export default function AddTransacrions() {
    const [showPicker, setShowPicker] = useState(false)

    const initialForm: ValuesProps = {
        description: "",
        value: 0,
        date: new Date(),
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)

    function handleAdd() {
        Alert.alert(`
            ${form.description} 
                | ${form.date} 
               | ${form.value}
               | ${form.category}
            `)
    }

    function handleCurrency(_value: string) {
        const formattedValue = _value.replace(/\D/g, "")
        const numberValueFromated = formattedValue ? (parseFloat(formattedValue) / 100) : 0
        setForm({ ...form, value: numberValueFromated })
    }


    function handleDateChange(_: any, selectDate: any) {
        setShowPicker(!showPicker)
        if (selectDate) {
            setForm({ ...form, date: selectDate })
        }
    }

    return (
        <View style={globalStyles.screenContainer}>
            <ScrollView style={globalStyles.content}>
                <View style={globalStyles.form}>

                    <View>
                        <Text style={globalStyles.inputLabel}>Descrição</Text>
                        <TextInput style={globalStyles.input}
                            value={form.description}
                            onChangeText={(text) => setForm({ ...form, description: text })}
                        />
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Valor</Text>
                        <TextInput style={globalStyles.input}
                            keyboardType="numeric"
                            value={form.value.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}
                            onChangeText={handleCurrency}
                        />
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Data</Text>
                        <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>

                            <TextInput style={globalStyles.input}
                                value={form.date.toLocaleString("pt-BR", {
                                    dateStyle: 'short',
                                    timeStyle: 'short'
                                })}
                                editable={false}
                                onChangeText={(text) => setForm({ ...form, date: text })}
                            />
                        </TouchableOpacity>
                        {showPicker && (
                            <DateTimePicker
                                mode="date"
                                display={Platform.OS === "ios" ? "inline" : "default"}
                                value={form.date}
                                onChange={handleDateChange}
                            />
                        )}
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Categoria</Text>
                        {/* <TextInput style={globalStyles.input}
                            value={form.category}
                            onChangeText={(text) => setForm({ ...form, category: text })}
                        /> */}
                        <View style={globalStyles.inputPicker}>

                            <Picker 
                                selectedValue={form.category}
                                onValueChange={(itemValue) => setForm({ ...form, category: itemValue })}
                            >
                                <Picker.Item
                                    label={categories.income.displayName}
                                    value={categories.income.name}
                                />
                                <Picker.Item
                                    label={categories.food.displayName}
                                    value={categories.food.name}
                                />
                                <Picker.Item
                                    label={categories.house.displayName}
                                    value={categories.house.name}
                                />
                                <Picker.Item
                                    label={categories.education.displayName}
                                    value={categories.education.name}
                                />
                                <Picker.Item
                                    label={categories.travel.displayName}
                                    value={categories.travel.name}
                                />

                            </Picker>
                        </View>
                    </View>
                </View>
                <View>
                    <AddTransationButton children={"Adicionar"} onPress={handleAdd} />
                </View>
            </ScrollView>
        </View>

    )
}