import useModalControls from "@/hooks/useModalControls";
import useRealWindowDimensions from "@/hooks/useRealWindowDimensions";
import { BlurView } from "expo-blur";
import React from "react";
import { Button, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

const OldModal = () => {
  const { height } = useRealWindowDimensions();
  const { isVisible, showModal, hideModal } = useModalControls();

  return (
    <>
      {/* Button to show the modal */}
      <Button title="Show old modal" onPress={showModal} />
      {/* Modal */}
      <Modal
        customBackdrop={
          <Pressable onPress={hideModal} style={styles.modalBakcdrop}>
            <BlurView intensity={20} tint="dark" style={{ flex: 1 }} />
          </Pressable>
        }
        backdropOpacity={Platform.OS === "ios" ? 1 : 0.5}
        isVisible={isVisible}
        deviceHeight={height}
        coverScreen={false}
      >
        <View style={styles.modalContainer}>
          <Text>This is react-native-modal</Text>
          <Button title="Close" onPress={hideModal} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    minHeight: 180,
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    padding: 8,
  },
  modalBakcdrop: {
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default OldModal;
