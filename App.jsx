import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const App = () => {
    const [items, setItems] = useState([
        {id: uuidv4(), text: 'Milk'},
        {id: uuidv4(), text: 'Eggs'},
        {id: uuidv4(), text: 'Bread'},
        {id: uuidv4(), text: 'Juice'},
    ]);

    return (
        <View style={styles.container}>
            <Header title='Shopping List' />
            <FlatList 
                data={items} 
                renderItem={({item}) => <Text>{item.text}</Text>} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },
});

export default App;
