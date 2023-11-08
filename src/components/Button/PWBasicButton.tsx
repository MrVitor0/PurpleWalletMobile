import React, { ReactNode, useState } from 'react';
import { Pressable,  ViewStyle, StyleProp, StyleSheet } from 'react-native';
import PPText from '../Label/PPText';

interface BasicButtonProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: any;
  textColor?: string;
  onPress?: () => void;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  color = '#581C87',
  size = 'small',
  rounded = false,
  text = 'Button',
  style = {},
  textStyle = {},
  textColor = '#fff',
  onPress = () => {}
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonStyle = StyleSheet.create({
    button: {
      backgroundColor: color,
      borderRadius: rounded ? 50 : 0,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: getHeightForButton(size),
      opacity: isPressed ? 0.7 : 1,
    },
    text: {
      color: textColor,
      fontSize: getFontSizeForButton(size),
    },
  });

  return (
    <Pressable
      style={[buttonStyle.button as ViewStyle, style as ViewStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <PPText style={buttonStyle.text}>
        {text}
      </PPText>
    </Pressable>
  );
};

const getHeightForButton = (size: 'small' | 'medium' | 'large') => ({
  small: 40,
  medium: 50,
  large: 70,
})[size];

const getFontSizeForButton = (size: 'small' | 'medium' | 'large') => ({
  small: 14,
  medium: 20,
  large: 25,
})[size];

export default BasicButton;
