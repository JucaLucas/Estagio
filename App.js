import * as React from 'react';
import { useState } from 'react';
import { Button, Text, View, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SosScreen from './screens/sos';


// Funções de tela
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [name, setName] = useState(''); // Estado para armazenar o nome do usuário

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
      <Image
        source={require('./viva.jpeg')}
        style={{ width: '50%', height: 90 }}
      />
      <Image
        source={require('./logo.jpeg')}
        style={{ width: '100%', height: 250 }}
      />
      
      {/* Textos de instrução */}
      <Text style={{ textAlign: 'center', marginTop: '10%', color: '#000000B2' }}>
        Vamos nos conhecer!
      </Text>
      <Text style={{ color: '#F7054F', textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>
        Como devemos chamar você?
      </Text>

      {/* Campo de entrada para o nome */}
      <TextInput
        style={{
          backgroundColor:'#EDEFF1',
          height: 40,
          textAlign:'center',
          borderWidth: 1,
          borderRadius: 5,
          width: '80%',
          paddingHorizontal: 10,
          marginTop: 20,
        }}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName} // Atualiza o estado conforme o usuário digita
      />
      
      {/* Botão que imprime o nome */}
      <TouchableOpacity
        onPress={() => {
          console.log('Nome do usuário:', name); // Armazena ou usa o nome aqui
          navigation.navigate('SOS');
        }}
        style={{
          alignItems:'center',
          width:'45%',
          marginTop: '25%',
          backgroundColor: '#F7054F',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 25,
        }}
      >
        <Text style={{ color: '#fff' }}>Vamos lá!</Text>
      </TouchableOpacity>

      <Text style={{
        marginLeft:'2%',
        marginRight:'2%',
        marginTop:'10%',
        fontSize: 8,
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: -0.408,
        textAlign: 'center',
        color:'#000000',
        }}> 
        Ao fazer login, você concorda com nossos Termos e Condições, saiba como usamos seus dados em nossa Política de Privacidade.
        </Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// Criação dos stacks
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <>
      <StatusBar
        backgroundColor="#F7054F"
        barStyle="light-content"
      />

      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 0,
          },
          headerTintColor: 'black',
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.navigate('Details')}  // Alteração para navegar para a tela de "Details"
            >
              <Text style={{ color: '#808080', fontSize: 15 }}>Pular</Text>
            </TouchableOpacity>
          ),
        }}
      >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
        <HomeStack.Screen name="SOS" component={SosScreen} options={{ headerShown: false }}/>
      </HomeStack.Navigator>
    </>
  );
}

function SettingsStackScreen() {
  return (
    <>
      <StatusBar
        backgroundColor="#ff5757"
        barStyle="light-content"
      />

      <SettingsStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 0,
          },
          headerTintColor: 'black',
          headerShadowVisible: false,
        }}
      >
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="Details" component={DetailsScreen} />
      </SettingsStack.Navigator>
    </>
  );
}

// Navegação principal
export default function App() {
  return (
    <NavigationContainer>
      <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
        <SettingsStack.Screen name="HomeStack" component={HomeStackScreen} />
        <SettingsStack.Screen name="SettingsStack" component={SettingsStackScreen} />
      </SettingsStack.Navigator>
    </NavigationContainer>
  );
}
