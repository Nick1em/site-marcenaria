'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../style/orcamento.module.css"


export default function CalculaOrcamento () {

    


    const expessuraMDF = 1.8;
    //medidas aplicaveis a varios móveis 
    const [altura , setAltura] = useState(0);
    const [largura  , setLargura ] = useState(0);
    const [profundidade , setProfundidade] = useState(0);

    //divisórias internas?
    const [temDivInterna , setTemDivInterna] = useState('');
    const [divInterna , setDivInterna] = useState(0);

    //prateleiras?
    const [temPrateleiras, setPrateleiras] = useState('');
    const [prateleiras , setPrateleira] = useState(0);

    //Medidas Penteadeira
    const [alturaPenteadeira, setAlturaPenteadeira] = useState(0);
    const [larguraPenteadeira, setLarguraPenteadeira] = useState(0);
    const [profundidadePenteadeira, setProfundidaPenteadeira] = useState(0);

    //portas?
    const [temPortas , setTemPortas] = useState('');
    const [portas , setPortas] = useState(0);

    //gavetas?
    const [temGaveta, setTemGaveta] = useState('');
    const [quantidadeGavetas, setQuantidadeGavetas] = useState(0);

    //Medidas Gavetas
    const [alturaGaveta, setAlturaGaveta] = useState(0);
    const [larguraGaveta, setLarguraGaveta] = useState(0);
    const [profundidadeGaveta, setProfundidadeGaveta] = useState(0);

    const [movel , setMovel] = useState('');

    const [quantidadeMDF , setQuantidadeMDF] = useState(0);
    const [resultado , setResultado] = useState(0);
    

    const calcular = () => {

        //Cálculo das peças de estrutura de armário
        const laterais = (altura * profundidade) * 2;
        const baseTopo = (largura * profundidade) * 2;
        const fundo = altura * largura ;
        const qtdPortas = portas > 0 ? altura * (largura / portas) * portas : 0;
        const qtdPrateleiras = profundidade * largura * prateleiras;

        // Cálculo da divisória vertical (podedia usar o tamanho das laterais para facilitar!)
        const areaDivInterna = (altura - (2 * expessuraMDF)) * profundidade ;

        //Cálculo das gavestas
        const lateraisGaveta = (alturaGaveta * profundidadeGaveta) * 2;
        const freteEtraseira = 2 * (alturaGaveta * (larguraGaveta - 2 * expessuraMDF));
        const fundoGaveta = (larguraGaveta - 2*expessuraMDF) * (profundidadeGaveta - expessuraMDF)
        const areaGaveta = lateraisGaveta + freteEtraseira +fundoGaveta ;
        const totalGaveta = areaGaveta * quantidadeGavetas;

        //Cálculo Penteadeira
        const tampoPenteadeira = larguraPenteadeira * profundidadePenteadeira;
        const lateraisPenteadeira = (alturaPenteadeira * profundidadeGaveta ) * 2;
        const fundoPenteadeira = larguraPenteadeira * (alturaPenteadeira - expessuraMDF );
        const baseInferior = larguraPenteadeira * expessuraMDF; 

        //calculo painel
        const areaPainel = altura * largura

        let areaTotal = 0;

        if (!movel || movel === '') {
        alert('Por favor, selecione um tipo de móvel!');
        return;
        }

        if (movel === 'Guarda-Roupa' || movel === 'Armário para banheiro' || movel === 'Armário para Cozinha Completa' ||
            movel === 'Armário para Cozinha Parte de cima' || movel === 'Armário para Cozinha Parte de baixo' || 
            movel === 'Cômoda' || movel === 'Rack') {
            areaTotal = laterais + baseTopo + fundo + qtdPrateleiras;

            if (temDivInterna === 'sim') {
                areaTotal += areaDivInterna;
            } 

            if (temGaveta === 'sim') {
                areaTotal += totalGaveta;       //TEM QUE ADICINAR A PERGUNTA DE MEDIDA DAS GAVETAS-------
            } 

            if (temPortas === 'sim') {
                areaTotal += qtdPortas;
            }
            
        }

        else if (movel === 'Painel com Rack') {

            let areaRack = laterais + baseTopo + fundo + qtdPrateleiras;
            if (temDivInterna === 'sim') areaRack += areaDivInterna;
            if (temGaveta === 'sim') areaRack += totalGaveta;
            if (temPortas === 'sim') areaRack += qtdPortas;

            areaTotal = areaPainel + areaRack;
        }
    
        else if (movel === 'Penteadeira') {
            areaTotal = tampoPenteadeira + lateraisPenteadeira + fundoPenteadeira + baseInferior
        }

        
        

        //Cálculo da quantidade de MDF que será usado
        
        const areaMetros = areaTotal / 10000;
        const chapasNecessaria = Math.ceil(areaMetros / 4.80) ; //Math.ceil - arredonda os números

        //Cálculo de custos:

        const material = chapasNecessaria * 250; // valor simbólico de MDF! preços reais no próximo commite!
        const maoDeObra = material * 3;         //colocar valor dos parafusos/fitadeborda e cola
        const subtotal = material + maoDeObra;
        const adicionais = Math.floor(subtotal / 100) * 45;
        const total = material + maoDeObra + adicionais;

        

        setResultado(total);
    };

        return (
            <div className={styles.corpo}>
                <div className={styles.container}>
                        
                    <h3 className={styles.titulo}> Faça seu próprio orçamento!!!</h3>

                    <select className={styles.selecao} value={movel} onChange={(e) => setMovel(e.target.value)}>
                         <option className={styles.opticoes} value="">Qual tipo de móvel?</option>
                        <option className={styles.opticoes} value="Guarda-Roupa"> Guarda-Roupa </option>
                        <option className={styles.opticoes} value="Armário para banheiro"> Armário para banheiro</option>
                        <option className={styles.opticoes} value="Armário para Cozinha Completa"> Armário para Cozinha Completa</option>
                        <option className={styles.opticoes} value="Armário para Cozinha Parte de cima"> Armário para Cozinha Parte de cima </option>
                        <option className={styles.opticoes} value="Armário para Cozinha Parte de baixo"> Armário para Cozinha Parte de baixo </option>
                        <option className={styles.opticoes} value="Cômoda"> Cômoda </option>
                        <option className={styles.opticoes} value="Painel"> Painel</option>
                        <option className={styles.opticoes} value="Rack"> Rack </option>
                        <option className={styles.opticoes} value="Painel com Rack"> Painel com Rack </option>
                        <option className={styles.opticoes} value="Penteadeira"> Penteadeira </option>    
                    </select>
  
                    <label className={styles.label}>Altura</label>
                    <input className={styles.input}
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(Number(e.target.value))} 
                    />

                    <label  className={styles.label} >Largura</label>
                    <input  className={styles.input}
                        type="number"
                        value={largura}
                        onChange={(e) => setLargura(Number(e.target.value))}
                    />
                    <label  className={styles.label}>Profundidade</label>
                    <input className={styles.input}
                        type="number"
                        value={profundidade}
                        onChange={(e) => setProfundidade(Number(e.target.value))}
                    />
                    <label  className={styles.label}>Terá Portas?</label>
                    <div>
                        <label>
                            <input type="radio" value="sim" checked={temPortas === 'sim'} onChange={(e) => setTemPortas(e.target.value)} 
                            ></input> Sim
                            {temPortas === 'sim' && (
                                <div>
                                    <label>Quantas</label>
                                    <input type="number" value={portas} onChange={(e) => setPortas (Number(e.target.value))}></input>
                                </div>
                            )}
                        </label>
                        <label style={{marginLeft: '1rem'}}>
                            <input type="radio" value="não" checked={temPortas === 'não'} onChange={(e) => setTemPortas(e.target.value)}>
                            </input> Não
                        </label>
                    </div>

                    <label className={styles.label}>Terá gavetas?</label>
                    <div> 
                        <label>
                            <input type="radio" value="sim" checked={temGaveta === 'sim'} onChange={(e) => setTemGaveta(e.target.value)} 
                            ></input> Sim
                            {temGaveta === 'sim' && (
                                <div>
                                    <label>Quantas</label>
                                    <input type="number" value={quantidadeGavetas} onChange={(e) => setQuantidadeGavetas(Number(e.target.value))}></input>
                                </div>
                            )}
                        </label>
                        <label style={{marginLeft: '1rem'}}>
                            <input type="radio" value="não" checked={temGaveta  === 'não'} onChange={(e) => setTemGaveta(e.target.value)}>
                            </input> Não
                        </label>
                    </div>
                    <button className={styles.botao} onClick={calcular}>Calcular</button>

                    <label> Seu orçamento é de: R$ {resultado.toFixed(2)}</label>

                    <p> ORÇAMENTO FEITO A PARTIR DO MDF MAIS BARATO! PARA UM ORÇAMENTO MAIS PRECISO ENTRE EM CONTATO </p>
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