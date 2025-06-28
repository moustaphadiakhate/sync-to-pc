import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons';
import ToDoListScreen from './src/screens/TodoList';
import DetailScreen from './src/screens/Detail';
import ProfileScreen from "./src/screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TodoNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TodoList"
        component={ToDoListScreen}
        options={{ title: 'Todo Page' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Détail de la tâche' }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Profile") {
              iconName = "person";
            } else if (route.name === "Todo") {
              iconName = "list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Todo" component={TodoNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}