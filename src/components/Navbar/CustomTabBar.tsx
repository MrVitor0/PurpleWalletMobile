import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
function MyTabBar({ state, descriptors, navigation }) {
    const tabBarStyles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: 60,
            width: '50%', 
            alignSelf: 'center', 
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
            borderRadius: 30,
            bottom: 30,
        },
        tabBarHolder: {
            backgroundColor: 'transparent', 
            position: 'absolute', 
            left: 0, 
            bottom: 0, 
            right: 0
        },
        ItemContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        selectedBar: {
            backgroundColor: '#EBEBEB',
            borderRadius: 20,
            padding: 5,
        }
    });
    const allowedRoutes = ['Homepage', 'BankAccount'];
    return (
        <View style={tabBarStyles.tabBarHolder}>
            <View style={tabBarStyles.container}>
            {state.routes.map((route, index) => {
                if (!allowedRoutes.includes(route.name)) {
                    return null;
                }

                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const labelIcon = (label) => {
                    switch (label) {
                        case 'Homepage':
                            return 'menu-open'
                        case 'BankAccount':
                            return 'bank-transfer'
                        default:
                            return 'home-analytics'
                            break;
                    }
                }
                return (
                    <Pressable
                        key={index}
                        onPress={onPress}
                        style={tabBarStyles.ItemContainer}
                    >
                        {/* <Text >
                            {label}
                        </Text> */}
                        <View style={isFocused ? tabBarStyles.selectedBar : {}}  >
                         <MaterialCommunityIcons name={labelIcon(label) as any} size={40} color="#581C87" />
                        </View>
                       
                    </Pressable>
                );
            })}
            </View>
        </View>
    );
}

export default MyTabBar;