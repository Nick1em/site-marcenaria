'use client';


import { useState } from 'react';
import styles from '../../style/orcamento.module.css';
import InputsUsuarioEstrutura from './inputsUsuario';

//Importandono o hook de dimensões
import { useDimensoesEstrutura } from '../hooks/useDimensoesEstrutura';

export default function Painel() {

      const {
            largura,
            setLargura,
            altura,
            setAltura,

            resultado,
            setResultado,
            dimensoesCompletas,
        } = useDimensoesEstrutura();

    const dimensoesUsuario = altura && largura;

    const calcular = () => {

        const alt = Number(altura);
        const larg = Number(largura);

        if (!alt || !larg) {
            alert('Insira as dimensões!!!')
        }

        const areaTotal = (alt * larg);

        const areaMetros = areaTotal / 10000;
        const chapas = Math.ceil(areaMetros / 4.8);

        const valorMaterial = chapas * 250; // Exemplo de valor por chapa
        const maoDeObra = valorMaterial * 3;
        const subtotal = valorMaterial + maoDeObra;
        const adcionais = Math.floor(subtotal / 100) * 45;
        const total = subtotal + adcionais;

    };

    return (
        <InputsUsuarioEstrutura
            altura={altura}
            largura={largura}
            setAltura={setAltura}
            setLargura={setLargura}
        />
    )
}