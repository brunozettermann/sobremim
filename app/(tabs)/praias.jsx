import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Praias() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Praias</Text>

      <View style={styles.praiaContainer}>
        <Image
          source={require('./guarda.png')} // Imagem da Guarda do Embaú
          style={styles.praiaImage}
        />
        <Text style={styles.praiaText}>Guarda do Embaú</Text>
      </View>

      <View style={styles.praiaContainer}>
        <Image
          source={require('./campeche.png')} // Imagem do Campeche
          style={styles.praiaImage}
        />
        <Text style={styles.praiaText}>Campeche</Text>
      </View>

      <View style={styles.praiaContainer}>
        <Image
          source={require('./praiadecima.png')} // Imagem da Praia de Cima
          style={styles.praiaImage}
        />
        <Text style={styles.praiaText}>Praia de Cima, Pinheira</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  praiaContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  praiaImage: {
    width: 300,
    height: 200,
    marginBottom: 8,
  },
  praiaText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
