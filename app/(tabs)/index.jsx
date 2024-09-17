import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Imagem da Guarda do Embaú */}
      <Image
        source={{ uri: 'guarda.png' }} // Insira o URL correto da imagem
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo ao app do aluno!</Text>
      {/* Links estilizados para navegar */}
      <Link href="/about" style={styles.link}>
        Sobre o Aluno
      </Link>
      <Link href="/user/123" style={styles.link}>
        Ver Perfil do Aluno
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#1e90ff',
    marginBottom: 10,
  },
});
