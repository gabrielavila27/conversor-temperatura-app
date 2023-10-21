import React, {useState} from 'react';
import { View, 
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar
} from 'react-native';

export default function ConversorTemperatura() {
  const[resTemp, setResTemp] = useState('')
  const[resValor1, setResValor1] = useState('')
  const[resValor2, setResValor2] = useState('')
  const[input, setInput] = useState('')

  const pInput = (valor) => {setInput(valor)} 

  let celsius = () => {
    if(input == ''){
      alert("Insira o valor da temperatura atual antes de prosseguir")
    } else{
    let c = Number(input);
    let f = c * 1.8 + 32;
    let k = c + 273;
    setResTemp('Celsius')
    setResValor1(f.toFixed(2) + '°F')
    setResValor2(k.toFixed(2) + 'K')
    setInput('')}
  }

  const fahrenheit = () => {
    if(input == ''){
      alert("Insira o valor da temperatura atual antes de prosseguir")
    } else{
    let f = Number(input);
    let c = (f - 32) / 1.8
    let k = (f - 32) * 5/9 + 273
    setResTemp('Fahrenheit')
    setResValor1(c.toFixed(2) + '°C')
    setResValor2(k.toFixed(2) + 'K')
    setInput('')}
  }

  const kelvin = () => {
    if(input == ''){
      alert("Insira o valor da temperatura atual antes de prosseguir")
    } else{
    let k = Number(input);
    let c = k - 273
    let f = (k - 273) * 1.8 + 32
    setResTemp('Kelvin')
    setResValor1(c.toFixed(2) + '°C')
    setResValor2(f.toFixed(2) + '°F')
    setInput('')}
  }


 return (

   <SafeAreaView style = {styles.Container}>
    <StatusBar/>

    <Text style = {styles.TextoTitulo}>
      CONVERSOR DE TEMPERATURA
    </Text>

    <Text style = {styles.Texto}>
      Valor da temperatura que deseja converter:
      </Text>

    <TextInput style = {styles.TextoInput} keyboardType='decimal-pad' returnKeyType='done' placeholder='Valor da temperatura atual na escala selecionada'
    placeholderTextColor= {'#00000066'} onChangeText = {pInput} value={input}>
    </TextInput>

    <Image source={require('./src/img/thermometer-icon-black-png.png')} style = {styles.Imagem}/>

    <View style = {styles.ViewRes}>
      <Text style = {styles.TextoResTemps}>
        {resValor1}
      </Text>

      <Text style = {styles.TextoResTemps}>
        {resValor2}
      </Text>
    </View>

    <View style = {styles.ViewBotao}>

      <TouchableOpacity style = {styles.Botao} onPress={celsius}>
        <Text style = {styles.TextoBotao}>Celsius</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style = {styles.Botao} onPress={fahrenheit}>
        <Text style = {styles.TextoBotao}>Fahrenheit</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.Botao} onPress={kelvin}>
        <Text style = {styles.TextoBotao}>Kelvin</Text>
      </TouchableOpacity>    
    </View>

    <Text style = {styles.Resultado}> {resTemp} </Text>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#FD1428',
  },
  TextoTitulo:{
    fontSize: 37,
    fontWeight: '600',
    marginTop: '10%'
  },
  Texto: {
    fontSize: 20,
    marginTop: '7%'
  },
  TextoInput:{
    marginTop: '5%',
    borderWidth: 1,
    borderRadius: 100,
    height: '6%',
    width: '89%',
    paddingLeft: '3%',
    fontSize: 16
  
  },
  Imagem:{
    width:'20%',
    height: '25%',
    resizeMode: 'contain',
    marginTop: '12%'
  },
  ViewBotao:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: '6%'
  },
  Botao:{
    borderWidth: 1,
    borderRadius: 20,
    padding: '2.3%',
    width: '32%',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  TextoBotao:{
    fontSize: 23,
    fontWeight: '600',
    color: '#FD9614',
    backgroundColor: '#000000'
  },
  Resultado: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: '15%',
  },
  ViewRes:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '10%',
    width: '100%'
  },
  TextoResTemps: {
    fontSize: 24,
    fontWeight: '700'

  }
})