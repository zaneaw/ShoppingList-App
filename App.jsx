import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import ItemInput from './components/ItemInput';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';
import RemoveChecked from './components/RemoveChecked';

const App = () => {
  const [addItemText, setAddItemText] = useState('');
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Eggs', checked: false},
    {id: uuid.v4(), text: 'Milk', checked: false},
    {id: uuid.v4(), text: 'Bread', checked: false},
    {id: uuid.v4(), text: 'Juice', checked: false},
    {id: uuid.v4(), text: 'Cookies', checked: false},
    {id: uuid.v4(), text: 'Beer', checked: false},
    {id: uuid.v4(), text: 'Italian Seasoning', checked: false},
    {id: uuid.v4(), text: 'Pizza', checked: false},
    {id: uuid.v4(), text: 'Pears', checked: false},
    {id: uuid.v4(), text: 'Apples', checked: false},
    {id: uuid.v4(), text: 'Asparagus', checked: false},
    {id: uuid.v4(), text: 'Corn', checked: false},
    {id: uuid.v4(), text: 'Pineapple', checked: false},
    {id: uuid.v4(), text: 'Pickles', checked: false},
    {id: uuid.v4(), text: 'Brussel Sprouts', checked: false},
    {id: uuid.v4(), text: 'Breakfast Sandwiches', checked: false},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const checkItemsHandler = itemId => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return {...item, checked: !item.checked};
      } else {
        return item;
      }
    });

    return setItems(updatedItems);
  };

  const deleteCheckedItems = () => {
    setItems(prevItems => {
      return prevItems.filter(item => item.checked !== true);
    });
  };

  const addItem = inputText => {
    if (inputText.length > 1) {
      setItems(prevItems => {
        return [...prevItems, {id: uuid.v4(), text: inputText, checked: false}];
      });
      setAddItemText('');
    } else {
      Alert.alert(
        'Error Adding Item',
        'Item length is too short, please try adding more information.',
        [
          {
            cancelable: true,
            text: 'Ok',
            onPress: () => {},
          },
        ],
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.safeView}>
          <Header title="Shopping List" />
        </SafeAreaView>
        <ItemInput
          addItem={addItem}
          addItemText={addItemText}
          setAddItemText={setAddItemText}
        />
        <FlatList
          style={styles.listView}
          data={items}
          renderItem={({item}) => {
            return (
              <ListItem
                item={item}
                deleteItem={deleteItem}
                checkItemsHandler={checkItemsHandler}
              />
            );
          }}
        />
        <RemoveChecked
          style={styles.removeCheckedButton}
          deleteCheckedItems={deleteCheckedItems}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
