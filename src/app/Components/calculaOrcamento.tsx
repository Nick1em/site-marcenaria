'use client'
import Link from "next/link";
import { useState } from "react";
import styles from "../style/orcamento.module.css"


export default function CalculaOrcamento () {


    const [altura , setAltura] = useState(0);
    const [largura  , setLargura ] = useState(0);
    const [profundidade , setProfundidade] = useState(0);
    const [prateleiras , setPrateleira] = useState(0);
    const [portas , setPortas] = useState(0);
    const [resultado , setResultado] = useState(0);
    const [quantidadeMDF , setQuantidadeMDF] = useState(0);
    

    const calcular = () => {

        //Cálculo das peças 
        const laterais = altura * profundidade * 2;
        const baseTopo = largura * profundidade * 2;
        const fundo = altura * largura ;
        const qtdPortas = portas > 0 ? altura * (largura / portas) * portas : 0;
        const qtdPrateleiras = profundidade * largura * prateleiras;

        //Cálculo da quantidade de MDF que será usado
        const areaTotal = laterais + baseTopo + fundo + qtdPortas + qtdPrateleiras;
        const areaMetros = areaTotal / 10000;
        const chapasNecessaria = Math.ceil(areaMetros / 4.80) ; //Math.ceil - arredonda os números


        //Cálculo de custos:

        const material = chapasNecessaria * 250; // valor simbólico de MDF! preços reais no próximo commite!
        const maoDeObra = material * 3;
        const total = material + maoDeObra;

        setResultado(total);
    };

        return (
            <div className={styles.corpo}>
                <div className={styles.container}>
                        
                    <h3 className={styles.titulo}> Faça seu próprio orçamento!!!</h3>

                    <input
                        className={styles.input} 
                        id="altura"
                        type='number' 
                        placeholder="          Digite a altura em centimetros"  
                        onChange={e => setAltura(Number(e.target.value))}
                    /> 
                    <br/>

                    <input 
                        className={styles.input} 
                        id="largura" 
                        type='number'  
                        placeholder="          Digite a largura em centimetro" 
                        onChange={e => setLargura(Number(e.target.value))} 
                    />  
                    <br/>

                    <input 
                        className={styles.input} 
                        id="profundidade" 
                        type='number' 
                        placeholder="          Digite a profundidade em centimetros" 
                        onChange={e => setProfundidade(Number(e.target.value))}
                    /> 
                    <br/>

                    <input 
                        className={styles.input} 
                        id="prateleiras" 
                        type='number'  
                        placeholder="          Quantas prateleiras?" 
                        onChange={e => setPrateleira(Number(e.target.value))} 
                    /> 
                    <br/>

                    <input 
                        className={styles.input} 
                        id="portas" 
                        type='number' 
                        placeholder="          Quantas portas?" 
                        onChange={e => setPortas(Number(e.target.value))} 
                    /> 
                    <br/>

                    <button className={styles.botao} type="button" onClick={calcular}>Calcular</button>
                    
                    <p className={styles.valorOrcamento}> Seu orçamento é de: {resultado.toFixed(2)} R$</p> 
    
                </div>
            </div>
        )
}

   


    

 





// Para calcular o orçamento de quanto material usamos as seguinte formulas:
//laterais: altura * profundidade * 2 = 
//Base e topo: comprimento * profundidade * 2 =
//Fundo: cumprimento * altura = 
//Portas: altura *(largura/por quantidade de portas) = 
//Prateleiras: profundidade * largura * a quantidade de prateleiras=  -> quando não tem divisórias
//divisória: é só pegar o resultado de laterais * (quantidade de divisória - 1) =
//Prateleiras com divisória: profundidade * (largura / quantidade de divisóerias ) * a quantidade de prateleiras

//Somar o resultado em M2 e depois dividir por 4,8 M2 do MDF = Quantidade de MDF que será usado para fazer o móvel

// PRECISO DE UM INPUT DE LARGURA E ALTURA INICIALMENTE!