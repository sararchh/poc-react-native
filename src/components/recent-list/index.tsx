import { View, Text, FlatList } from "react-native";

import { Recent } from "@/components/recent";

import { s } from "./styles";

type Props = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[];
};

export function RecentList({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Recentes</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Recent data={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
      />
    </View>
  );
}
