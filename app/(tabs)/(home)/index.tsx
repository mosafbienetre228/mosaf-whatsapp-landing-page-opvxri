
import React from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Linking, Platform } from "react-native";
import { colors } from "@/styles/commonStyles";
import { agents, Agent } from "@/components/homeData";
import { IconSymbol } from "@/components/IconSymbol";

export default function HomeScreen() {
  const openWhatsApp = async (agent: Agent) => {
    const phoneNumber = agent.phoneNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Bonjour, je souhaite discuter avec ${agent.name}`);
    const url = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log('WhatsApp is not installed');
        const webUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.log('Error opening WhatsApp:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/6e773e50-3077-42f1-8b07-b4a0828ede31.jpeg')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeTitle}>Bienvenue chez Mosaf</Text>
          <Text style={styles.subtitle}>(Forever Living Products)</Text>
          <Text style={styles.description}>
            Veuillez sélectionner un contact WhatsApp pour discuter.
          </Text>
        </View>

        <View style={styles.agentsList}>
          {agents.map((agent, index) => (
            <TouchableOpacity
              key={index}
              style={styles.agentCard}
              onPress={() => openWhatsApp(agent)}
              activeOpacity={0.7}
            >
              <View style={styles.agentIconContainer}>
                <Image
                  source={require('@/assets/images/6e773e50-3077-42f1-8b07-b4a0828ede31.jpeg')}
                  style={styles.agentIcon}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.agentInfo}>
                <Text style={styles.agentName}>{agent.name}</Text>
                <Text style={styles.agentPhone}>{agent.phoneNumber}</Text>
              </View>
              <View style={styles.whatsappIconContainer}>
                <IconSymbol
                  ios_icon_name="message.fill"
                  android_material_icon_name="chat"
                  size={28}
                  color={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'android' ? 48 : 20,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 20,
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  agentsList: {
    width: '100%',
  },
  agentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  agentIconContainer: {
    marginRight: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  agentIcon: {
    width: '100%',
    height: '100%',
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  agentPhone: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  whatsappIconContainer: {
    backgroundColor: colors.highlight,
    borderRadius: 24,
    padding: 8,
  },
});
