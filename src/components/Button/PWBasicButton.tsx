import React from 'react';
import { TouchableOpacity, Text, ViewStyle, StyleProp } from 'react-native';

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
  size = 'medium',
  rounded = false,
  text = 'Button',
  style = {}, 
  textStyle = {},
  textColor = '#fff',
  onPress = () => {}
}) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: color,
    borderRadius: rounded ? 50 : 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonTextStyle = {
    color: textColor,
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

  return (
    <TouchableOpacity 
      style={[buttonStyle as ViewStyle, { height: getHeightForButton(size) }, style]} 
      onPress={onPress}
      activeOpacity={0.98}
    >
      <Text style={[buttonTextStyle as ViewStyle,  { fontSize: getFontSizeForButton(size) }, textStyle  ]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BasicButton;
