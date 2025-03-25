import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ToDoListScreen from './src/screens/ToDoListScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TodoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accueil"
        component={ToDoListScreen}
        options={{ title: "Accueil" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: 'Détails de la tâche' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Taches") {
              iconName = "list";
            } else if (route.name === "Profile") {
              iconName = "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2ecc71',
          tabBarInactiveTintColor: '#95a5a6',
        })}
      >
        <Tab.Screen name="Taches" component={TodoStack} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
