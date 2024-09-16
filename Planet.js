import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Detalhe = ({ etiqueta, valor, unidade }) => (
  <View style={styles.espacoCard}>
    <Text style={styles.textoEtiquetaCard}>{etiqueta}:</Text>
    <Text style={styles.textoValorCard}>{valor} {unidade}</Text>
  </View>
);

export function Planet({ nome, img, descricao, velocidadeOrbitalMediaKmS, quantidadeSatelites, areaSuperficieKm2, periodoRotacaoDias }) {
  return (
    <View style={styles.containerCentro}>
      <Text style={styles.tituloTextoCard}>{nome}</Text>
      
      <Image
        source={{ uri: img }}
        style={styles.imagemCard}
        accessibilityLabel={`Imagem do planeta ${nome}`}
        accessibilityRole="image"
      />
      
      <View style={styles.containerTexto}>
        <Text style={styles.descricaoTextoCard}>{descricao}</Text>
      </View>
      
      <Detalhe etiqueta="Velocidade Orbital Média" valor={velocidadeOrbitalMediaKmS} unidade="km/s" />
      <Detalhe etiqueta="Satélites" valor={quantidadeSatelites} />
      <Detalhe etiqueta="Área de Superfície" valor={areaSuperficieKm2} unidade="km²" />
      <Detalhe etiqueta="Período de Rotação" valor={periodoRotacaoDias} unidade="dias" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerCentro: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 15,
    backgroundColor: "#111", 
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  tituloTextoCard: {
    color: "#FFF", 
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  containerTexto: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  descricaoTextoCard: {
    color: "#FFF", 
    fontSize: 16,
    textAlign: "center",
  },
  espacoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 8,
  },
  imagemCard: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 20,
  },
  textoEtiquetaCard: {
    color: "#A9A9A9", 
    fontSize: 17,
  },
  textoValorCard: {
    color: "#FFD700", 
    fontSize: 17,
    fontWeight: "bold",
  },
});
