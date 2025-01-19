import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray[400],
  },
  image: {
    width: 42,
    height: 42,
  },
  user: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    color: colors.gray[100],
    fontWeight: "500",
    fontSize: 16,
  },
  email: {
    color: colors.gray[300],
    fontWeight: "500",
    fontSize: 14,
  },
});
