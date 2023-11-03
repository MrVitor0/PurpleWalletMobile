import { StyleSheet } from 'react-native';

const AuthStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBEBEB',
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
      marginHorizontal: 20,
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
    alignItems: {
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

const DashboardHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#581C87',
    paddingTop: 60, // Adicione o padding no topo
    paddingBottom: 10, // Adicione o padding no rodapé
    paddingHorizontal: 10, // Adicione o padding horizontal
  },
  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPicture: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  userNameLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
  },
  iconStyle: {
    marginRight: 10,
  },
});


export { AuthStyles, DashboardHeaderStyles } 