import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { s } from "./styles";
import { colors } from "@/styles/colors";

type Props = {
  title: string;
};

export function Page({ title }: Props) {
  return (
    <View style={s.container}>
      <Feather name="chevron-right" size={20} color={colors.gray[300]} />
      <Feather name="file-text" size={20} color={colors.gray[300]} />

      <Text style={s.title}>{title}</Text>

      <TouchableOpacity>

      <Feather name="plus" size={20} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
}
