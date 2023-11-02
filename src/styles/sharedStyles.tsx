import { StyleSheet } from 'react-native';

const AuthStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D9D9D9',
    },
    gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '30%',
    },
    buttonContainer: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      marginBottom: 60,
      marginRight: 20,
    },
    buttonGroupContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
    },
    topLeftButtonContainer: {
      position: 'absolute',
      left: 0,
      top: 0,
      marginTop: 60,
    },
    topRightButtonContainer: {
      position: 'absolute',
      right: 0,
      top: 0,
      marginTop: 60,
    },
    centerTextContainer: {
      flex: 1,
      top: 100,
      margin: 20,
    },
    buttonCornerTopRight: {
      width: 100,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textCornerTopStyle: {
      fontSize: 12,
    },
    formTitle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    formSubTitle: {
      fontSize: 10,
      textAlign: 'left',
      color: '#303030',
      marginBottom: 20,
    },
    textInput: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(48, 48, 48, 0.2)',
      fontSize: 16,
      marginBottom: 20,
    },
    buttonIcon: {
      color: 'white',
      size: 40,
    },
});


export { AuthStyles } 