import React from 'react';
import { View, StyleSheet, ImageBackground, StyleProp, ViewStyle } from 'react-native';

interface CardProps {
    rounded?: boolean;
    backgroundColor?: string;
    backgroundImage?: string;
    height?: number;
    width?: number;
    shadow?: boolean;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
    rounded = false,
    backgroundColor = '#fff',
    backgroundImage,
    height = 100,
    width = 100,
    style = {},
    shadow = false,
    children,
}) => {
    const styles = StyleSheet.create({
        card: {
            borderRadius: rounded ? 20 : 0,
            backgroundColor: backgroundColor,
            height: height,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: shadow ? "#000" : "transparent",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
    });

    return (
        <View style={[styles.card, style as ViewStyle]}>
            {backgroundImage ? (
                <ImageBackground source={{ uri: backgroundImage }} style={{ flex: 1 }}>
                    {children}
                </ImageBackground>
            ) : (
                children
            )}
        </View>
    );
};

export default Card;