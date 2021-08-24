import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar= () =>{
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Todo List</Text>
        </View>  
    );   
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 60,
        backgroundColor: '#27AE60',
        paddingBottom: 8,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18
    }
})