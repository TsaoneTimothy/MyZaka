import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageCircle, CircleHelp as HelpCircle, Phone, ArrowRight, Mail, Search, ChevronDown, ChevronUp } from 'lucide-react-native';
import { colors } from '@/constants/colors';

export default function SupportScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: 'How do I change my PIN?',
      answer: 'You can change your PIN by going to Settings > Security > Change PIN. You will need to enter your current PIN before creating a new one.'
    },
    {
      question: 'What are the transfer limits?',
      answer: 'Daily transfer limits are set at $5,000 for standard accounts and $10,000 for premium accounts. You can request a temporary limit increase through the Settings menu.'
    },
    {
      question: 'How do I report a suspicious transaction?',
      answer: 'If you notice a suspicious transaction, immediately go to Transaction History, find the transaction, tap on it and select "Report Suspicious Activity". You can also contact our support team directly.'
    },
    {
      question: 'Can I use My Zaka internationally?',
      answer: 'Yes, My Zaka works internationally. However, international transactions may incur additional fees. Check the Fees section in Settings for more details.'
    },
    {
      question: 'How long do transfers take to process?',
      answer: 'Internal transfers between My Zaka accounts are instant. Transfers to other banks typically take 1-3 business days depending on the receiving bank and country.'
    },
  ];
  
  const supportOptions = [
    { 
      title: 'Live Chat', 
      description: 'Chat with our support team',
      icon: <MessageCircle size={24} color={colors.primary[600]} />,
      waitTime: '5 min'
    },
    { 
      title: 'Call Us', 
      description: 'Speak with a representative',
      icon: <Phone size={24} color={colors.primary[600]} />,
      waitTime: '10 min'
    },
    { 
      title: 'Email Support', 
      description: 'Send us an email',
      icon: <Mail size={24} color={colors.primary[600]} />,
      waitTime: '24 hrs'
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <Search size={20} color={colors.gray[500]} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help topics"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        <View style={styles.supportOptionsSection}>
          <Text style={styles.sectionTitle}>Contact Support</Text>
          {supportOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.supportOptionCard}>
              <View style={styles.supportOptionIcon}>
                {option.icon}
              </View>
              <View style={styles.supportOptionContent}>
                <Text style={styles.supportOptionTitle}>{option.title}</Text>
                <Text style={styles.supportOptionDescription}>{option.description}</Text>
              </View>
              <View style={styles.supportOptionWaitContainer}>
                <Text style={styles.supportOptionWaitLabel}>Wait time</Text>
                <Text style={styles.supportOptionWaitTime}>{option.waitTime}</Text>
              </View>
              <ArrowRight size={20} color={colors.gray[400]} />
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.faqSection}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          {faqs.map((faq, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.faqItem,
                expandedFaq === index && styles.faqItemExpanded
              ]}
              onPress={() => toggleFaq(index)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                {expandedFaq === index ? (
                  <ChevronUp size={20} color={colors.gray[700]} />
                ) : (
                  <ChevronDown size={20} color={colors.gray[700]} />
                )}
              </View>
              {expandedFaq === index && (
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.helpCenterCard}>
          <HelpCircle size={40} color={colors.primary[600]} />
          <Text style={styles.helpCenterTitle}>Help Center</Text>
          <Text style={styles.helpCenterDescription}>
            Visit our comprehensive Help Center for detailed guides, tutorials, and FAQs
          </Text>
          <TouchableOpacity style={styles.helpCenterButton}>
            <Text style={styles.helpCenterButtonText}>Browse Help Articles</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
  },
  supportOptionsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 16,
  },
  supportOptionCard: {
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
  supportOptionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  supportOptionContent: {
    flex: 1,
  },
  supportOptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: 2,
  },
  supportOptionDescription: {
    fontSize: 14,
    color: colors.gray[600],
  },
  supportOptionWaitContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  supportOptionWaitLabel: {
    fontSize: 12,
    color: colors.gray[500],
  },
  supportOptionWaitTime: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray[800],
  },
  faqSection: {
    marginBottom: 24,
  },
  faqItem: {
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
  faqItemExpanded: {
    backgroundColor: colors.primary[50],
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[800],
  },
  faqAnswer: {
    fontSize: 14,
    color: colors.gray[700],
    lineHeight: 22,
    marginTop: 12,
  },
  helpCenterCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  helpCenterTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
    marginTop: 16,
    marginBottom: 8,
  },
  helpCenterDescription: {
    fontSize: 14,
    color: colors.gray[600],
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  helpCenterButton: {
    backgroundColor: colors.primary[600],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  helpCenterButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});