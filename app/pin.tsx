import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Delete, Fingerprint } from 'lucide-react-native';
import { useAuth } from '@/context/AuthContext';
import { colors } from '@/constants/colors';

export default function PinScreen() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isWrongPin, setIsWrongPin] = useState(false);
  const { verifyPin, user } = useAuth();
  
  const correctPin = '1234'; // In a real app, this would be stored securely or verified by API
  
  useEffect(() => {
    if (pin.length === 4) {
      setTimeout(() => {
        if (pin === correctPin) {
          verifyPin(pin);
          router.replace('/(tabs)');
        } else {
          setError('Incorrect PIN. Please try again.');
          setIsWrongPin(true);
          setTimeout(() => {
            setIsWrongPin(false);
            setPin('');
          }, 500);
        }
      }, 300);
    }
  }, [pin]);
  
  const handlePress = (num: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
    }
  };
  
  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
    setError('');
  };
  
  const handleBiometricAuth = () => {
    // In a real app, we would use expo-local-authentication here
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Enter PIN</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Welcome{user?.name ? `, ${user.name}` : ''}
        </Text>
        
        <View style={styles.pinContainer}>
          {[0, 1, 2, 3].map(index => (
            <View 
              key={index} 
              style={[
                styles.pinDot, 
                index < pin.length && styles.pinDotFilled,
                isWrongPin && styles.pinDotError
              ]}
            />
          ))}
        </View>
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <View style={styles.keypadContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <TouchableOpacity
              key={num}
              style={styles.keypadButton}
              onPress={() => handlePress(num.toString())}
            >
              <Text style={styles.keypadButtonText}>{num}</Text>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity
            style={styles.keypadButton}
            onPress={handleBiometricAuth}
          >
            <Fingerprint size={28} color={colors.gray[700]} />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.keypadButton}
            onPress={() => handlePress('0')}
          >
            <Text style={styles.keypadButtonText}>0</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.keypadButton}
            onPress={handleDelete}
          >
            <Delete size={28} color={colors.gray[700]} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.forgotPinText}>Forgot PIN?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.gray[800],
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: colors.gray[600],
    marginBottom: 40,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 16,
  },
  pinDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[400],
  },
  pinDotFilled: {
    backgroundColor: colors.primary[600],
    borderColor: colors.primary[600],
  },
  pinDotError: {
    backgroundColor: colors.error[600],
    borderColor: colors.error[600],
  },
  errorText: {
    color: colors.error[600],
    marginBottom: 20,
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 300,
    gap: 16,
    marginTop: 40,
  },
  keypadButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.gray[800],
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  forgotPinText: {
    color: colors.secondary[600],
    fontWeight: '500',
  },
});