import { Route } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { TFunction } from "i18next";
import { SCREENS } from "../../navigation/constants";

export function getHeaderTitle(
  options: NativeStackNavigationOptions,
  route: Route<string>,
  t: TFunction<"navigation", undefined>
): string {
  switch(route.name){
    case SCREENS.EXPENSES:
      return t('')
  }
}
