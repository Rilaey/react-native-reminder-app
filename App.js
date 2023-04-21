import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ReminderList from "./components/ReminderList";
import AddReminder from "./components/AddReminder";
import uuid from "react-native-uuid";
import { useState } from "react";

export default function App() {
  const [reminder, setReminders] = useState([
    {
      id: uuid.v4(),
      title: "Make Food"
    },
    {
      id: uuid.v4(),
      title: "Walk Dog"
    },
    {
      id: uuid.v4(),
      title: "Get Money"
    },
    {
      id: uuid.v4(),
      title: "Finish This App"
    }
  ]);

  const deleteReminder = (id) => {
    setReminders((prevReminds) => {
      return prevReminds.filter((item) => item.id != id);
    });
  };

  const addReminders = (title) => {
    if(!title) {
      Alert.alert('Error', "Please enter a title for your reminder!")
    } else {
      setReminders((prevReminds) => {
        return [{id: uuid.v4(), title}, ...prevReminds]
      })
    }
  }

  return (
    <View style={{ backgroundColor: "lightgray", height: 1000 }}>
      <Header />
      <View>
        <FlatList
          data={reminder}
          renderItem={({ item }) => (
            <ReminderList item={item} deleteReminder={deleteReminder} />
          )}
        />
        <AddReminder addReminders={addReminders} />
      </View>
    </View>
  );
}
