import { TypeRootStackParamList } from "@/navigation/navigation.types"
import { NavigationProp } from "@react-navigation/native"
import { useNavigation } from "expo-router"

export const useTypedNavigation = () => {
  return useNavigation<NavigationProp<TypeRootStackParamList>>()
}
