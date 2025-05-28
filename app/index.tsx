import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FontAwesome5
          name="shuttle-van"
          size={60}
          color="#007bff"
        />
        <Text style={styles.passagens}>10 Passagens disponíveis</Text>
        <Text style={styles.data}>Quarta-feira, 05 de Maio de 2025</Text>
      </View>

      <View style={styles.grid}>
        <Item
          icon="cash"
          text="Pagar Táxi"
        />
        <Item
          icon="wallet"
          text="Carteira"
        />
        <Item
          icon="ticket"
          text="Passagens"
        />
        <Item
          icon="time"
          text="Histórico"
        />
      </View>
    </View>
  );
}

function Item({
  icon,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
}) {
  return (
    <TouchableOpacity style={styles.item}>
      <Ionicons
        name={icon as any}
        size={32}
        color="#007bff"
      />
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 4,
    height: "40%",
    maxHeight: 300,
    minHeight: 150,
  },
  passagens: {
    fontSize: 18,
    fontWeight: "bold",
  },
  data: {
    fontSize: 14,
    color: "#888",
  },
  grid: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "50%",
  },
  item: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 12,
    height: "55%",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 3,
  },
  label: {
    fontWeight: "600",
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },
});
