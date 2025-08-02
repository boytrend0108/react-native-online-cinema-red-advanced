import { Control, FieldValues, FieldPath, RegisterOptions } from "react-hook-form"
import { TextInputProps } from "react-native"

export interface IField<T extends FieldValues> extends Omit<TextInputProps, "onChange" | "onChangeText" | "value"> {
  control: Control<T>
  name: FieldPath<T>
  placeholder?: string
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "setValueAs" | "disabled" | "valueAsDate">
}
