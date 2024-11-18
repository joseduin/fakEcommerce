/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#FFD700';
const tintColorDark = '#FFC107';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    indicator: "#0000FF",
    start: '#FFD700',
    price: '#333333',
    header: '#F8F8F8',
    headerIcon: '#333333',
    card: '#F8F8F8',
    button: tintColorLight,
    buttonColor: '#333333',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    indicator: "#A5A5B4",
    start: '#FFC107',
    price: '#E0E0E0',
    header: '#333333',
    headerIcon: '#E0E0E0',
    card: '#333333',
    button: tintColorDark,
    buttonColor: '#E0E0E0',
  },
};
