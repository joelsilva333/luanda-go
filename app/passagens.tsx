import { Text, View } from "react-native";

export default function PassagensScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Passagens</Text>
      <Text style={{ marginTop: 10, textAlign: "center" }}>
        Esta é a tela de Passagens. Aqui você pode gerenciar suas passagens,
        verificar disponibilidade e planejar suas viagens.
      </Text>
    </View>
  );
}
