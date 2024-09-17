import { View, Text } from 'react-native';

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: Bruno Zettermann</Text>
      <Text>Idade: 17 anos</Text>
      <Text>Curso: Desenvolvimento de Software</Text>
    </View>
  );
}
