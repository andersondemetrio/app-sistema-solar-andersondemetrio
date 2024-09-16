import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { planetas } from "./planetas";
import { Planet } from './Planet';

export default function App() {
  const [planetaSelecionado, setPlanetaSelecionado] = useState(null);

  const selecionarPlaneta = (planeta) => {
    setPlanetaSelecionado(planeta);
  };

  return (
    <SafeAreaView style={styles.area}>
      <StatusBar style="light" />

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Explore o Sistema Solar</Text>
      </View>

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.conteudoScroll}>
          {planetaSelecionado ? (
            <Planet {...planetaSelecionado} />
          ) : (
            <Text style={styles.textoInstrucao}>Selecione um planeta abaixo para ver os detalhes.</Text>
          )}
        </ScrollView>

        <View style={styles.containerScrollHorizontal}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {planetas.map((planeta) => (
              <TouchableOpacity
                key={planeta.nome}
                onPress={() => selecionarPlaneta(planeta)}
                style={styles.containerPlaneta}
                accessibilityLabel={`Selecionar o planeta ${planeta.nome}`}
              >
                <Image source={{ uri: planeta.img }} style={styles.imagemPlaneta} />
                <Text style={styles.nomePlaneta}>{planeta.nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const colors = {
  background: "#0B0C1E",
  headerBackground: "#1F1F43",
  white: "#FFF",
  gold: "#FFD700",
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: 40,
  },
  cabecalho: {
    backgroundColor: colors.headerBackground,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  textoCabecalho: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  conteudoScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoInstrucao: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  containerScrollHorizontal: {
    paddingVertical: 10,
    backgroundColor: colors.headerBackground,
  },
  containerPlaneta: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imagemPlaneta: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.gold,
  },
  nomePlaneta: {
    color: colors.white,
    fontSize: 14,
    marginTop: 5,
  },
});
