'use client';

import { useState } from 'react';
import styles from '../../style/orcamento.module.css';


//Importando os móveis que serão usados na calculadora
import Guardaroupa from "./guardaRoupa";
import Painel from "./painel";
import ArmarioBanheiro from "./armarioBanheiro";
import Comeia from './comeia';
import Comoda from './comoda';
import CozinhaAlto from './cozinhaAlto';
import CozinhaBaixo from './cozinhaBaixo';
import Penteadeira from './penteadeira';
import Rack from './rack';



export default function CalculadoraPrincipal() {

    const [movel,setMovel] = useState('');

    

    return (
        <div className={styles.corpo}>
            <div className={styles.container}>
                <h3 className={styles.titulo}>Faça seu próprio Orçamento</h3>

                <select className={styles.selecao} value={movel} onChange={(e) => setMovel(e.target.value)}>
                    <option value="">Selecione um móvel</option>
                    <option value="guardaroupa">Guarda-roupa</option>
                    <option value="painel">Painel</option>
                    <option value="armarioBanheiro">Armário de Banheiro</option>
                    <option value="comeia">Comeia</option>
                    <option value="comoda">Comoda</option>
                    <option value="cozinhaAlto">Cozinha Alto</option>
                    <option value="cozinhaBaixo">Cozinha Baixo</option>
                    <option value="penteadeira">Penteadeira</option>
                    <option value="rack">Rack</option>
                </select>

                {movel === 'guardaroupa' && <Guardaroupa />}
                {movel === 'painel' && <Painel />}

            </div>
        </div>
    )
}

