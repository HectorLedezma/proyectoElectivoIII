import { View, Text,ImageBackground, StyleSheet} from "react-native";
import fondo from '../images/fondo.png';
const MainPage = () => {
    return(
        <View style={styles.container}>
            <ImageBackground 
              source={fondo} 
              resizeMode="cover" 
              style={styles.image}
            >
              <Text>Hola</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      height:'100vh',
      width:'100vw'
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });

export default MainPage