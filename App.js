import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
} from "react-native";

export default function App() {
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const openWhatsApp = () => {
    let msg = message;
    let mobile = mobileNo;
    if (mobile) {
      if (msg) {
        let url = "whatsapp://send?text=" + message + "&phone=91" + mobileNo;
        Linking.openURL(url)
          .then((data) => {
            console.log("WhatsApp Opened successfully " + data);
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please enter message to send");
      }
    } else {
      alert("Please enter mobile no");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 20, paddingVertical: 30 }}>
        Open WhatsApp chat box from React-native App
      </Text>
      <TextInput
        value={message}
        onChangeText={(message) => setMessage(message)}
        placeholder={"Enter message"}
        multiline={true}
        style={[styles.input, { height: 90 }]}
      />
      <TextInput
        value={mobileNo}
        onChangeText={(mobileNo) => setMobileNo(mobileNo)}
        placeholder={"Enter Mobile"}
        style={styles.input}
        keyboardType={"numeric"}
      />
      <View style={{ marginTop: 20 }}>
        <Button onPress={openWhatsApp} title="Open WhatsApp message" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: "#ffffff",
  },
  input: {
    width: 255,
    height: 44,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 0.5,
    borderWidth: 0.5,
  },
});
