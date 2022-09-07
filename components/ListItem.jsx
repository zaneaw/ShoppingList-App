import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ListItem({item}) {
  return (
    <TouchableOpacity style={styles.listItem}>
        <Text style={styles.text}>{item.text}</Text>
        <Icon name="trash-2" size={20} color='firebrick' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#'
    },
    text: {
    },
});
