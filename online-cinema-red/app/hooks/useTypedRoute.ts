import { TypeRootStackParamList } from "@/navigation/navigation.types"
import { RouteProp, useRoute } from "@react-navigation/native"

export const useTypedRoute = () => {
  return useRoute<RouteProp<TypeRootStackParamList>>()
}
