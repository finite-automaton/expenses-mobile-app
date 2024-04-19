import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Header } from "@react-navigation/elements";
import { Route } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = {
  options: NativeStackNavigationOptions | BottomTabNavigationOptions;
  route: Route<string>;
  addTopPadding?: boolean;
};

export default function NavigationHeader({
  options,
  route,
  addTopPadding,
}: Props) {
  const { t } = useTranslation("navigation");
  return (
    <Header
      {...options}
      title={t(route.name)}
      headerStyle={styles.header}
      headerTitleStyle={addTopPadding ? styles.title : {}}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
  },
  title: {
    paddingTop: 48
  }
});
