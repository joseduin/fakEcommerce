import React from "react";
// components
import { ThemedText } from "../ThemedText/ThemedText";
import { FieldError } from "react-hook-form";
// styles
import { styles } from "./styles";

type InputErrorProps = {
  error: FieldError | undefined;
};

export function InputError({ error }: InputErrorProps) {
  return error ? (
    <ThemedText type="small" style={styles.errorText} testID="inputError">
      {error.message}
    </ThemedText>
  ) : (
    null
  );
}
