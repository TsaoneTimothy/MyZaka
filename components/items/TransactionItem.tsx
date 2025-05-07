import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowDownLeft, ArrowUpRight, RotateCcw } from 'lucide-react-native';
import { colors } from '@/constants/colors';

type TransactionItemProps = {
  title: string;
  date: string;
  amount: string;
  type: 'credit' | 'debit';
  onPress?: () => void;
  showReverseOption?: boolean;
};

export default function TransactionItem({ 
  title, 
  date, 
  amount, 
  type,
  onPress,
  showReverseOption = false
}: TransactionItemProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <View style={[
        styles.iconContainer,
        type === 'credit' ? styles.creditIconContainer : styles.debitIconContainer
      ]}>
        {type === 'credit' ? (
          <ArrowDownLeft size={20} color={colors.success[600]} />
        ) : (
          <ArrowUpRight size={20} color={colors.error[600]} />
        )}
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      
      <View style={styles.amountContainer}>
        <Text style={[
          styles.amount,
          type === 'credit' ? styles.creditAmount : styles.debitAmount
        ]}>
          {amount}
        </Text>
        
        {showReverseOption && (
          <TouchableOpacity style={styles.reverseButton}>
            <RotateCcw size={14} color={colors.gray[600]} />
            <Text style={styles.reverseText}>Reverse</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  creditIconContainer: {
    backgroundColor: colors.success[50],
  },
  debitIconContainer: {
    backgroundColor: colors.error[50],
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: colors.gray[500],
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  creditAmount: {
    color: colors.success[600],
  },
  debitAmount: {
    color: colors.error[600],
  },
  reverseButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reverseText: {
    fontSize: 12,
    color: colors.gray[600],
    marginLeft: 4,
  },
});