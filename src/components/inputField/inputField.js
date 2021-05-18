import React from 'react';
import { TextInput } from 'react-native';
import styles from './inputFieldStyle'
import { colors } from '../../theme'


const InputField = (props) => {
    const { onChangeText, placeholder, value, keyboardType, style, isError } = props
    return (
        <TextInput
            style={[styles.textInputView ,style, isError && !value && styles.errorStyle]}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            placeholderTextColor={colors.lightgrey} 
            placeholder={placeholder}>
        </TextInput>
    )
}

export default InputField