import Link from "next/link";


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


export default function CalculaOrcamento () {
    return (
         <div>
            <div>
                <script src="../Script/script"></script>
                <h3> Faça seu próprio orçamento!!!</h3>
                <input className='altura' placeholder="Digite a altura em centimetros" /> <br/>
                <input className='largura' placeholder="Digite a largura em centimetro" />  <br/>
                <input className='profundidade' placeholder="Digite a profundidade em centimetros" /> 
                <ul className="orcamento"></ul>

            </div>
    </div>
    )
}



