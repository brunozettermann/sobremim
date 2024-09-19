import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Espaço para adicionar uma foto do usuário */}
      <Image
        source={require('./minha-foto.png')} // Adicione sua foto como minha-foto.png
        style={styles.profileImage}
      />
      <Text style={styles.title}>Bem-vindo ao Meu App!</Text>

      {/* Links para as outras telas */}
      <Link href="/praias" style={styles.link}>
        Praias
      </Link>
      <Link href="/resenhas" style={styles.link}>
        Resenhas
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 12,
  },
});
