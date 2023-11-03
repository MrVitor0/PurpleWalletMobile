
import React from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  PWBasicButton  from '../Button/PWBasicButton';
import { AuthStyles } from '../../styles/sharedStyles';



const AuthHeader = () => {
    const navigation = useNavigation();
    
    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={AuthStyles.buttonGroupContainer}>
            <View style={AuthStyles.topLeftButtonContainer}>
                <MaterialCommunityIcons
                name="arrow-left"
                color="#303030"
                size={20}
                onPress={() => goBack()}
                />
            </View>
            <View style={AuthStyles.topRightButtonContainer}>
                <PWBasicButton
                    style={AuthStyles.buttonCornerTopRight}
                    textStyle={AuthStyles.textCornerTopStyle}
                    text="Português"
                    rounded
                    color="#fff"
                    textColor="#303030"
                    onPress={() => {}}
                />
            </View>
        </View>
    );
}

export default AuthHeader;
