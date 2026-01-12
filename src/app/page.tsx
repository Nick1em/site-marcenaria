import Link from "next/link";
import styles from "../app/style/home.module.css"
import { Html, Head, Main, NextScript} from "next/document";
import CarroselWrapper from "./Components/carroselWrapper";

export default function Home() {
  return (
    <main >
        <div>
          <CarroselWrapper/>
        </div>

        <div className="min-h-screen bg-white flex flex-col items-center justify-start">

          {/* Imagem lateral esquerda (opcional)
          
          <div className="hidden md:block">
            <img
              src="/images/gondor-esquerda.png"
              alt="Móvel Temático Esquerda"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
          
          */}
          

          <div className=" text-center">

            <h1 className="text-4xl font-bold mb-4" > A Móveis Gondor</h1>
              <p  className="mb-6">
              Na Terra-média da marcenaria, somos os guardiões da madeira encantada.
              A Móveis Gondor nasceu do amor por contar histórias através de móveis.
              Aqui, cada projeto é uma jornada  e cada móvel, um artefato único.
              Seja um móvel sob medida ou uma peça temática, criamos com alma, 
              técnica e um toque de magia.
              </p>

            <h1 className="text-2xl font-semibold mb-2"> Um toque de magia em sua casa!</h1>
              <p className="mb-6">
              Móveis são mais do que objetos são portais. Um bom design transforma o ambiente,
              mas um móvel mágico transforma a experiência. Do rústico ao moderno, com detalhes 
              encantadores ou referências sutis ao seu universo favorito, damos vida ao cenário
              que você chama de lar.
              </p>

            <h1 className="text-2xl font-semibold mb-2" >Somos todos Nerd!</h1>
              <p className="mb-6">
              Sim, fazemos móveis sob medida. Mas também fazemos mesas no formato do símbolo 
              do Batman, nichos inspirados em Hogwarts, painéis dignos de Asgard e muito mais. 
              Porque por aqui, cultura geek, nerd, gamer, otaku e afins não é nicho  é o 
              universo onde vivemos.
              </p>

            <h1 className="text-2xl font-semibold mb-2" >Da tela para a tábua?</h1>
              <p className="mb-6">
              Jogos, filmes, livros e séries são nossa fonte de inspiração. Se você sempre quis 
              trazer um pedaço do seu mundo favorito para o mundo real, a Móveis Gondor está 
              pronta para a missão. Trabalhamos com projetos personalizados e temáticos que 
              tornam o impossível possível.
              </p>

            <h1 className="text-2xl font-semibold mb-2" >Feito por Heróis para Heróis?</h1>
              <p className="mb-6">
              Não somos uma fábrica  somos uma forja. Cada peça nasce das mãos de artesãos apaixonados, 
              com atenção aos detalhes, escolha criteriosa de materiais e acabamento impecável. 
              Criamos com a precisão de um elfo e a força de um anão.
              </p>

            <h1 className="text-2xl font-semibold mb-2" >Nossa Missão: INSPIRAR!</h1>
              <p className="mb-6">
              A criatividade não tem limites, e nosso portfólio prova isso. Veja os projetos incríveis 
              que já saíram da nossa oficina e prepare-se para ter ideias. Quem sabe o próximo móvel 
              épico a ser construído não será o seu?
              </p>

            <h1 className="text-2xl font-semibold mb-2" >Receba uma obra de arte em sua</h1>
              <p className="mb-6">
              De Gondor para todo o Brasil. Entregamos com segurança, cuidado e responsabilidade. 
              Seu móvel chega pronto para ser o protagonista da sua casa  embalado com carinho 
              e preparado para durar por muitas eras.
              </p>

              {/* Imagem lateral direita (opcional) 
              
              <div className="hidden md:block">
                <img
                  src="/images/gondor-direita.png"
                  alt="Móvel Temático Direita"
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
              */} 
          </div>
        </div>
    </main>    
  )
}
