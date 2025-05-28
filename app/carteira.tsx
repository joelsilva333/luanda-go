import { Text, View } from "react-native";

export default function CarteiraScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Carteira</Text>
      <Text style={{ marginTop: 10, textAlign: "center" }}>
        Esta é a tela da Carteira. Aqui você pode gerenciar suas finanças, ver
        transações e muito mais.
      </Text>
    </View>
  );
}
