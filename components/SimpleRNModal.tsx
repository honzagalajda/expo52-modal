import React from "react";
import useModalControls from "@/hooks/useModalControls";
import { Button, Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const SimpleRNModal = () => {
  const { isVisible, showModal, hideModal } = useModalControls();

  return (
    <>
      {/* Button to show the modal */}
      <Button title="Show Simple RN modal" onPress={showModal} />
      {/* Modal */}
      {isVisible && (
        <>
          <Animated.View
            style={styles.modalContainer}
            entering={SlideInDown.duration(300)}
            exiting={SlideOutDown.duration(150)}
          >
            <Text>This is model from React native</Text>
            <Button title="Close" onPress={hideModal} />
          </Animated.View>
          <Animated.View
            exiting={FadeOut}
            entering={FadeIn}
            style={styles.modalBackdrop}
          >
            <Pressable onPress={hideModal} style={{ flex: 1 }}>
              <BlurView intensity={20} tint="dark" style={{ flex: 1 }} />
            </Pressable>
          </Animated.View>
        </>
      )}
    </>
  );
};

export default SimpleRNModal;

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
  modalContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    width: "90%",
    minHeight: 180,
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    padding: 8,
    zIndex: 101,
  },
});
