import { StyleSheet } from 'react-native';

const AuthStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
      paddingTop: 40 // Adicione o padding no topo
    },
    gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '30%',
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end', 
      alignItems: 'center',
      paddingBottom: 80
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
    textDateCornerTopStyle: {
      fontSize: 12,
      top: 1,
    },
    formTitle: {
      fontSize: 22,
      color: '#530F7D',
    },
    formSubTitle: {
      fontSize: 12,
      textAlign: 'left',
      color: '#654678',
      marginBottom: 20,
    },
    textInput: {
      borderBottomWidth: 1,
      borderBottomColor: '#654678',
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