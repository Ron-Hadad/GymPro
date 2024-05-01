import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "HomeScreen"
>;

export type ChoosenTrain = NativeStackScreenProps<
  RootStackParamList,
  "TrainPage"
>;
export type TrainingList = NativeStackScreenProps<
  RootStackParamList,
  "TrainingList"
>;
export type addNewTrain = NativeStackScreenProps<
  RootStackParamList,
  "addNewTrain"
>;

//import { NavigationProp } from "@react-navigation/native";
//export type

export type ExerciseObject = {
  id: string;
  name: string;
  descriptionForUser: string;
  repetition: number;
};

export type TrainObject = {
  id: string;
  name: string;
  colorOnCalendar: string; //string?
  descriptionForUser: string;
  exercises: ExerciseObject[];
};

export type RootStackParamList = {
  HomeScreen: undefined;
  TrainingList: undefined;
  TrainPage: { choosenTrain: TrainObject };
  addNewTrain: undefined;
};
