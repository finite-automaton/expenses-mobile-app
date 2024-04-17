import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import './i18n';


export default function App() {
  const { t, i18n } = useTranslation('common');
  return (
    <View style={styles.container}>
      <Text>{t('title')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
