import { Text, View } from "react-native";

export default function HistoricoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Historico</Text>
      <Text style={{ marginTop: 10, textAlign: "center" }}>
        Esta é a tela do Histórico. Aqui você pode ver suas transações passadas,
        acompanhar seu progresso e revisar suas finanças ao longo do tempo.
      </Text>
    </View>
  );
}
