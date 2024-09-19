import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Resenhas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Resenhas</Text>

      <View style={styles.reviewContainer}>
        <Image
          source={require('./resenha1.png')} // Foto da resenha 1
          style={styles.reviewImage}
        />
        <Text style={styles.reviewText}>
          Nos juntamos na casa de um amigo para tomar banho de piscina, almoçar e jogar futmesa.
        </Text>
      </View>

      <View style={styles.reviewContainer}>
        <Image
          source={require('./resenha2.png')} // Foto da resenha 2
          style={styles.reviewImage}
        />
        <Text style={styles.reviewText}>
         A tropa toda matou aula pra ir pra guarda. É praia kkkkkk
        </Text>
      </View>

      <View style={styles.reviewContainer}>
        <Image
          source={require('./resenha3.png')} // Foto da resenha 3
          style={styles.reviewImage}
        />
        <Text style={styles.reviewText}>
        Resenha na celebrate, dj leozin do sf.
        </Text>
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
  reviewContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  reviewImage: {
    width: 300,
    height: 200,
    marginBottom: 8,
  },
  reviewText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});
