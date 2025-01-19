import { View, ScrollView } from "react-native";

import { Header } from "@/components/header";
import { RecentList } from "@/components/recent-list";
import { PageList } from "@/components/page-list";

import { DATA } from "@/utils/data";

export default function Index() {
  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 24, paddingBottom: 100 }}
      >
        <RecentList data={DATA.RECENT} />
        <PageList data={DATA.PAGES} />
      </ScrollView>
    </View>
  );
}
