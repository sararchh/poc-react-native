import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Page } from "@/components/page";

import { s } from "./styles";
import { colors } from "@/styles/colors";

type Props = {
  data: {
    id: string;
    title: string;
  }[];
};

export function PageList({ data }: Props) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Privado</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={20} color={colors.gray[300]} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="plus" size={20} color={colors.gray[300]} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Page title={item.title} />}
        showsVerticalScrollIndicator={false}
        style={s.list}
        ItemSeparatorComponent={() => (
          <View style={s.separator} />
        )}
        scrollEnabled={false}
      />
    </View>
  );
}
