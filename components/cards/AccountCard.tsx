import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { colors } from '@/constants/colors';

type AccountCardProps = {
  title: string;
  accountNumber: string;
  balance: string;
  icon: ReactNode;
  color: string;
  isCard?: boolean;
};

export default function AccountCard({ 
  title, 
  accountNumber, 
  balance, 
  icon, 
  color, 
  isCard = false 
}: AccountCardProps) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: 'white' }]}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        {icon}
      </View>
      
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.accountNumber}>{accountNumber}</Text>
        </View>
        
        <View style={styles.rightContainer}>
          <Text style={styles.balance}>{balance}</Text>
          <ChevronRight size={18} color={colors.gray[400]} />
        </View>
      </View>
      
      {isCard && (
        <View style={styles.cardIndicator}>
          <View style={styles.cardChip} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
    overflow: 'hidden',
  },
  iconContainer: {
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 14,
    color: colors.gray[500],
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray[800],
    marginRight: 8,
  },
  cardIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  cardChip: {
    width: 32,
    height: 24,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
});