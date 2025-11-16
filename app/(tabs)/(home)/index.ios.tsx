
import React from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Linking } from "react-native";
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
    <>
      <Stack.Screen
        options={{
          title: "Mosaf - Forever Living",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.text,
        }}
      />
      <View style={styles.container}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/668a1ee9-e010-460e-a019-99d46cf506b5/assets/images/135fb947-8d2d-4e6c-8f0b-25a8882ff3df.jpeg?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=oY%2BP42D7%2F0N%2BCqk2ES0P4m01UsU%3D&Expires=1763398080' }}
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
                  <IconSymbol
                    ios_icon_name="person.circle.fill"
                    android_material_icon_name="account_circle"
                    size={48}
                    color={colors.text}
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
    </>
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
    paddingTop: 20,
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
