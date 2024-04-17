import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function SettingsScreen({ navigation }) {
  const { t, i18n } = useTranslation("settings");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState([
    { label: "English", value: "en" },
    { label: "Deutsch", value: "de" },
  ]);

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <View style={styles.container}>
      <Text>{t('selectLanguage')}</Text>
      <View style={styles.dropDownWrapper}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={handleLanguageChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dropDownWrapper: {
    width: "80%",
  },
});
