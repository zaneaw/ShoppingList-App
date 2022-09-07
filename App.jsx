import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
    const [items, setItems] = useState([
        {text: 'Milk'},
        {text: 'Eggs'},
        {text: 'Bread'},
        {text: 'Juice'},
    ]);

    return (
        <View style={styles.container}>
            <Header title='Shopping List' />
            <FlatList 
                data={items} 
                renderItem={({item}) => <ListItem item={item} />} 
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
