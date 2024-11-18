import React from "react";
import { View } from "react-native";
// redux
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { destroySession } from "@/features/auth/state/auth.slice";
// components
import Avatar from "../avatar";
import { getAuthUser } from "../../slice/user.slice";
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { ThemedText } from "@/components/ThemedText/ThemedText";
// styles
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";

function Profile() {
  const user = useAppSelector(getAuthUser);
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(destroySession());
  };

  return (
    <ThemedView style={styles.container}>
      <Avatar name={user.name.firstname} lastName={user.name.lastname} />
      <ThemedText type="subtitle" testID="labelName">{`${user.name.firstname} ${user.name.lastname}`}</ThemedText>
      <ThemedText type="defaultSemiBold" testID="labelUsername">{`@${user.username}`}</ThemedText>

      <View style={styles.body}>
        <ThemedView
          style={styles.card}
          lightColor={Colors.light.card}
          darkColor={Colors.dark.card}
        >
          <ThemedText type="subtitle">{"Information"}</ThemedText>
          <View style={styles.cardRow}>
            <ThemedText type="defaultSemiBold">{"Email"}</ThemedText>
            <ThemedText testID="labelEmail">{user.email}</ThemedText>
          </View>
          <View style={styles.cardRow}>
            <ThemedText type="defaultSemiBold">{"Phone"}</ThemedText>
            <ThemedText testID="labelPhone">{user.phone}</ThemedText>
          </View>
        </ThemedView>

        <ThemedView
          style={styles.card}
          lightColor={Colors.light.card}
          darkColor={Colors.dark.card}
        >
          <ThemedText type="subtitle">{"Location"}</ThemedText>
          <View style={styles.cardRow}>
            <ThemedText type="defaultSemiBold">{"City"}</ThemedText>
            <ThemedText testID="labelCity">{user.address.city}</ThemedText>
          </View>
          <View style={styles.cardRow}>
            <ThemedText type="defaultSemiBold">{"Street"}</ThemedText>
            <ThemedText testID="labelStreet">{user.address.street}</ThemedText>
          </View>
          <View style={styles.cardRow}>
            <ThemedText type="defaultSemiBold">{"Number"}</ThemedText>
            <ThemedText testID="labelNumber">{user.address.number}</ThemedText>
          </View>
          <View style={styles.cardRow}>
            <ThemedText type="defaultSemiBold">{"Zip Code"}</ThemedText>
            <ThemedText testID="labelZipCode">{user.address.zipcode}</ThemedText>
          </View>
        </ThemedView>
      </View>

      <Button testID="buttonSignOut" label="Sign out" onPress={signOut} />
    </ThemedView>
  );
}

export default Profile;
