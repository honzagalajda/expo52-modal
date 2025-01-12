import React, { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";

const RNModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible((prev) => !prev);

  return (
    <>
      <Button title="Show RN modal" onPress={toggleModal} />
      {modalVisible && (
        <Pressable onPress={toggleModal} style={styles.modalBackdrop}>
          <BlurView intensity={20} tint="dark" style={{ flex: 1 }} />
        </Pressable>
      )}
      <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <Text>This is model from React native</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </>
  );
};

export default RNModal;

const styles = StyleSheet.create({
  modalBackdrop: {
    position: "absolute",
    width: "100%",
    top: -10,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  modalContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    width: "80%",
    minHeight: 180,
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    padding: 8,
  },
});
