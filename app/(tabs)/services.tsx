import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Zap, Wifi, PhoneCall, ShoppingBag, Tv, Fuel, GraduationCap, Ticket, Gift, Car } from 'lucide-react-native';
import { colors } from '@/constants/colors';

export default function ServicesScreen() {
  const serviceCategories = [
    {
      title: 'Utilities',
      items: [
        { name: 'Electricity', icon: <Zap size={24} color={colors.primary[600]} /> },
        { name: 'Internet', icon: <Wifi size={24} color={colors.secondary[600]} /> },
        { name: 'Mobile Airtime', icon: <PhoneCall size={24} color={colors.accent[600]} /> },
      ]
    },
    {
      title: 'Shopping',
      items: [
        { name: 'Online Shopping', icon: <ShoppingBag size={24} color={colors.primary[600]} /> },
        { name: 'TV Subscriptions', icon: <Tv size={24} color={colors.secondary[600]} /> },
        { name: 'Fuel', icon: <Fuel size={24} color={colors.accent[600]} /> },
      ]
    },
    {
      title: 'Others',
      items: [
        { name: 'Education', icon: <GraduationCap size={24} color={colors.primary[600]} /> },
        { name: 'Entertainment', icon: <Ticket size={24} color={colors.secondary[600]} /> },
        { name: 'Gift Cards', icon: <Gift size={24} color={colors.accent[600]} /> },
        { name: 'Vehicle Insurance', icon: <Car size={24} color={colors.error[600]} /> },
      ]
    }
  ];
  
  const popularServices = [
    { name: 'Electricity Bill', amount: '$85.75', dueDate: 'Due in 3 days', icon: <Zap size={24} color="white" /> },
    { name: 'Internet Plan', amount: '$65.99', dueDate: 'Due tomorrow', icon: <Wifi size={24} color="white" /> },
    { name: 'Mobile Recharge', amount: '$20.00', dueDate: 'Auto-payment on', icon: <PhoneCall size={24} color="white" /> },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.popularServicesContainer}
          >
            {popularServices.map((service, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.popularServiceCard,
                  { backgroundColor: index === 0 ? colors.primary[600] : index === 1 ? colors.secondary[600] : colors.accent[600] }
                ]}
              >
                <View style={styles.popularServiceIconContainer}>
                  {service.icon}
                </View>
                <Text style={styles.popularServiceName}>{service.name}</Text>
                <Text style={styles.popularServiceAmount}>{service.amount}</Text>
                <Text style={styles.popularServiceDueDate}>{service.dueDate}</Text>
                <TouchableOpacity style={styles.payNowButton}>
                  <Text style={styles.payNowButtonText}>Pay Now</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        {serviceCategories.map((category, categoryIndex) => (
          <View key={categoryIndex} style={styles.categorySection}>
            <Text style={styles.sectionTitle}>{category.title}</Text>
            <View style={styles.servicesGrid}>
              {category.items.map((service, serviceIndex) => (
                <TouchableOpacity 
                  key={serviceIndex} 
                  style={styles.serviceCard}
                >
                  <View style={styles.serviceIconContainer}>
                    {service.icon}
                  </View>
                  <Text style={styles.serviceName}>{service.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        
        <View style={styles.requestSection}>
          <Text style={styles.requestTitle}>Can't find what you're looking for?</Text>
          <Text style={styles.requestDescription}>
            Request a new payment service and we'll add it to the app.
          </Text>
          <TouchableOpacity style={styles.requestButton}>
            <Text style={styles.requestButtonText}>Request New Service</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  content: {
    flex: 1,
    padding: 20,
  },
  popularSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 16,
  },
  popularServicesContainer: {
    paddingRight: 20,
  },
  popularServiceCard: {
    width: 220,
    borderRadius: 16,
    padding: 20,
    marginRight: 16,
  },
  popularServiceIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  popularServiceName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  popularServiceAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  popularServiceDueDate: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 16,
  },
  payNowButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  payNowButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  categorySection: {
    marginBottom: 30,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  serviceIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray[800],
    textAlign: 'center',
  },
  requestSection: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  requestTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 8,
  },
  requestDescription: {
    fontSize: 14,
    color: colors.gray[600],
    textAlign: 'center',
    marginBottom: 16,
  },
  requestButton: {
    backgroundColor: colors.primary[600],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  requestButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});