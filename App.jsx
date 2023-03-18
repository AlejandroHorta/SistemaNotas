import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Banner from "./components/Banner";
export default function App() {
  //Definir las variables de estado del componente
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [valor4, setValor4] = useState("");
  const [valor5, setValor5] = useState("");
  const [valor6, setValor6] = useState("");
  const [resultado, setResultado] = useState(0);
  const [observacion, setObservacion] = useState("");
  const [esValido, setEsvalido] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Definir los métodos del componente
  let calcular = () => {
    if (valor1 != "" && valor2 != "" && valor6 != "") {
      setEsvalido(true);
      let resulta = parseFloat(valor1 * 0.30 + valor2 * 0.35 + valor6 * 0.35);
      if (resulta >= 3.0) {
        setMensaje("APROBADO");
      } if (resulta <= 2.94) {
        setMensaje("HABILITA");
      } if (resulta < 2.0) {
        setMensaje("REPRUEBA");
      }
      setResultado(resulta);

    } else {
      setEsvalido(false);
      setMensaje("Calculo no realizado");
    }
  };

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <View
        style={[
          styles.container,
          styles.views,
          {
            flex: 1,
            backgroundColor: "powederblue",
            width: "100%",
            height: "100%",
            borderColor: "black",
          },
        ]}
      >
        <Banner name="Noticas"></Banner>
      </View>
      <View
        style={[
          styles.container,
          styles.views,
          {
            flex: 3,
            backgroundColor: "#F7FAED",
            width: "100%",
            height: "100%",
            borderColor: "black",
          },
        ]}
      >
        <TextInput
          placeholder="Identificacion"
          style={styles.inputs}
          onChangeText={(valor3) => setValor3(valor3)}
          value={valor3}
        ></TextInput>
        <TextInput
          placeholder="Nombre"
          style={styles.inputs}
          onChangeText={(valor4) => setValor4(valor4)}
          value={valor4}
        ></TextInput>
        <TextInput
          placeholder="Asignatura"
          style={styles.inputs}
          onChangeText={(valor5) => setValor5(valor5)}
          value={valor5}
        ></TextInput>
        <TextInput
          placeholder="Nota 1 (30%)"
          style={styles.inputs}
          onChangeText={(valor1) => setValor1(valor1)}
          value={valor1}
        ></TextInput>
        <TextInput
          placeholder="Nota 2 (35%)"
          style={styles.inputs}
          onChangeText={(valor2) => setValor2(valor2)}
          value={valor2}
        ></TextInput>
        <TextInput
          placeholder="Nota 3 (35%)"
          style={styles.inputs}
          onChangeText={(valor6) => setValor6(valor6)}
          value={valor6}
        ></TextInput>
        <Text>Resultado</Text>
        <Text
          style={[styles.inputs, { color: "blue", fontWeight: "bold" }]}
          onChangeText={(resultado) => setResultado(resultado)}
        >
          {resultado.toFixed(2)}
        </Text>
        <Text>Observación</Text>
        <Text
          style={[styles.inputs, { color: "blue", fontWeight: "bold" }]}
          onChangeText={(observacion) => setObservacion(observacion)}
        >
          {mensaje}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "blue",
              },
              styles.buttons,
            ]}
            onPress={() => calcular("+")}
          >
            <Text style={styles.textsTouchables}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "blue",
              },
              styles.buttons,
            ]}
            onPress={() => {
              setValor1("");
              setValor2("");
              setValor3("");
              setValor4("");
              setValor5("");
              setValor6("");
              setResultado(0);
              setMensaje("");
            }}
          >
            <Text style={styles.textsTouchables}>Limpiar</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "blue",
              },
              styles.buttons,
            ]}
            onPress={() => {
            }}
          >
            <Text style={styles.textsTouchables}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  views: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  inputs: {
    borderRadius: 10,
    padding: 10,
    width: 150,
    borderWidth: 2,
    borderColor: "blue",
    textAlign: "center",
    marginTop: 10,
  },
  buttons: {
    borderRadius: 10,
    padding: 5,
    width: 80,
    opacity: 0.5,
    marginLeft: 10,
  },
  textsTouchables: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});