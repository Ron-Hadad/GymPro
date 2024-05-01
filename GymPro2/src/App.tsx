import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrainingList from "./TrainingList";
import TrainPage from "./TrainPage";
import { storeInitDataForDev } from "./StorageParse";
import {
  RootStackParamList,
  HomeScreenProps,
  ExerciseObject,
  TrainObject,
} from "./TypesAndDefinitions";
import addNewTrain from "./addNewTrain";

//type HomeScreenProps = {};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  storeInitDataForDev();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "home" }}
        />
        <Stack.Screen
          name="TrainingList"
          component={TrainingList}
          options={{ title: "trainingList" }}
        />
        <Stack.Screen
          name="TrainPage"
          component={TrainPage}
          options={({ route }) => ({ title: route.params.choosenTrain.name })}
        />
        <Stack.Screen
          name="addNewTrain"
          component={addNewTrain}
          options={{ title: "add new train now!" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const handlePress = () => {
    navigation.navigate("TrainingList"); // Navigate to the 'Details' screen
  };
  return (
    <View style={styles.container}>
      <Button title="Choose Trainning Now!" onPress={handlePress} />
    </View>
  );
}
//<StatusBar style="auto" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
