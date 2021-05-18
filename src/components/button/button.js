import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './buttonStyle'


const Button = (props) => {
    const { onPressButton, buttonText, buttonStyle, buttonTextStyle } = props
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]}
        onPress={onPressButton}>
        <Text style={[styles.buttonText, buttonTextStyle]}> {buttonText}</Text>
      </TouchableOpacity>
    )
}

export default Button