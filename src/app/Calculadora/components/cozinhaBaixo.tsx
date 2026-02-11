'use client';

import { useState } from 'react';
import styles from '../../style/orcamento.module.css';
import InputsUsuarioEstrutura from './inputsUsuario';


//Importandono o hook de dimensões
import { useDimensoesEstrutura } from '../hooks/useDimensoesEstrutura';


export default function CozinhaBaixo() {

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
    

    const dimensoesUsuario = altura && largura && profundidade;


    const calcular = () => {

        const alt = Number(altura);
        const larg = Number(largura);
        const prof = Number(profundidade);

        if (!alt || !larg || !prof) {
            alert('Insira todas as dimensões!!!');
            return;
        }

        //Estrutura do guarda roupa
        const laterais = alt * prof * 2;
        const baseTopo = larg * prof * 2;
        const fundo = alt * larg;

        const areaTotal = laterais + baseTopo + fundo;

        //Convertendo para qtde de Chapas de MDF
        const areaMetros = areaTotal / 10000;
        const chapas = Math.ceil(areaMetros / 4.8);

        const valorMaterial = chapas * 250; // Exemplo de valor por chapa
        const maoDeObra = valorMaterial * 3;
        const subtotal = valorMaterial + maoDeObra;
        const adcionais = Math.floor(subtotal / 100) * 45;
        const total = subtotal + adcionais;

        setResultado(total);

    };

    return (
            <InputsUsuarioEstrutura
                altura={altura}
                largura={largura}
                profundidade={profundidade}
                setAltura={setAltura}
                setLargura={setLargura}
                setProfundidade={setProfundidade}
            />
        )
}