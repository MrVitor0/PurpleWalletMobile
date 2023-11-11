import React, { ReactNode, useState } from 'react';
import { View, StyleSheet, ImageBackground, StyleProp, ViewStyle, Pressable } from 'react-native';

interface CardProps {
    rounded?: boolean;
    backgroundColor?: string;
    backgroundImage?: string;
    height?: number;
    width?: number;
    shadow?: boolean;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    onPress?: () => void; // nova propriedade
}

const Card: React.FC<CardProps> = ({
    rounded = false,
    backgroundColor = '#fff',
    backgroundImage,
    height = 80,
    width = 100,
    style = {},
    containerStyle = {},
    shadow = false,
    children,
    onPress, // nova propriedade
}) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };

    
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
            opacity: isPressed ? 0.7 : 1,
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
    });

    return (
        <View style={[styles.card, style]}>
            <Pressable  
                style={containerStyle}
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}>
                    {backgroundImage ? (
                        <ImageBackground source={{ uri: backgroundImage }} style={{ flex: 1 }}>
                            {children}
                        </ImageBackground>
                    ) : (
                        children
                    )}
            </Pressable>
        </View>
    );
};

export default Card;