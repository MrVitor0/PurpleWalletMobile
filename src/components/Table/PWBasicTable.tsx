import React, { ReactNode, useState } from 'react';
import { View, StyleSheet, ImageBackground, StyleProp, ViewStyle, Pressable } from 'react-native';
import { PPTextRegular } from '../Label/PPText';
import PWBasicButton from '../Button/PWBasicButton'
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
    onPress?: () => void;
    headerLeft?: string;
    headerRight?: string;
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
    onPress,
    headerLeft = 'Histórico',
    headerRight,
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
            shadowColor: shadow ? '#000' : 'transparent',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            opacity: isPressed ? 0.7 : 1,
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginHorizontal: 20,
            marginTop: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
        contentContainer: {
            marginTop: 50,
            flex: 1,
            height: '100%',
            width: '100%',
        },
        headerLeft: {
            fontSize: 16,
            color: '#581C87',
        },
        headerRight: {
            fontSize: 16,
            color: '#000',
        },
        headerBTNText: {
            fontSize: 12,
            paddingHorizontal: 30,
        },
        headerBTN: {
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={[styles.card, style]}>
            {/* Header */}
            <View style={styles.header}>
                <PPTextRegular style={styles.headerLeft}>{headerLeft}</PPTextRegular>
                <PPTextRegular style={styles.headerRight}>
                    <PWBasicButton 
                        size='small'
                        text="Filtrar"
                        style={styles.headerBTN}
                        textStyle={styles.headerBTNText}
                        rounded
                        color="#D9D9D9"
                        textColor="#303030"
                    />
                </PPTextRegular>
            </View>
        
            {/* Content */}
            <Pressable
                style={styles.contentContainer}
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}>
                <View >
                    {backgroundImage ? (
                        <ImageBackground source={{ uri: backgroundImage }} style={{ flex: 1 }}>
                            {children}
                        </ImageBackground>
                    ) : (
                        children
                    )}
                </View>
            </Pressable>
        </View>
    );
};

export default Card;
