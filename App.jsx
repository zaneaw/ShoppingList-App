import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import ItemInput from './components/ItemInput';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';

const App = () => {
    const [addItemText, setAddItemText] = useState('');
    const [items, setItems] = useState([
        {id: uuid.v4(), text: 'Eggs'},
        {id: uuid.v4(), text: 'Milk'},
        {id: uuid.v4(), text: 'Bread'},
        {id: uuid.v4(), text: 'Juice'},
    ]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        })
    }

    const addItem = (inputText) => {
        if (inputText.length > 1) {
                setItems(prevItems => {
                return [...prevItems, {id: uuid.v4(), text: inputText}]
            })
            setAddItemText('');

        } else {
            Alert.alert(
                "Error Adding Item",
                "Item length is too short, please try adding more information.",
                [{
                    cancelable: true,
                    text: 'Ok',
                    onPress: () => {},
                }]
            )
        }
        
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeView}>
                    <Header title='Shopping List' />
                </SafeAreaView>
                <ItemInput addItem={addItem} addItemText={addItemText} setAddItemText={setAddItemText} />
                <FlatList
                    style={styles.listView} 
                    data={items} 
                    renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} 
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    safeView: {
        backgroundColor: 'cornflowerblue',
    },
    listView: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },
});

export default App;
