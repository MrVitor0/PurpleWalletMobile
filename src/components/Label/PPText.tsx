import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';

interface PoppinsTextProps {
    style?: object;
    children?: React.ReactNode;
}

const PPText: React.FC<PoppinsTextProps> = ({ style, children }) => {
    const styles = StyleSheet.create({
        text: {
            fontFamily: 'Poppins-SemiBold',
            color: 'red',
        },
    });
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

export default PPText;
