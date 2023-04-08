import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

/**
 * @author
 * @function GoalInput
 **/

export const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalTextt] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalTextt(enteredText);
  };

  const addGoalHandler = () => {
    props.onPress(enteredGoalText);
    setEnteredGoalTextt("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/image/goal.jpg")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="black" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="black" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
  },
  textInput: {
    width: "100%",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    width: "70%",
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 260,
    height: 125,
    margin: 12,
  },
});
