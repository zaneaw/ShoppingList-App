import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ItemInput({addItem, addItemText, setAddItemText}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setAddItemText}
                value={addItemText}
                placeholder={'Add items...'}
                onSubmitEditing={() => addItem(addItemText)}
            />
            <TouchableOpacity style={styles.addItemContainer} onPress={() => addItem(addItemText)}>
                <Icon style={styles.addItemIcon} name="plus" size={24} color='darkgray' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        fontSize: 18,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 10,
        
    },
    addItemContainer: {
        position: 'absolute',
        right: 20,
        top: 12,
    },
});
