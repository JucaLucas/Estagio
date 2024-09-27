import { Button, Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SOS() {
  return (
    <View style={styles.view}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <LinearGradient
        colors={['#E13E6E', '#F7CED4A6']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}>
          
    <TouchableOpacity style={{width:'100%'}}>
        <Image source={require('../assets/menu.png')} style={styles.imageMenu} />
        </TouchableOpacity>
        <TouchableOpacity style={{width:'100%',alignItems:'center',position:'absolute'}}>
        <Image source={require('../assets/setaBaixo.png')} style={styles.imageSetaBaixo} />
        </TouchableOpacity>

        <Image source={require('../assets/viva.png')} style={styles.image} />
        <View style={styles.esfera}>
        </View>
        <TouchableOpacity style={{position:'relative', justifyContent:'center', marginTop:'25%', height:'50%',width:'30%'}}>
        <Image source={require('../assets/circulo.png')} style = {{position:'absolute', alignSelf:'center',zIndex:1, borderRadius:1000, width:'155%',height:'150%'}} />
        <Image source={require('../assets/circulo2.png')} style = {{position:'absolute',alignSelf:'center',borderRadius:1000,width:'210%',height:"200%"}}/>
        <Image source={require('../assets/sino.png')}  style = {{position:'absolute',alignSelf:'center',zIndex:1,width:'120%',height:'100%'}}/>
        </TouchableOpacity>
        <Text style = {{color:'white', marginTop:'13%',fontSize:25}}>Pânico</Text>

        <TouchableOpacity style={{position:'relative', justifyContent:'center', marginTop:'15%', height:'50%',width:'30%'}}>
        <Image source={require('../assets/circulo.png')} style = {{position:'absolute', alignSelf:'center',zIndex:1, borderRadius:1000, width:'105%',height:'100%'}} />
        <Image source={require('../assets/circulo2.png')} style = {{position:'absolute',alignSelf:'center',borderRadius:10000,width:'135%',height:"140%"}}/>
        <Image source={require('../assets/emergencia.png')} style = {{position:'absolute', alignSelf:'center',zIndex:1,}} />
        </TouchableOpacity>
        <Text style = {{color:'white', marginTop:'5%',fontSize:20}}>Emergência</Text>

      </LinearGradient>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9497D',
  },
  image: {
    marginTop: '9%',
    zIndex: 1,
    width: '60%',
    height: '55%',
    resizeMode: 'cover',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    height: '30%',
  },
  esfera: {
    marginTop: '50%',
    backgroundColor: '#fff',
    zIndex: 0,
    position: 'absolute',
    width: '190%',
    borderRadius: 2000,
    height: '300%',
    backgroundColor: '#F9497D',
  },
  imageMenu: {
    alignSelf: 'flex-start',
    marginLeft: '8%',
    marginTop: '15%',
  },
  imageSetaBaixo: {
    position: 'absolute',
    marginTop: '16%',

  },
});
