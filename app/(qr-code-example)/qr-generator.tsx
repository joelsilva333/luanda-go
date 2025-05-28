import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function MeuQRCode() {
  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <QRCode
        value="https://kuvica.vercel.app"
        size={200}
      />
    </View>
  );
}
