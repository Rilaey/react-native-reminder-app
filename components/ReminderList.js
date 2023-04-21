import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

export default function ReminderList({ item, deleteReminder }) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      //   margin: 10,
      padding: 8,
      borderBottomWidth: 5,
      borderBottomColor: "gray"
    },
    text: {
      fontSize: 18
    }
  });

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>
        <Icon
          type="MaterialIcons"
          name="remove"
          size={20}
          onPress={() => deleteReminder(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}
