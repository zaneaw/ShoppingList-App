import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'cornflowerblue',
        paddingTop: 5,
        paddingBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        fontSize: 26,
        width: '100%',
    },
    addItemContainer: {
        position: 'absolute',
        right: 20,
    },
    addItemIcon: {
    },
    input: {
        backgroundColor: 'red',
        flex: 1,
        width: '100%',
    },
});

export default Header;
