import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function UserProfile() {
  const { id } = useLocalSearchParams(); // Captura o ID da URL
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil do Usuário: {id}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
