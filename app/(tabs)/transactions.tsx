import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, User, Building2, Phone, ArrowRight } from 'lucide-react-native';
import { colors } from '@/constants/colors';

export default function TransactionsScreen() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [transferType, setTransferType] = useState<'mobile' | 'bank' | 'contact'>('mobile');
  
  const handleTransferTypeChange = (type: 'mobile' | 'bank' | 'contact') => {
    setTransferType(type);
  };
  
  const handleAmountChange = (text: string) => {
    // Remove any non-numeric characters
    const numericValue = text.replace(/[^0-9.]/g, '');
    setAmount(numericValue);
  };
  
  const handleContinue = () => {
    // Handle continue logic
    console.log('Continue with:', { amount, recipient, transferType });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <View style={styles.content}>
          <View style={styles.amountSection}>
            <Text style={styles.amountLabel}>Enter Amount</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.currencySymbol}>$</Text>
              <TextInput
                style={styles.amountInput}
                keyboardType="numeric"
                placeholder="0.00"
                value={amount}
                onChangeText={handleAmountChange}
              />
            </View>
            <Text style={styles.balanceText}>Available Balance: $12,345.67</Text>
          </View>
          
          <View style={styles.transferTypeSection}>
            <Text style={styles.sectionTitle}>Transfer To</Text>
            <View style={styles.transferTypeContainer}>
              <TouchableOpacity
                style={[
                  styles.transferTypeButton,
                  transferType === 'mobile' && styles.transferTypeButtonActive
                ]}
                onPress={() => handleTransferTypeChange('mobile')}
              >
                <Phone
                  size={24}
                  color={transferType === 'mobile' ? colors.primary[600] : colors.gray[500]}
                />
                <Text
                  style={[
                    styles.transferTypeText,
                    transferType === 'mobile' && styles.transferTypeTextActive
                  ]}
                >
                  Mobile
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.transferTypeButton,
                  transferType === 'bank' && styles.transferTypeButtonActive
                ]}
                onPress={() => handleTransferTypeChange('bank')}
              >
                <Building2
                  size={24}
                  color={transferType === 'bank' ? colors.primary[600] : colors.gray[500]}
                />
                <Text
                  style={[
                    styles.transferTypeText,
                    transferType === 'bank' && styles.transferTypeTextActive
                  ]}
                >
                  Bank
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.transferTypeButton,
                  transferType === 'contact' && styles.transferTypeButtonActive
                ]}
                onPress={() => handleTransferTypeChange('contact')}
              >
                <User
                  size={24}
                  color={transferType === 'contact' ? colors.primary[600] : colors.gray[500]}
                />
                <Text
                  style={[
                    styles.transferTypeText,
                    transferType === 'contact' && styles.transferTypeTextActive
                  ]}
                >
                  Contact
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.recipientSection}>
            <Text style={styles.sectionTitle}>Recipient</Text>
            <View style={styles.searchContainer}>
              <Search size={20} color={colors.gray[500]} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder={`Search ${transferType === 'mobile' ? 'phone number' : transferType === 'bank' ? 'bank account' : 'contact'}`}
                value={recipient}
                onChangeText={setRecipient}
              />
            </View>
            
            <ScrollView style={styles.recipientList}>
              {transferType === 'mobile' && (
                <>
                  <TouchableOpacity style={styles.recipientItem}>
                    <View style={styles.recipientAvatar}>
                      <Text style={styles.recipientInitial}>J</Text>
                    </View>
                    <View style={styles.recipientInfo}>
                      <Text style={styles.recipientName}>John Smith</Text>
                      <Text style={styles.recipientDetail}>+1 (555) 123-4567</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.recipientItem}>
                    <View style={styles.recipientAvatar}>
                      <Text style={styles.recipientInitial}>S</Text>
                    </View>
                    <View style={styles.recipientInfo}>
                      <Text style={styles.recipientName}>Sarah Johnson</Text>
                      <Text style={styles.recipientDetail}>+1 (555) 987-6543</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
              
              {transferType === 'bank' && (
                <>
                  <TouchableOpacity style={styles.recipientItem}>
                    <View style={[styles.recipientAvatar, { backgroundColor: colors.secondary[100] }]}>
                      <Text style={[styles.recipientInitial, { color: colors.secondary[600] }]}>C</Text>
                    </View>
                    <View style={styles.recipientInfo}>
                      <Text style={styles.recipientName}>Chase Bank</Text>
                      <Text style={styles.recipientDetail}>Acc: ****5678</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.recipientItem}>
                    <View style={[styles.recipientAvatar, { backgroundColor: colors.secondary[100] }]}>
                      <Text style={[styles.recipientInitial, { color: colors.secondary[600] }]}>W</Text>
                    </View>
                    <View style={styles.recipientInfo}>
                      <Text style={styles.recipientName}>Wells Fargo</Text>
                      <Text style={styles.recipientDetail}>Acc: ****9012</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
              
              {transferType === 'contact' && (
                <>
                  <TouchableOpacity style={styles.recipientItem}>
                    <View style={[styles.recipientAvatar, { backgroundColor: colors.accent[100] }]}>
                      <Text style={[styles.recipientInitial, { color: colors.accent[600] }]}>M</Text>
                    </View>
                    <View style={styles.recipientInfo}>
                      <Text style={styles.recipientName}>Michael Brown</Text>
                      <Text style={styles.recipientDetail}>Last transfer: Yesterday</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.recipientItem}>
                    <View style={[styles.recipientAvatar, { backgroundColor: colors.accent[100] }]}>
                      <Text style={[styles.recipientInitial, { color: colors.accent[600] }]}>E</Text>
                    </View>
                    <View style={styles.recipientInfo}>
                      <Text style={styles.recipientName}>Emily Davis</Text>
                      <Text style={styles.recipientDetail}>Last transfer: Jul 10</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
              
              <TouchableOpacity style={styles.newRecipientButton}>
                <Text style={styles.newRecipientText}>+ Add New Recipient</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        
        <View style={styles.footer}>
          <TouchableOpacity 
            style={[
              styles.continueButton,
              (!amount || !recipient) && styles.continueButtonDisabled
            ]}
            onPress={handleContinue}
            disabled={!amount || !recipient}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
            <ArrowRight size={20} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  amountSection: {
    marginBottom: 30,
  },
  amountLabel: {
    fontSize: 16,
    color: colors.gray[600],
    marginBottom: 8,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.primary[600],
    paddingBottom: 8,
  },
  currencySymbol: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.gray[800],
    marginRight: 4,
  },
  amountInput: {
    flex: 1,
    fontSize: 32,
    fontWeight: '600',
    color: colors.gray[800],
  },
  balanceText: {
    marginTop: 8,
    fontSize: 14,
    color: colors.gray[500],
  },
  transferTypeSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 16,
  },
  transferTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transferTypeButton: {
    width: '30%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.gray[100],
    alignItems: 'center',
  },
  transferTypeButtonActive: {
    backgroundColor: colors.primary[50],
  },
  transferTypeText: {
    marginTop: 8,
    color: colors.gray[600],
    fontWeight: '500',
  },
  transferTypeTextActive: {
    color: colors.primary[600],
  },
  recipientSection: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  recipientList: {
    flex: 1,
  },
  recipientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  recipientAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  recipientInitial: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary[600],
  },
  recipientInfo: {
    flex: 1,
  },
  recipientName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 4,
  },
  recipientDetail: {
    fontSize: 14,
    color: colors.gray[500],
  },
  newRecipientButton: {
    padding: 16,
    alignItems: 'center',
  },
  newRecipientText: {
    color: colors.primary[600],
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  continueButton: {
    backgroundColor: colors.primary[600],
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  continueButtonDisabled: {
    backgroundColor: colors.gray[300],
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});