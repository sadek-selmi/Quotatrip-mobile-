import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Button,ImageBackground} from 'react-native';
import { Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.quotatrip.com/assets/cimages/logo_qt_1000.png',
        }}
      />
         <Image
       
        source={require('././assets/Spin-1s-200px.gif')}
      />
        <Button 
        title="Click here to visit our website"
        
        onPress={() => Linking.openURL('https://www.quotatrip.com/')}
      />
 
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#ACD6F6',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  tinyLogo: {
    width: 180,
    height: 60,
  },
 
});
