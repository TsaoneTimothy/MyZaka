import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '@/constants/colors';

type ShortcutButtonProps = {
  title: string;
  icon: ReactNode;
  onPress: () => void;
  style?: ViewStyle;
};

export default function ShortcutButton({ title, icon, onPress, style }: ShortcutButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.gray[700],
    marginTop: 8,
    textAlign: 'center',
  },
});