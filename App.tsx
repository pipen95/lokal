import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/favicon.png")} style={styles.logo} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.subtitle}>This is my home page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#6200EE",
  },
  logo: {
    width: 100,
    height: 50,
  },
  button: {
    backgroundColor: "#03DAC6",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
});
