import OldModal from "@/components/OldModal";
import RNModal from "@/components/RNModal";
import SimpleRNModal from "@/components/SimpleRNModal";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <RNModal />
      <SimpleRNModal />
      <OldModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    alignItems: "center",
    gap: 20,
  },
});
