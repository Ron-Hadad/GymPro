import { ExerciseObject, TrainObject } from "./TypesAndDefinitions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function storeInitDataForDev() {
  //Lorem ipsum
  const ExerciseObject1: ExerciseObject = {
    id: "1",
    name: "exerciseName1",
    descriptionForUser: "descriptionForUser1",
    repetition: 1,
  };
  const ExerciseObject2: ExerciseObject = {
    id: "2",
    name: "exerciseName2",
    descriptionForUser: "descriptionForUser2",
    repetition: 2,
  };

  const TrainingObject1: TrainObject = {
    id: "1",
    name: "trainName1",
    colorOnCalendar: "color1",
    descriptionForUser:
      "descriptionForUser1 is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et quam metus. Aliquam eu eros elementum augue rhoncus facilisis. Integer id pulvinar orci. Vivamus fringilla commodo ante, non cursus lacus rutrum at. Mauris sapien turpis, venenatis eget arcu nec, facilisis mollis sem. Donec at orci orci. Morbi varius lorem turpis, eu pellentesque risus semper laoreet. Sed sodales tristique neque, vitae consequat sapien mollis id",
    exercises: [ExerciseObject1, ExerciseObject2],
  };
  const TrainingObject2: TrainObject = {
    id: "2",
    name: "trainName2",
    colorOnCalendar: "color2",
    descriptionForUser: "descriptionForUser2",
    exercises: [ExerciseObject1, ExerciseObject2],
  };
  const TrainingObject3: TrainObject = {
    id: "3",
    name: "trainName3",
    colorOnCalendar: "color3",
    descriptionForUser: "descriptionForUser3",
    exercises: [ExerciseObject1, ExerciseObject2],
  };
  saveTrainigArray([TrainingObject1, TrainingObject2, TrainingObject3]);
}

/**this function expects to get as an input the whole new TrainigArray. */
export const savedData = async <T,>(key: string, dataToSave: T) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(dataToSave));
    //console.log("saving data: " + JSON.stringify(dataToSave));
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

// Function to get data from AsyncStorage
export const getData = async <T,>(key: string): Promise<T[] | null> => {
  try {
    const savedData = await AsyncStorage.getItem(key);
    if (savedData) {
      const parsedData = JSON.parse(savedData) as T[];
      //console.log("'getData' retrieve:" + savedData);
      return parsedData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

//--------may not be used:-------

export function getTrainigArray(): TrainObject[] | null {
  getData<TrainObject>("trainingArray")
    .then((trainigArray) => {
      //console.log("'getTrainigArray' retrieve:", JSON.stringify(trainigArray));
      return trainigArray;
    })
    .catch((e) => {
      return null;
    });

  return null;
}

export function saveTrainigArray(dataToSave: TrainObject[]): void {
  savedData<TrainObject[]>("trainingArray", dataToSave);
}
