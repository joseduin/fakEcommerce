import { useEffect } from "react";
import { router, useRootNavigationState, useSegments } from "expo-router";
import { useSelector } from "react-redux";
// redux
import { getToken } from "./auth.slice";

export function useProtectedRoute() {
  const segments = useSegments();
  const token = useSelector(getToken);
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";
    if (!token && !inAuthGroup) {
      router.replace("/(auth)");
    } else if (token && inAuthGroup) {
      router.replace("/product/(tabs)");
    }
  }, [token, segments]);
}
