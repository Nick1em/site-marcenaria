
import styles from "../app/style/home.module.css"
import SliderImg from "./Components/slideImg";

export default function Home() {
  return (
    <div className={styles.principal}>
      <div >
        <SliderImg />
      </div>

      <div className="absolute -bottom-211  left-1/2 -translate-x-1/2 z-10">
        <div className="flex justify-center gap-4 px-4 max-w-full ">         {/*Imagem flutuante */}
          <img  />
        </div>
      </div>

      <main className="relative  flex justify-center ">

        <div className="w-5xl  sm:flex-col ">

          <div className={styles.secao}>
            <div>
              <h1 className={styles.titulo} > A Móveis Gondor</h1>
              <p className={styles.paragrafo}>
                Na Terra-média da marcenaria, somos os guardiões da madeira encantada.
                A Móveis Gondor nasceu do amor por contar histórias através de móveis.
                Aqui, cada projeto é uma jornada  e cada móvel, um artefato único.
                Seja um móvel sob medida ou uma peça temática, criamos com alma,
                técnica e um toque de magia.
              </p> <br />
              <h1 className={styles.titulo} > Um toque de magia em sua casa!</h1>
              <p className={styles.paragrafo}>
                Móveis são mais do que objetos são portais. Um bom design transforma o ambiente,
                mas um móvel mágico transforma a experiência. Do rústico ao moderno, com detalhes
                encantadores ou referências sutis ao seu universo favorito, damos vida ao cenário
                que você chama de lar.
              </p>
            </div>
            <div className="fotosHomeGurpo">
              <div className="grid grid-cols-2 gap-2">
                <div >
                  <img className={styles.imgGrupo}
                    src="/img/MesaBatman1.jpg"
                    alt="Móvel Temático Direita"

                  />

                </div>
                <div >
                  <img className={styles.imgGrupo}
                    src="/img/mk1.png"
                    alt="Móvel Temático Direita"

                  />

                </div>
                <div >
                  <img className={styles.imgGrupo}
                    src="/img/Pokebola.png"
                    alt="Móvel Temático Direita"

                  />

                </div>
                <div >
                  <img className={styles.imgGrupo}
                    src="/img/BobSponja1.png"
                    alt="Móvel Temático Direita"

                  />

                </div>
              </div>
            </div>
          </div>

          <div className={styles.secao2}>
            <div>
              <h1 className={styles.titulo}>Somos todos Nerd!</h1>
              <p className={styles.paragrafo}>
                Sim, fazemos móveis sob medida. Mas também fazemos mesas no formato do símbolo
                do Batman, nichos inspirados em Hogwarts, painéis dignos de Asgard e muito mais.
                Porque por aqui, cultura geek, nerd, gamer, otaku e afins não é nicho  é o
                universo onde vivemos.
              </p> <br />
              <h1 className={styles.titulo} >Da tela para a tábua?</h1>
              <p className={styles.paragrafo}>
                Jogos, filmes, livros e séries são nossa fonte de inspiração. Se você sempre quis
                trazer um pedaço do seu mundo favorito para o mundo real, a Móveis Gondor está
                pronta para a missão. Trabalhamos com projetos personalizados e temáticos que
                tornam o impossível possível.
              </p>
            </div>
            <div>
              <img
                src="/img/Mapa.jpg"
                alt="Móvel Temático Esquerda"
                className={styles.fotosHome}
              />
            </div>
          </div>



          <div className={styles.secao}>

            <div>
              <h1 className={styles.titulo}>Feito por Heróis para Heróis?</h1>
              <p className={styles.paragrafo}>
                Não somos uma fábrica  somos uma forja. Cada peça nasce das mãos de artesãos apaixonados,
                com atenção aos detalhes, escolha criteriosa de materiais e acabamento impecável.
                Criamos com a precisão de um elfo e a força de um anão.
              </p><br />
              <h1 className={styles.titulo}>Nossa Missão: INSPIRAR!</h1>
              <p className={styles.paragrafo}>
                A criatividade não tem limites, e nosso portfólio prova isso. Veja os projetos incríveis
                que já saíram da nossa oficina e prepare-se para ter ideias. Quem sabe o próximo móvel
                épico a ser construído não será o seu?
              </p>
            </div>
            <div>
              <img
                src="/img/Nave.png"
                alt="Móvel Temático Direita"
                className={styles.fotosHome}
              />
            </div>

          </div>

          <div className={styles.secao2}>

            <div className="pb-20">
              <h1 className={styles.titulo}>Receba uma obra de arte em sua</h1>
              <p className={styles.paragrafo}>
                De Gondor para todo o Brasil. Entregamos com segurança, cuidado e responsabilidade.
                Seu móvel chega pronto para ser o protagonista da sua casa  embalado com carinho
                e preparado para durar por muitas eras.
              </p>
            </div>
            <div className="pb-10">
                <video className="videoHome" autoPlay muted loop width="520">
                <source src="/img/VideoPokebola.mp4" type="video/mp4"/>
                  Seu navegador não suporta vídeo.
                </video>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
