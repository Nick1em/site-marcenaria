'use client'

import { useState } from "react";
import styles from '../../style/orcamento.module.css';


export default function antigaCalculadoraPrincipal() {


    const expessuraMDF = 1.8;
    //medidas aplicaveis a varios móveis 
    const [altura, setAltura] = useState("");
    const [largura, setLargura] = useState("");
    const [profundidade, setProfundidade] = useState("");

    //divisórias internas?
    const [temDivInterna, setTemDivInterna] = useState('');
    const [divInterna, setDivInterna] = useState("");

    //prateleiras?
    //const [temPrateleiras, setPrateleiras] = useState('');
    //const [prateleiras, setPrateleira] = useState("");

    //Medidas Penteadeira
    //const [alturaPenteadeira, setAlturaPenteadeira] = useState(0);
    //const [larguraPenteadeira, setLarguraPenteadeira] = useState(0);
    //const [profundidadePenteadeira, setProfundidaPenteadeira] = useState(0);

    //portas?
    const [temPortas, setTemPortas] = useState('');
    const [portas, setPortas] = useState("");

    //gavetas?
    const [temGaveta, setTemGaveta] = useState('');
    const [quantidadeGavetas, setQuantidadeGavetas] = useState("");

    //Medidas Gavetas
    //const [alturaGaveta, setAlturaGaveta] = useState(20);
    //const [larguraGaveta, setLarguraGaveta] = useState(0);
    //const [profundidadeGaveta, setProfundidadeGaveta] = useState(0);

    const [movel, setMovel] = useState('');

    //const [quantidadeMDF, setQuantidadeMDF] = useState(0);
    const [resultado, setResultado] = useState(0);

    //Escondendo os input/radios
    const movelSelecionado = movel !== '';
    const dimensoesPreenchidas = altura && largura && profundidade;

    const validarNumero = (valor: string, campo: string) => {
        if (valor === '' || isNaN(Number(valor))) {
            alert(`Por favor, digite um número válido para o campo "${campo}"`);
            return false;
        }
        return true;
    };

    const calcular = () => {

        //Evitando que o usuário digite letras nos inputs iniciais
        if (
            altura === '' || isNaN(Number(altura)) ||
            largura === '' || isNaN(Number(largura)) ||
            profundidade === '' || isNaN(Number(profundidade))
        ) {
            alert('Preencha todos os campos de dimensão com números válidos!');
            return;
        }

        //Evitando que o usuário digite letras nos inputs dos radios
        if (temPortas === 'sim' && !validarNumero(portas, 'Quantidade de portas')) {
            return;
        }

        if (temDivInterna === 'sim' && !validarNumero(divInterna, 'Quantidade de divisórias')) {
            return;
        }

        if (temGaveta === 'sim' && !validarNumero(quantidadeGavetas, 'Quantidade de gavetas')) {
            return;
        }


        //Cálculo das peças de estrutura de armário
        const laterais = (Number(altura) * Number(profundidade)) * 2;
        const baseTopo = (Number(largura) * Number(profundidade)) * 2;
        const fundo = Number(altura) * Number(largura);
        const qtdPortas = Number(portas) > 0 ? Number(altura) * (Number(largura) / Number(portas)) * Number(portas) : 0;
        //const qtdPrateleiras = Number(profundidade) * Number(largura) * Number(prateleiras);

        // Cálculo da divisória vertical (podedia usar o tamanho das laterais para facilitar!)
        const areaDivInterna = (Number(altura) - (2 * expessuraMDF)) * Number(profundidade);

        //Cálculo das gavestas
       // const lateraisGaveta = (alturaGaveta * profundidadeGaveta) * 2;
       // const freteEtraseira = 2 * (alturaGaveta * (larguraGaveta - 2 * expessuraMDF));
       // const fundoGaveta = (larguraGaveta - 2 * expessuraMDF) * (profundidadeGaveta - expessuraMDF)
       // const areaGaveta = lateraisGaveta + freteEtraseira + fundoGaveta;
       // const totalGaveta = areaGaveta * Number(quantidadeGavetas);

        //Cálculo Penteadeira
       // const tampoPenteadeira = larguraPenteadeira * profundidadePenteadeira;
        //const lateraisPenteadeira = (alturaPenteadeira * profundidadeGaveta) * 2;  // rever calculos da penteadeira com meu pai
        //const fundoPenteadeira = larguraPenteadeira * (alturaPenteadeira - expessuraMDF);
        //const baseInferior = larguraPenteadeira * expessuraMDF;

        //calculo painel
        const areaPainel = Number(altura) * Number(largura)

        let areaTotal = 0;

        if (!movel || movel === '') {
            alert('Por favor, selecione um tipo de móvel!');
            return;
        }

        if (movel === 'Guarda-Roupa' || movel === 'Armário para banheiro' || movel === 'Armário para Cozinha Completa' ||
            movel === 'Armário para Cozinha Parte de cima' || movel === 'Armário para Cozinha Parte de baixo' ||
            movel === 'Cômoda' || movel === 'Rack') {

            areaTotal = laterais + baseTopo + fundo ;

            if (temDivInterna === 'sim') {
                areaTotal += areaDivInterna;
            }

           // if (temGaveta === 'sim') {
           //     areaTotal += totalGaveta;
           // }

            if (temPortas === 'sim') {
                areaTotal += qtdPortas;
            }

        }

        else if (movel === 'Painel') {
            areaTotal = areaPainel

        }

     //   else if (movel === 'Painel com Rack') { // Para fazer esse móvel tem q adicionar a altura/largura/profundidade do rack ou vice versa

       //     let areaRack = laterais + baseTopo + fundo + qtdPrateleiras; //tirei painel com rack das opções por enquanto
       //     if (temDivInterna === 'sim') areaRack += areaDivInterna;
       //     if (temGaveta === 'sim') areaRack += totalGaveta;
       //     if (temPortas === 'sim') areaRack += qtdPortas;

        //    areaTotal = areaPainel + areaRack;
       // }

       // else if (movel === 'Penteadeira') {
       //     areaTotal = tampoPenteadeira + lateraisPenteadeira + fundoPenteadeira + baseInferior;
       // }






        //Cálculo da quantidade de MDF que será usado

        const areaMetros = areaTotal / 10000;
        const chapasNecessaria = Math.ceil(areaMetros / 4.80); //Math.ceil - arredonda os números

        //Cálculo de custos:

        const material = chapasNecessaria * 250; // valor simbólico de MDF! preços reais no próximo commite!
        const maoDeObra = material * 3;
        const subtotal = material + maoDeObra;
        const adicionais = Math.floor(subtotal / 100) * 45;
        const total = material + maoDeObra + adicionais;

        console.log('chapa', chapasNecessaria);

        setResultado(total);


    };

    return (
        <div className={styles.corpo}>
            <div className={styles.container}>
                <h3 className={styles.titulo}>Faça seu próprio orçamento!!!</h3>

                {/* Select do tipo de móvel */}
                <select
                    className={styles.selecao}
                    value={movel}
                    onChange={(e) => setMovel(e.target.value)}
                >
                    <option value="">Qual tipo de móvel?</option>
                    <option value="Guarda-Roupa">Guarda-Roupa</option>
                    <option value="Armário para banheiro">Armário para banheiro</option>
                    <option value="Armário para Cozinha Completa">Armário para Cozinha Completa</option>
                    <option value="Armário para Cozinha Parte de cima">Armário Parte de cima</option>
                    <option value="Armário para Cozinha Parte de baixo">Armário Parte de baixo</option>
                    <option value="Cômoda">Cômoda</option>
                    <option value="Painel">Painel</option>
                    <option value="Rack">Rack</option>
                    <option value="Penteadeira">Penteadeira</option>
                </select>

                {/* Inputs de medidas */}
                {movelSelecionado && (
                    <>
                        <label className={styles.label}>Altura</label>
                        <input
                            className={styles.input}
                            type="number"
                            value={altura}
                            placeholder="em cm"
                            onChange={(e) => setAltura((e.target.value))}
                        />

                        <label className={styles.label}>Largura</label>
                        <input
                            className={styles.input}
                            type="number"
                            value={largura}
                            placeholder="em cm"
                            onChange={(e) => setLargura((e.target.value))}
                        />

                        <label className={styles.label}>Profundidade</label>
                        <input
                            className={styles.input}
                            type="number"
                            value={profundidade}
                            placeholder="em cm"
                            onChange={(e) => setProfundidade((e.target.value))}
                        />
                    </>
                )}

                {/* Campos que aparecem após medidas preenchidas */}
                {dimensoesPreenchidas && (
                    <>
                        {/* Portas */}
                        <label className={styles.label}>Terá Portas?</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="sim"
                                    checked={temPortas === 'sim'}
                                    onChange={(e) => setTemPortas(e.target.value)}
                                />{' '}
                                Sim
                            </label>
                            {temPortas === 'sim' && (
                                <div>
                                    <label className={styles.label}>Quantas?</label>
                                    <input
                                        className={styles.input}
                                        type="number"
                                        value={portas}
                                        onChange={(e) => setPortas(e.target.value)}
                                    />
                                </div>
                            )}
                            <label style={{ marginLeft: '1rem' }}>
                                <input
                                    type="radio"
                                    value="não"
                                    checked={temPortas === 'não'}
                                    onChange={(e) => setTemPortas(e.target.value)}
                                />{' '}
                                Não
                            </label>
                        </div>

                        {/* Divisórias */}
                        <label className={styles.label}>Terá Divisória?</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="sim"
                                    checked={temDivInterna === 'sim'}
                                    onChange={(e) => setTemDivInterna(e.target.value)}
                                />{' '}
                                Sim
                            </label>
                            {temDivInterna === 'sim' && (
                                <div>
                                    <label className={styles.label}>Quantas?</label>
                                    <input
                                        className={styles.input}
                                        type="number"
                                        value={divInterna}
                                        onChange={(e) => setDivInterna(e.target.value)}
                                    />
                                </div>
                            )}
                            <label style={{ marginLeft: '1rem' }}>
                                <input
                                    type="radio"
                                    value="não"
                                    checked={temDivInterna === 'não'}
                                    onChange={(e) => setTemDivInterna(e.target.value)}
                                />{' '}
                                Não
                            </label>
                        </div>

                        {/* Gavetas */}
                        <label className={styles.label}>Terá Gavetas?</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="sim"
                                    checked={temGaveta === 'sim'}
                                    onChange={(e) => setTemGaveta(e.target.value)}
                                />{' '}
                                Sim
                            </label>
                            {temGaveta === 'sim' && (
                                <div>
                                    <label className={styles.label}>Quantas?</label>
                                    <input
                                        className={styles.input}
                                        type="number"
                                        value={quantidadeGavetas}
                                        onChange={(e) => setQuantidadeGavetas(e.target.value)}
                                    />
                                </div>
                            )}
                            <label style={{ marginLeft: '1rem' }}>
                                <input
                                    type="radio"
                                    value="não"
                                    checked={temGaveta === 'não'}
                                    onChange={(e) => setTemGaveta(e.target.value)}
                                />{' '}
                                Não
                            </label>
                        </div>

                        {/* Botão e resultado */}
                        <button className={styles.botao} onClick={calcular}>Calcular</button>

                        <label className={styles.valorOrcamento}>
                            Seu orçamento é de: R$ {resultado.toFixed(2)}
                        </label>

                        <p className={styles.aviso}>
                            ORÇAMENTO FEITO A PARTIR DO MDF MAIS BARATO! PARA UM ORÇAMENTO MAIS, PRECISO ENTRE EM CONTATO
                        </p>
                    </>
                )}
            </div>
        </div>
    );
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