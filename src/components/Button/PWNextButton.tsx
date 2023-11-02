import React, { ReactNode } from 'react';
import { TouchableOpacity, ViewStyle, StyleProp, StyleSheet } from 'react-native';

/**
 * for more icons: https://icons.expo.fyi
 */
interface PWNextButtonProps {
    color?: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    children?: ReactNode;
}

const PWNextButton: React.FC<PWNextButtonProps> = ({
    color = 'blue',
    size = 50,
    style = {},
    onPress = () => {},
    children,
}) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: color,
            borderRadius: size / 2,
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            color: '#fff',
            fontSize: size / 2,
        },
    });

    return (
        <TouchableOpacity
            style={[styles.button as ViewStyle, style as ViewStyle]}
            activeOpacity={0.75}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    );
};

export default PWNextButton;
