import React from "react";
import { useState } from "react";
import Resultado from "./Resultado";

export default function Calculadora(){
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')

  const calcular = ()=>{
    const alt = altura/100
    const imc = peso / (alt*alt)

    if(imc < 18.5){
      setMensagem(`Atenção! Seu IMC é ${imc.toFixed(1)} e você está abaixo do peso ideal.`)
    }
    if(imc >= 18.5 && imc <= 24.9){
      setMensagem(`Parabéns! Seu IMC é ${imc.toFixed(1)} e você está no peso ideal.`)
    }
    if(imc >= 25){
      setMensagem(`Atenção! Seu IMC é ${imc.toFixed(1)} e você está acima do peso ideal.`)
    }

    setPeso('')
    setAltura('')
 }

  return(
    <div className="app">
      <div className="calculadora">
        <h1>Calculadora IMC</h1>

        <input type='text' placeholder="Digite seu peso em  kg (ex:80)"
        value={peso} onChange={(e)=> setPeso(e.target.value)}></input>

        <input type='text' placeholder="Digite sua altura em cm (ex:190)"
        value={altura} onChange={(e)=> setAltura(e.target.value)}></input>

        <button onClick={calcular}>Calcular</button>
      </div>
      <div className="resultado">
        <Resultado mensagem={mensagem}/>
      </div>
    </div>
  )
}