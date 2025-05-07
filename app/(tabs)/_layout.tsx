import React from 'react';
import { Tabs } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { LayoutDashboard, Wallet, ArrowRightLeft, Receipt, History, CircleHelp as HelpCircle, Settings } from 'lucide-react-native';
import { colors } from '@/constants/colors';

export default function TabLayout() {
  const { user } = useAuth();

  // If user isn't logged in, redirect to authentication
  if (!user) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary[600],
        tabBarInactiveTintColor: colors.gray[500],
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: colors.gray[200],
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -4,
          marginBottom: 4,
        },
        headerStyle: {
          backgroundColor: colors.primary[600],
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboard size={size} color={color} />
          ),
          headerTitle: 'My Zaka',
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: 'Accounts',
          tabBarIcon: ({ color, size }) => (
            <Wallet size={size} color={color} />
          ),
          headerTitle: 'My Accounts',
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transfer',
          tabBarIcon: ({ color, size }) => (
            <ArrowRightLeft size={size} color={color} />
          ),
          headerTitle: 'Money Transfer',
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, size }) => (
            <Receipt size={size} color={color} />
          ),
          headerTitle: 'Payment Services',
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => (
            <History size={size} color={color} />
          ),
          headerTitle: 'Transaction History',
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: 'Support',
          tabBarIcon: ({ color, size }) => (
            <HelpCircle size={size} color={color} />
          ),
          headerTitle: 'Help & Support',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
          headerTitle: 'Security & Settings',
        }}
      />
    </Tabs>
  );
}