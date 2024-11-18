import React, { useMemo } from "react";
// hook
import {
  useForm,
  Controller,
  type RegisterOptions,
  SubmitHandler,
  FieldError,
} from "react-hook-form";
// styles
import { styles } from "./styles";
// redux
import { useAppDispatch } from "@/redux/hook";
import { fetchSignIn } from "@/features/auth/state/auth.thunk";
import { fetchUsers } from "@/features/user/slice/user.thunk";
import { getAuthError } from "../../state/auth.slice";
import { useSelector } from "react-redux";
// components
import { ThemedText } from "@/components/ThemedText/ThemedText";
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { InputError } from "@/components/InputError/Input";
import { Input } from "@/components/Input/Input";
import Button from "@/components/Button";

interface FormInput {
  name: string;
  password: string;
}

function SignIn() {
  const dispatch = useAppDispatch();
  const error = useSelector(getAuthError) as FieldError | undefined;
  
  const { handleSubmit, control } = useForm<FormInput>({
    defaultValues: {
      name: "", //"johnd",
      password: "", //"m38rmF$",
    },
  });

  const nameRules: RegisterOptions<FormInput> = useMemo(
    () => ({
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must have at least 3 characters.",
      },
      maxLength: {
        value: 20,
        message: "Name must have less than 20 characters.",
      },
    }),
    []
  );
  const passwordRules: RegisterOptions<FormInput> = useMemo(
    () => ({
      required: "Password is required.",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters.",
      },
      maxLength: {
        value: 12,
        message: "Password must have less than 12 characters.",
      },
    }),
    []
  );

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const result = await dispatch(fetchSignIn(data));
    if (fetchSignIn.fulfilled.match(result)) {
      dispatch(fetchUsers(data));
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Sign In
      </ThemedText>

      <ThemedView>
        <Controller
          name="name"
          control={control}
          rules={nameRules}
          render={({ field: { onChange, onBlur, value }, fieldState }) => (
            <Input
              testID="name"
              placeholder="Name"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value || ""}
              error={fieldState.error}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={passwordRules}
          render={({ field: { onChange, onBlur, value }, fieldState }) => (
            <Input
              testID="password"
              placeholder="Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value || ""}
              error={fieldState.error}
            />
          )}
        />
      </ThemedView>

      <InputError error={error} />

      <Button
        testID="buttonLogin"
        label="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </ThemedView>
  );
}

export default SignIn;
