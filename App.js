import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmailScreen from './src/screen/EmailScreen'
import Password from './src/screen/Password'
import Info from './src/screen/Info'
import Appoinment from './src/screen/Appoinment'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('EmailScreen')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>

  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmailScreen">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#61BFFF',
          },
          headerTintColor: '#fff',
        }} />


        <Stack.Screen name="Password" component={Password} options={{
          title: 'Create Account',
          headerStyle: {
            backgroundColor: '#61BFFF',
          },
          headerTintColor: '#fff',
        }} />

        <Stack.Screen name="Info" component={Info} options={{
          title: 'Create Account',
          headerStyle: {
            backgroundColor: '#61BFFF',
          },
          headerTintColor: '#fff',
        }} />

        <Stack.Screen name="Appoinment" component={Appoinment} options={{
          title: 'Create Account',
          headerStyle: {
            backgroundColor: '#61BFFF',
          },
          headerTintColor: '#fff',
        }} />


      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;