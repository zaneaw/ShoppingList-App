import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';

export default function ListItem({item, deleteItem, checkItemsHandler}) {
  return (
    <View style={[styles.listItem, item.checked && styles.listItemContainerChecked]}>
        <View style={styles.checkboxText}>
            <CheckBox
                boxType={"square"}
                disabled={false}
                value={item.checked}
                onValueChange={() => {
                  checkItemsHandler(item.id);
                }}
                style={styles.checkbox}
            />
            <Text style={[styles.listText, item.checked && styles.listItemTextChecked]}>{item.text}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Icon name="trash-2" size={24} color='firebrick' />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    checkboxText: {
        display: 'flex',
        flexDirection: 'row',
    },
    listItem: {
        paddingLeft: 35,
        paddingRight: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemContainerChecked: {
        backgroundColor: 'lightgray',
    },
    listItemTextChecked: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: '#6b7280',
    },
    listText: {
        fontSize: 18,
        paddingLeft: 20,
    },
    checkbox: {
        height: 20,
        width: 20,
    },
});
