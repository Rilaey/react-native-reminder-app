import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";

export default function AddReminder({ addReminders }) {
  const [text, setText] = useState("");

  const handleChange = (textValue) => {
    setText(textValue);
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 25,
      backgroundColor: "lightgreen"
    },
    inputs: {
      margin: 15,
      fontSize: 22
    },
    icons: {
      margin: 15
    }
  });

  return (
    <TouchableOpacity onPress={() => addReminders(text)}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputs}
          onChangeText={handleChange}
          placeholder="Add a Reminder..."
        />
        <Icon style={styles.icons} type="Ionicons" name="add" size={30} />
      </View>
    </TouchableOpacity>
  );
}
