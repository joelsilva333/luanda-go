import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Slot />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  content: {
    flex: 1,
    height: "100%",
  },
});
