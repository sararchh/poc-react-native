import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { s } from "./styles";
import { colors } from "@/styles/colors";

export function Header() {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{
          uri: "https://github.com/sararchh.png",
        }}
      />

      <View style={s.user}>
        <Text style={s.name}>Sara Teste</Text>
        <Text style={s.email}>sararocha878@gmail.com</Text>
      </View>

      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
      </TouchableOpacity>
    </View>
  );
}
