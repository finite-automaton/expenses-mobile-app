import "./i18n";
import { StatusBar } from "react-native";

import MainContainer from "./src/navigation/MainContainer";
import { ExpensesProvider } from "./src/contexts/Expenses";

export default function App() {
  return (
    <>
      <ExpensesProvider>
        <StatusBar />
        <MainContainer />
      </ExpensesProvider>
    </>
  );
}
