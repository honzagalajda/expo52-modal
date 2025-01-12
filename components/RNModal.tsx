import React from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import useModalControls from "@/hooks/useModalControls";

const RNModal = () => {
  const { isVisible, showModal, hideModal } = useModalControls();

  return (
    <>
      {/* Button to show the modal */}
      <Button title="Show RN modal" onPress={showModal} />
      {/* Modal */}
      <Modal
        animationType="slide"
        visible={isVisible}
        transparent
        onRequestClose={hideModal}
      >
        <Pressable onPress={hideModal} style={styles.modalClosableBackdrop}>
          <View style={styles.modalContainer}>
            <Text>This is model from React native</Text>
            <Button title="Close" onPress={hideModal} />
          </View>
        </Pressable>
      </Modal>
      {isVisible && (
        <View style={styles.modalBackdrop}>
          <BlurView intensity={20} tint="dark" style={{ flex: 1 }} />
        </View>
      )}
    </>
  );
};

export default RNModal;

const styles = StyleSheet.create({
  modalBackdrop: {
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: 100,
  },
  modalClosableBackdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
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
