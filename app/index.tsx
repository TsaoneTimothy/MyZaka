import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight } from 'lucide-react-native';
import { colors } from '@/constants/colors';

export default function WelcomeScreen() {
  return (
    <LinearGradient
      colors={[colors.primary[700], colors.primary[900]]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>MY ZAKA</Text>
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Banking Made Simple</Text>
          <Text style={styles.subtitle}>
            Secure, fast, and easy banking at your fingertips
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Pressable 
            style={styles.button} 
            onPress={() => router.push('/login')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            <ArrowRight size={20} color="white" />
          </Pressable>
          
          <Pressable 
            style={styles.secondaryButton}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.secondaryButtonText}>Create an Account</Text>
          </Pressable>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 My Zaka. All rights reserved.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 26,
  },
  buttonContainer: {
    marginBottom: 40,
    gap: 16,
  },
  button: {
    backgroundColor: colors.secondary[600],
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
});