import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Eye, EyeOff, Ban as Bank, CreditCard, Wallet } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import AccountCard from '@/components/cards/AccountCard';

export default function AccountsScreen() {
  const [isAmountVisible, setIsAmountVisible] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    // Simulate fetch
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const toggleAmountVisibility = () => {
    setIsAmountVisible(!isAmountVisible);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
        <Text style={styles.totalBalanceLabel}>Total Balance</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.totalBalanceAmount}>
            {isAmountVisible ? 'P15,234.56' : '••••••••'}
          </Text>
          <TouchableOpacity onPress={toggleAmountVisibility} style={styles.eyeButton}>
            {isAmountVisible ? (
              <EyeOff size={20} color={colors.gray[600]} />
            ) : (
              <Eye size={20} color={colors.gray[600]} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary[600]}
            colors={[colors.primary[600]]}
          />
        }
      >
        <View style={styles.accountsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Accounts</Text>
          </View>
          
          <AccountCard
            title="Main Checking Account"
            accountNumber="••••4567"
            balance={isAmountVisible ? "P12,345.67" : "••••••"}
            icon={<Bank size={24} color={colors.primary[600]} />}
            color={colors.primary[50]}
          />
          
          <AccountCard
            title="Savings Account"
            accountNumber="••••8901"
            balance={isAmountVisible ? "P2,888.89" : "••••••"}
            icon={<Wallet size={24} color={colors.secondary[600]} />}
            color={colors.secondary[50]}
          />
        </View>
        
        <View style={styles.cardsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Cards</Text>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={18} color={colors.primary[600]} />
              <Text style={styles.addButtonText}>Add New</Text>
            </TouchableOpacity>
          </View>
          
          <AccountCard
            title="Visa Debit Card"
            accountNumber="••••5678"
            balance={isAmountVisible ? "P1,267.45" : "••••••"}
            icon={<CreditCard size={24} color={colors.accent[600]} />}
            color={colors.accent[50]}
            isCard={true}
          />
          
          <AccountCard
            title="Mastercard Credit"
            accountNumber="••••9012"
            balance={isAmountVisible ? "$3,452.12" : "••••••"}
            icon={<CreditCard size={24} color={colors.error[600]} />}
            color={colors.error[50]}
            isCard={true}
          />
        </View>
        
        <View style={styles.rewardsSection}>
          <View style={styles.rewardsCard}>
            <Text style={styles.rewardsTitle}>Cashback Rewards</Text>
            <Text style={styles.rewardsAmount}>P123.45</Text>
            <Text style={styles.rewardsDescription}>
              You've earned cashback on recent purchases.
              Use rewards for your next transaction!
            </Text>
            <TouchableOpacity style={styles.rewardsButton}>
              <Text style={styles.rewardsButtonText}>Redeem Rewards</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Link External Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  header: {
    padding: 24,
    backgroundColor: colors.primary[600],
  },
  totalBalanceLabel: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalBalanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
  eyeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  content: {
    flex: 1,
  },
  accountsSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
  },
  cardsSection: {
    padding: 20,
    paddingTop: 0,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addButtonText: {
    color: colors.primary[600],
    fontWeight: '500',
  },
  rewardsSection: {
    padding: 20,
    paddingTop: 0,
    marginBottom: 20,
  },
  rewardsCard: {
    backgroundColor: colors.accent[50],
    borderRadius: 16,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent[500],
  },
  rewardsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 8,
  },
  rewardsAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.accent[800],
    marginBottom: 12,
  },
  rewardsDescription: {
    color: colors.gray[600],
    lineHeight: 22,
    marginBottom: 16,
  },
  rewardsButton: {
    backgroundColor: colors.accent[600],
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  rewardsButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  linkButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary[600],
  },
  linkButtonText: {
    color: colors.primary[600],
    fontSize: 16,
    fontWeight: '600',
  },
});