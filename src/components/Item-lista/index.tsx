import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text'; // Importando o componente TextInputMask

interface Data { key: number, item: string, price: number }

export default function ItemLista({ data, deleteItem, lista, setLista }: { data: Data, deleteItem: () => void, lista: Data[], setLista: React.Dispatch<React.SetStateAction<Data[]>> }) {
  const [checked, setChecked] = useState(false);
  const [price, setPrice] = useState('');

  const handleDeleteItem = () => {
    const updatedList = lista.filter(item => item.key !== data.key);
    setLista(updatedList);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDeleteItem}>
        <FontAwesome name="trash" size={20} color="#22272e" />
      </TouchableOpacity>
      <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text, checked && styles.textChecked]}>{data.item}</Text>
      <TextInputMask
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: ''
        }}
        value={price}
        onChangeText={(text) => setPrice(text)}
        onBlur={() => {
          const newPrice = parseFloat(price.replace('R$', '').replace(',', '.'));
          const updatedList = lista.map(item => {
            if (item.key === data.key) {
              return { ...item, price: newPrice };
            }
            return item;
          });
          setLista(updatedList);
        }}
      />
      <CheckBox
        style={styles.checkbox}
        checked={checked}
        onPress={() => setChecked(!checked)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(196,196,196,0.20)',
    marginTop: 8,
    padding: 2,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginRight: 6
  },
  checkbox: {
    marginRight: 4,
    marginLeft: "auto",
  },
  text: {
    flex: 1,
    marginLeft: 12,
    textAlign: 'left'
  },
  textChecked: {
    textDecorationLine: 'line-through',
  },
  input: {
    width: 65,
    backgroundColor: '#fff',
    height: 28,
    borderRadius: 4,
    paddingHorizontal: 4,
    marginLeft: 12,
    fontSize: 12 
  }
});

