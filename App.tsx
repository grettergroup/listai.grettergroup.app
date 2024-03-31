import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent, TextInput, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import ItemLista, { Data } from './src/components/Item-lista';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<Data[]>([]);

  function handleAdd() {
    if (item.trim() === '') {
      alert('Informe um item para sua lista!');
      return;
    }
    const newItem: Data = {
      key: Date.now(),
      item: item,
      price: 0,
    };
    setLista([...lista, newItem]);
    setItem('');
  }

  function handleDelete(itemKey: number) {
    setLista(lista.filter(item => item.key !== itemKey));
  }

  function calcularTotal(lista: Data[]) {
    let total = 0;
    lista.forEach(item => {
      total += parseFloat(item.price) || 0;
    });
    return total;
  }

  function formatarMoeda(valor: number | string) {
    const valorNumerico = parseFloat(valor.toString());
    return 'R$ ' + valorNumerico.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder='Nome do produto'
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <ItemLista data={item} deleteItem={() => handleDelete(item.key)} lista={lista} setLista={setLista} />
        )}
        style={styles.lista}
      />
      <Text style={styles.total}>Total: {formatarMoeda(calcularTotal(lista))}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginTop: '5%',
    padding: '5%',
    marginBottom: 12,
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  buttonAdd: {
    width: 50,
    height: 44,
    backgroundColor: '#73f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  lista: {
    backgroundColor: '#fff',
    paddingStart: '4%',
    paddingEnd: '4%',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#fff',
    padding: 8,
    width: '100%', // Ajuste para garantir que o componente tenha 100% de largura
  },
});
