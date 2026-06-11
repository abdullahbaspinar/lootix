import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';

export function HelpSupportScreen({ navigation }: any) {
  const goBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Üst Bar */}
      <View style={styles.headerBar}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Text style={styles.backArrow}>〈 Geri</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Yardım & Destek</Text>

        <Text style={styles.text}>
          Lootix uygulaması ile ilgili her türlü soru, öneri ve destek talepleriniz
          için bizimle iletişime geçebilirsiniz.
        </Text>
        <Text style={styles.text}>
          Ekibimiz en kısa sürede size geri dönüş yapacaktır.
        </Text>
        <Text style={styles.email}>abdullahbaspinar@gmail.com</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headerBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#A6A6A6',
  },
  backButton: {
    padding: 8,
  },
  backArrow: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    paddingBottom: 40,
    paddingTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 32,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: '#1A1A1A',
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  email: {
    fontSize: 16,
    fontWeight: '600',
    color: '#BF0909',
    textAlign: 'center',
    marginTop: 8,
  },
});