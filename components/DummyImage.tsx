import React from 'react';
import { View, Text, StyleSheet, DimensionValue } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface DummyImageProps {
  width: DimensionValue;
  height: DimensionValue;
  icon?: string;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
  iconSize?: number;
  borderRadius?: number;
}

/**
 * Componente que substitui imagens reais por placeholders coloridos
 * Útil para desenvolvimento quando as imagens reais não estão disponíveis
 */
export default function DummyImage({
  width,
  height,
  icon = 'image',
  text,
  backgroundColor = '#cbd5e1',
  textColor = '#475569',
  iconColor = '#475569',
  iconSize = 32,
  borderRadius = 0,
}: DummyImageProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          backgroundColor,
          borderRadius,
        },
      ]}
    >
      <FontAwesome5 name={icon} size={iconSize} color={iconColor} />
      {text && <Text style={[styles.text, { color: textColor }]}>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
}); 