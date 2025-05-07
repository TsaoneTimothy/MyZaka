import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { CirclePlus as PlusCircle, TrendingUp, TrendingDown, Receipt, BellRing, CircleArrowRight as ArrowRightCircle } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { useAuth } from '@/context/AuthContext';
import BalanceCard from '@/components/cards/BalanceCard';
import ShortcutButton from '@/components/UI/ShortcutButton';
import TransactionItem from '@/components/items/TransactionItem';

export default function HomeScreen() {
  const { user } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary[600], colors.primary[800]]}
        style={styles.header}
      >
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greeting}>Hello,Thabiso Dibe</Text>
              <Text style={styles.date}>
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <BellRing size={24} color="white" />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
      
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
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
        <BalanceCard 
          balance=" P12,345.67"
          currency="Pula"
          accountNumber="••••4567"
        />
        
        <View style={styles.shortcutsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.shortcuts}>
            <ShortcutButton 
              title="Send Money"
              icon={<ArrowRightCircle size={28} color={colors.secondary[600]} />}
              onPress={() => {}}
            />
            <ShortcutButton 
              title="Top Up"
              icon={<PlusCircle size={28} color={colors.secondary[600]} />}
              onPress={() => {}}
            />
            <ShortcutButton 
              title="Withdraw"
              icon={<TrendingDown size={28} color={colors.secondary[600]} />}
              onPress={() => {}}
            />
            <ShortcutButton 
              title="Pay Bills"
              icon={<Receipt size={28} color={colors.secondary[600]} />}
              onPress={() => {}}
            />
          </View>
        </View>
        
        <View style={styles.recentTransactionsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <TransactionItem 
            title="Salary Deposit"
            date="Today, 09:15 AM"
            amount="+$3,500.00"
            type="credit"
          />
          <TransactionItem 
            title="Electricity Bill"
            date="Yesterday, 02:30 PM"
            amount="-$85.75"
            type="debit"
          />
          <TransactionItem 
            title="Grocery Shopping"
            date="Jul 10, 11:24 AM"
            amount="-$122.50"
            type="debit"
          />
          <TransactionItem 
            title="Online Transfer"
            date="Jul 08, 03:45 PM"
            amount="-$250.00"
            type="debit"
          />
          <TransactionItem 
            title="Refund - Amazon"
            date="Jul 05, 10:20 AM"
            amount="+$45.99"
            type="credit"
          />
        </View>
        
        <View style={styles.insightsContainer}>
          <Text style={styles.sectionTitle}>Spending Insights</Text>
          <View style={styles.insightsCard}>
            <View style={styles.insightHeader}>
              <Text style={styles.insightTitle}>Monthly Overview</Text>
              <View style={styles.trendContainer}>
                <TrendingUp size={16} color={colors.success[500]} />
                <Text style={styles.trendText}>12% from last month</Text>
              </View>
            </View>
            
            <View style={styles.insightCategories}>
              <View style={styles.categoryItem}>
                <View style={[styles.categoryDot, { backgroundColor: colors.primary[500] }]} />
                <Text style={styles.categoryText}>Food & Dining</Text>
                <Text style={styles.categoryAmount}>$567.85</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={[styles.categoryDot, { backgroundColor: colors.secondary[500] }]} />
                <Text style={styles.categoryText}>Transportation</Text>
                <Text style={styles.categoryAmount}>$324.50</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={[styles.categoryDot, { backgroundColor: colors.accent[500] }]} />
                <Text style={styles.categoryText}>Shopping</Text>
                <Text style={styles.categoryAmount}>P892.75</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={[styles.categoryDot, { backgroundColor: colors.error[500] }]} />
                <Text style={styles.categoryText}>Utilities</Text>
                <Text style={styles.categoryAmount}>P245.30</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  header: {
    height: 120,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  date: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.error[500],
    borderWidth: 2,
    borderColor: colors.primary[600],
  },
  content: {
    flex: 1,
    marginTop: -30,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  shortcutsContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 16,
  },
  shortcuts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentTransactionsContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllText: {
    color: colors.primary[600],
    fontWeight: '500',
  },
  insightsContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  insightsCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  insightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[800],
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendText: {
    fontSize: 14,
    color: colors.success[500],
  },
  insightCategories: {
    gap: 12,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  categoryText: {
    flex: 1,
    fontSize: 14,
    color: colors.gray[700],
  },
  categoryAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray[800],
  },
});