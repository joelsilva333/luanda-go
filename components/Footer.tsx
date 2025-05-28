import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Footer() {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <FooterIcon
        name="home-outline"
        onPress={() => router.push("/")}
      />
      <FooterIcon
        name="cash-outline"
        onPress={() => router.push("/pagar-taxi")}
      />
      <FooterIcon
        name="wallet-outline"
        onPress={() => router.push("/qr-generator")}
      />
      <FooterIcon
        name="ticket-outline"
        onPress={() => router.push("/passagens")}
      />
      <FooterIcon
        name="time-outline"
        onPress={() => router.push("/historico")}
      />
    </View>
  );
}

function FooterIcon({ name, onPress }: { name: any; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={name}
        size={26}
        color="#007bff"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    elevation: 6,
  },
});
