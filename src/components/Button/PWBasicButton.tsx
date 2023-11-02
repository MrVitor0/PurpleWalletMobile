import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle } from 'react-native';

interface BasicButtonProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  text?: string;
  onPress?: () => void;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  color = '#581C87',
  size = 'medium',
  rounded = false,
  text = 'Button',
  onPress = () => {}
}) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: color,
    borderRadius: rounded ? 10 : 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonTextStyle = {
    color: '#fff',
    fontSize: 16,
  };

  const styles = StyleSheet.create({
    small: {
      height: 40,
    },
    medium: {
      height: 50,
    },
    large: {
      height: 70,
    },
  });

  return (
    <TouchableOpacity style={[buttonStyle as ViewStyle, styles[size]]} onPress={onPress}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};


export default BasicButton;
