import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filter, Download, ArrowUpRight, ArrowDownLeft, Search } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import TransactionItem from '@/components/items/TransactionItem';

export default function HistoryScreen() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilterModal, setShowFilterModal] = useState(false);
  
  const transactions = [
    { id: '1', title: 'Salary Deposit', date: 'Today, 09:15 AM', amount: '+$3,500.00', type: 'credit' },
    { id: '2', title: 'Electricity Bill', date: 'Yesterday, 02:30 PM', amount: '-$85.75', type: 'debit' },
    { id: '3', title: 'Grocery Shopping', date: 'Jul 10, 11:24 AM', amount: '-$122.50', type: 'debit' },
    { id: '4', title: 'Online Transfer', date: 'Jul 08, 03:45 PM', amount: '-$250.00', type: 'debit' },
    { id: '5', title: 'Refund - Amazon', date: 'Jul 05, 10:20 AM', amount: '+$45.99', type: 'credit' },
    { id: '6', title: 'ATM Withdrawal', date: 'Jul 03, 04:30 PM', amount: '-$200.00', type: 'debit' },
    { id: '7', title: 'Coffee Shop', date: 'Jul 02, 08:15 AM', amount: '-$4.75', type: 'debit' },
    { id: '8', title: 'Monthly Interest', date: 'Jul 01, 12:00 AM', amount: '+$12.38', type: 'credit' },
    { id: '9', title: 'Gas Station', date: 'Jun 28, 05:45 PM', amount: '-$48.22', type: 'debit' },
    { id: '10', title: 'Restaurant Dinner', date: 'Jun 26, 07:30 PM', amount: '-$76.50', type: 'debit' },
  ];
  
  const filteredTransactions = activeFilter === 'all' 
    ? transactions 
    : transactions.filter(t => 
        activeFilter === 'credit' 
          ? t.type === 'credit' 
          : t.type === 'debit'
      );
  
  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
        <View style={styles.filterButtons}>
          <TouchableOpacity 
            style={[
              styles.filterButton,
              activeFilter === 'all' && styles.filterButtonActive
            ]}
            onPress={() => setActiveFilter('all')}
          >
            <Text 
              style={[
                styles.filterButtonText,
                activeFilter === 'all' && styles.filterButtonTextActive
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.filterButton,
              activeFilter === 'credit' && styles.filterButtonActive
            ]}
            onPress={() => setActiveFilter('credit')}
          >
            <ArrowDownLeft 
              size={16} 
              color={activeFilter === 'credit' ? colors.primary[600] : colors.gray[600]} 
              style={styles.filterButtonIcon}
            />
            <Text 
              style={[
                styles.filterButtonText,
                activeFilter === 'credit' && styles.filterButtonTextActive
              ]}
            >
              Income
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.filterButton,
              activeFilter === 'debit' && styles.filterButtonActive
            ]}
            onPress={() => setActiveFilter('debit')}
          >
            <ArrowUpRight 
              size={16} 
              color={activeFilter === 'debit' ? colors.primary[600] : colors.gray[600]} 
              style={styles.filterButtonIcon}
            />
            <Text 
              style={[
                styles.filterButtonText,
                activeFilter === 'debit' && styles.filterButtonTextActive
              ]}
            >
              Expense
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={toggleFilterModal}>
            <Filter size={20} color={colors.gray[700]} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Search size={20} color={colors.gray[700]} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Download size={20} color={colors.gray[700]} />
          </TouchableOpacity>
        </View>
      </View>
      
      <FlatList
        data={filteredTransactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TransactionItem
            title={item.title}
            date={item.date}
            amount={item.amount}
            type={item.type as 'credit' | 'debit'}
            onPress={() => {}}
            showReverseOption={item.type === 'debit'}
          />
        )}
        contentContainerStyle={styles.transactionsList}
      />
      
      {showFilterModal && (
        <View style={styles.filterModal}>
          <View style={styles.filterModalContent}>
            <Text style={styles.filterModalTitle}>Filter Transactions</Text>
            
            <Text style={styles.filterModalLabel}>Date Range</Text>
            <View style={styles.dateRangeButtons}>
              <TouchableOpacity style={[styles.dateRangeButton, styles.dateRangeButtonActive]}>
                <Text style={styles.dateRangeButtonTextActive}>All Time</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dateRangeButton}>
                <Text style={styles.dateRangeButtonText}>This Month</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dateRangeButton}>
                <Text style={styles.dateRangeButtonText}>Last 7 Days</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dateRangeButton}>
                <Text style={styles.dateRangeButtonText}>Custom</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.filterModalLabel}>Transaction Type</Text>
            <View style={styles.transactionTypeButtons}>
              <TouchableOpacity style={[styles.transactionTypeButton, styles.transactionTypeButtonActive]}>
                <Text style={styles.transactionTypeButtonTextActive}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.transactionTypeButton}>
                <Text style={styles.transactionTypeButtonText}>Transfers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.transactionTypeButton}>
                <Text style={styles.transactionTypeButtonText}>Bills</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.transactionTypeButton}>
                <Text style={styles.transactionTypeButtonText}>Purchases</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.filterModalActions}>
              <TouchableOpacity 
                style={styles.filterModalCancelButton}
                onPress={toggleFilterModal}
              >
                <Text style={styles.filterModalCancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.filterModalApplyButton}>
                <Text style={styles.filterModalApplyButtonText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  filterButtons: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: colors.gray[100],
  },
  filterButtonActive: {
    backgroundColor: colors.primary[50],
  },
  filterButtonIcon: {
    marginRight: 4,
  },
  filterButtonText: {
    color: colors.gray[600],
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: colors.primary[600],
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  transactionsList: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  filterModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  filterModalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  filterModalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 20,
  },
  filterModalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[700],
    marginBottom: 12,
  },
  dateRangeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    gap: 8,
  },
  dateRangeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.gray[100],
    marginRight: 8,
    marginBottom: 8,
  },
  dateRangeButtonActive: {
    backgroundColor: colors.primary[50],
  },
  dateRangeButtonText: {
    color: colors.gray[600],
  },
  dateRangeButtonTextActive: {
    color: colors.primary[600],
    fontWeight: '600',
  },
  transactionTypeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
    gap: 8,
  },
  transactionTypeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.gray[100],
    marginRight: 8,
    marginBottom: 8,
  },
  transactionTypeButtonActive: {
    backgroundColor: colors.primary[50],
  },
  transactionTypeButtonText: {
    color: colors.gray[600],
  },
  transactionTypeButtonTextActive: {
    color: colors.primary[600],
    fontWeight: '600',
  },
  filterModalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterModalCancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray[300],
    flex: 1,
    marginRight: 12,
    alignItems: 'center',
  },
  filterModalCancelButtonText: {
    color: colors.gray[700],
    fontWeight: '600',
  },
  filterModalApplyButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: colors.primary[600],
    flex: 1,
    alignItems: 'center',
  },
  filterModalApplyButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});