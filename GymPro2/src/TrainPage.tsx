import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  ExerciseObject,
  ChoosenTrain,
  TrainObject,
} from "./TypesAndDefinitions";
import DraggableFlatList from "react-native-draggable-flatlist";
import { ScrollView } from "react-native";

//**here we will show the choosen tarining. we will show description, name, and exercises(sorted as the user wish). and a 'start' button  */

export default function TrainPage({ route }: ChoosenTrain) {
  const TrainPassedToPage: TrainObject = route.params.choosenTrain;
  const renderSomeExercise = ({ item }: { item: ExerciseObject }) => (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseText}>{item.name}</Text>
    </View>
  );
  //need to add a state of the excersises?
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.descriptionText}>
        {"description: "}
        {TrainPassedToPage.descriptionForUser}
      </Text>
      <DraggableFlatList
        data={TrainPassedToPage.exercises}
        renderItem={renderSomeExercise}
        keyExtractor={(item: ExerciseObject) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    //alignItems: "center",
    //justifyContent: "center",
  },
  descriptionText: {
    fontSize: 20,
    marginBottom: 16,
  },
  exerciseContainer: {
    marginBottom: 10,
  },
  exerciseText: {
    fontSize: 20,
  },
});
