import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {
  ExerciseObject,
  RootStackParamList,
  TrainObject,
} from "./TypesAndDefinitions";
import { getTrainigArray, getData } from "./StorageParse";

export default function TrainingList() {
  const [training, setTraining] = useState<TrainObject[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trainigArray = await getData<TrainObject>("trainingArray");
        console.log(
          "'getTrainigArray' retrieve:",
          JSON.stringify(trainigArray)
        );
        setTraining(trainigArray);
        console.log("setTraining happend");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTrainButtonPress = (item: TrainObject) => {
    // Navigate to the relevant training screen
    navigation.navigate("TrainPage", { choosenTrain: item });
  };

  const renderSomTrainButton = ({ item }: { item: TrainObject }) => (
    <TouchableOpacity onPress={() => handleTrainButtonPress(item)}>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 20 }}>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleNewTrainPress = () => {
    navigation.navigate("addNewTrain"); // Navigate to the 'Details' screen
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/**need to chainge the "add new train" into a button that opens a new screen*/}

      <Button title="add new train Now!" onPress={handleNewTrainPress} />
      <FlatList data={training} renderItem={renderSomTrainButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
