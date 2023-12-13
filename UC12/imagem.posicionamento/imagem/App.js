import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RoutesApp from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
      backgroundColor='#ffffff' 
      barStyles='light-content' 
      translucent={false}
      />
      <RoutesApp/>
    </NavigationContainer>
  );
};
