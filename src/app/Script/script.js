import { useState,useEffect } from "react";


function calculoOrcamento (){

    const [altura , seTaltura] = useState(0);
    const [largura , setLagura] = useState(0);
    const [profundidade , setProfundidade] = useState(0);
    const [prateleiras , setPrateleira] = useState(0);
    const [portas , setPortas] = useState(0);
    const [resultado , setResultado] = useState(0);
    const [quantidadeMDF , setQuantidadeMDF] = useState(0);
    
    

    const calcular = () => {

        const laterais = altura * profundidade * 2;
        const baseTopo = largura * profundidade * 2;
        const fundo = altura * largura ;
        const qtdPortas = altura * (largura / portas) * portas ;
        const qtdPrateleiras = profundidade * largura * prateleiras;
        const areaTotal = laterais + baseTopo + fundo + qtdPortas + qtdPrateleiras;
        const areaMetros = areaTotal / 1000;

        const chapasNecessaria = areaMetros * 4.80;

        setQuantidadeMDF = (chapasNecessaria);

        //Cálculo de custos:

        const material = chapasNecessaria * 250; // valor simbólico de MDF! preços reais no próximo commite!
        const maoDeObra = material * 3;
        const total = material + maoDeObra;
        
        
    }

}