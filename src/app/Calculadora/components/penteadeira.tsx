'use client';

import { useState } from 'react';
import styles from '../../style/orcamento.module.css';

//importando inputs do usuário
import InputsUsuarioEstrutura from './inputsUsuario';

//importando o hook para usar as dimensões do usuário
import { useDimensoesEstrutura } from "../hooks/useDimensoesEstrutura";

//importando os componentes de inputs e opções de estrutura, para não precisar ficar repetindo em cada móvel
import OpcoesEstrutura from './opcoesEstrutura';

export default function Penteadeira() {

    const {
            largura,
            setLargura,
            altura,
            setAltura,
            profundidade,
            setProfundidade,
            resultado,
            setResultado,
            dimensoesCompletas,
        } = useDimensoesEstrutura();

        const [temGaveta, setTemGaveta] = useState('');
        const [temPorta, setTemPorta] = useState('');

        const [temDivisoria, setTemDivisoria] = useState('');

    const dimensoesUsuario = altura && largura && profundidade;

    const calcular = () => { 
        const alt = Number(altura);
        const larg = Number(largura);
        const prof = Number(profundidade);

        if (!alt || !larg || !prof) {
            alert('Insira todas as dimensões!!!');
            return;
        }

        //Estrutura da penteadeira
        const laterais = alt * prof * 2;
        const mesa = larg * prof;
        const fundo = (alt /2) * larg;
        const areaTotal = laterais + mesa + fundo;

        //Convertendo para qtde de Chapas de MDF
        const areaMetros = areaTotal / 10000;
        const chapas = Math.ceil(areaMetros / 4.8);

        const valorMaterial = chapas * 250; // Exemplo de valor por chapa
        const maoDeObra = valorMaterial * 3;
        const subtotal = valorMaterial + maoDeObra;
        const adcionais = Math.floor(subtotal / 100) * 45;
        const total = subtotal + adcionais;

        setResultado(total);
    }

     return (
        <>
            <InputsUsuarioEstrutura
                altura={altura}
                largura={largura}
                profundidade={profundidade}
                setAltura={setAltura}
                setLargura={setLargura}
                setProfundidade={setProfundidade}
            />

            {dimensoesCompletas && (
                <>
                    <OpcoesEstrutura
                        mostrarDivisorias
                        mostrarGavetas
                        temDivisoria={temDivisoria}
                        setTemDivisoria={setTemDivisoria}
                        temGaveta={temGaveta}
                        setTemGaveta={setTemGaveta}
                    />

                    <button className={styles.botao} onClick={calcular}> Calcular</button>

                    <label className={styles.valorOrcamento}>Seu orçamento é de R $ {resultado} </label>

                </>
            )}
        </>
    )
}