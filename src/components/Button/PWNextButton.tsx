import React, { ReactNode, useState } from 'react';
import { Pressable, ViewStyle, StyleProp, StyleSheet } from 'react-native';

interface PWNextButtonProps {
  color?: string;
  size?: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children?: ReactNode;
}

const PWNextButton: React.FC<PWNextButtonProps> = ({
  color = 'blue',
  size = 50,
  width = 50,
  style = {},
  onPress = () => {},
  children,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
  };
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      borderRadius: size / 2,
      width: `${width}%`, 
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: isPressed ? 0.7 : 1,
    },
    text: {
      color: '#fff',
      fontSize: size / 2,
    },
  });
  return (
    <Pressable
      style={[styles.button as ViewStyle, style as ViewStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {children}
    </Pressable>
  );
};

export default PWNextButton;
