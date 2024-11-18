import React from "react";
import { TextInput, type TextInputProps } from "react-native";
// components
import { InputError } from "../InputError/Input";
import { FieldError } from "react-hook-form";
// styles
import { styles } from "./styles";

type InputProps = Omit<TextInputProps, "style"> & {
  error: FieldError | undefined;
};

export function Input({ error, ...props }: InputProps) {
  return (
    <>
      <TextInput {...props} style={styles.input} />
      <InputError error={error} />
    </>
  );
}


