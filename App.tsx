import "./i18n";
import { StatusBar } from "react-native";

import MainContainer from "./src/navigation/MainContainer";

export default function App() {
  return (
    <>
      <StatusBar />
      <MainContainer />
    </>
  );
}
