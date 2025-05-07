import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Eye, EyeOff, ArrowUpRight, ArrowDownLeft } from 'lucide-react-native';
import { colors } from '@/constants/colors';

type BalanceCardProps = {
  balance: string;
  currency: string;
  accountNumber: string;
};

export default function BalanceCard({ balance, currency, accountNumber }: BalanceCardProps) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.accountNumber}>{accountNumber}</Text>
        <TouchableOpacity 
          style={styles.visibilityButton}
          onPress={toggleBalanceVisibility}
        >
          {isBalanceVisible ? (
            <EyeOff size={20} color="white" />
          ) : (
            <Eye size={20} color="white" />
          )}
        </TouchableOpacity>
      </View>
      
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>
          {isBalanceVisible ? balance : '••••••••'}
        </Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <ArrowUpRight size={18} color={colors.primary[600]} />
          </View>
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <ArrowDownLeft size={18} color={colors.primary[600]} />
          </View>
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary[600],
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  accountNumber: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  visibilityButton: {
    padding: 4,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
  },
  currency: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 8,
  },
  actionIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
  },
});