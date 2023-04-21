import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            height: 150,
            backgroundColor: "black"
        },
        reminderHeader: {
            fontSize: 32,
            marginTop: 20,
            color: "#fff"
        },
        reminderText: {
            fontSize: 20,
            color: "#fff"
        }
    })

  return (
    <View style={styles.container}>
      <Text style={styles.reminderHeader}>Reminders</Text>
      <Text style={styles.reminderText}>✨ Never Forget Again ✨</Text>
    </View>
  )
}