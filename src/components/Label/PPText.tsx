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
        },
    });
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const PPTextRegular: React.FC<PoppinsTextProps> = ({ style, children }) => {
    const styles = StyleSheet.create({
        text: {
            fontFamily: 'Poppins-Regular',
        },
    });
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

export default PPText;
export { PPTextRegular };

