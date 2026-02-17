

import Produtos from "../data/produtos.json"

export default function ProdutosPage() {
  return (

    <div className="border-4  bg-[#141310] flex flex-col items-center justify-center">

      {/* Título*/}
      <div>
        <h1 className="text-3xl text-[#854836] font-serif text-center "> Nosso Pack de Produtos </h1>
      </div>

      {/* Container das Cartas */}
      <div className="grid grid-cols-3 gap-x-7 gap-y-1"> {/*diposição das cartas */}

        {Produtos.map((produto) => (

          <div key={produto.id} className="flex flex-col items-center justify-center
           bg-[url(/img/bordaCarta.png)] bg-contain bg-no-repeat bg-center w-97 h-190 scale-85  origin-top "> {/*configuração das cartas*/}

            <div className=" p-2  bg-[url(/img/fundoCarta.png)] w-90 h-135 bg-cover bg-center 
              flex flex-col items-center justify-center"> {/* Fundo das cartas  */}

              <div className="w-80 h-15 bg-[url(/img/fundoNomeProduto.png)] 
              bg-contain bg-center flex items-center"> {/* Fundo do nome do produto  */}

                <div className="w-98 flex flex-row justify-between"> {/* Configuração Nome Produto  */}
                  <h2 className="  pl-2 text-2xl font-serif font-bold p-1 ">{produto.nome} </h2>
                  <img className="w-8 h-8 " src="/img/divine.png"></img>

                </div>
              </div>

              <div className="  w-80 flex justify-end-safe"> {/* Configuração das estrelas  */}
                <img
                  className="w-6 h-6"
                  src="/img/estrelaCarta.png"     //Tentar multiplicar as estrlas sem precisar dar ctrl+z 
                />
                <img
                  className="w-6 h-6"
                  src="/img/estrelaCarta.png"
                />
                <img
                  className="w-6 h-6"
                  src="/img/estrelaCarta.png"
                />
                <img
                  className="w-6 h-6"
                  src="/img/estrelaCarta.png"
                />
                <img
                  className="w-6 h-6"
                  src="/img/estrelaCarta.png"
                />
                <img
                  className="w-6 h-6"
                  src="/img/estrelaCarta.png"
                />
                <img
                  className="w-6 h-6"
                  src="/img/estrelaCarta.png"
                />
                <img
                  className="w-6 h-6"
                  src="/img/estrelaCarta.png"
                />

              </div>

              <div className="bg-[url(/img/bordaFotoCarta.png)] bg-cover bg-center 
                w-72 h-75 flex flex-col items-center justify-center"> {/* borda da foto  */}

                {/* Configuração img foto  */}
                <div className="flex flex-col items-center justify-center size-87 overflow-hidden rounded-md">
                  <img
                    src={produto.foto}
                    className="w-69 h-69 object-cover"
                  />

                </div>
              </div>

              <div className="relative mb-1 w-84 h-3 flex flex-row justify-end">
                <p className=" absolute top-[-10] pr-6 text-[14px] font-medium">info-descr</p> {/* Detalhe abaixo da foto  */}
              </div>

              {/* Configurações da Descrição da foto  */}
              <div className="  w-80 h-35 flex flex-col items-center ">

                <div className="bg-[url(/img/bordadescri.png)] mt-1 ml-3 pl-2 h-30 w-170 flex flex-col items-center justify-start  bg-cover 
                  bg-center"> {/* borda da descrição da foto  */}

                  <div className="bg-[#EDDBCF] mt-2 mr-6 w-75 h-24  bg-center bg-cover flex flex-col items-center justify-center ">

                    {/* Descrição da foto  */}
                    <div className="flex flex-col items-start ml-4 h-14 pl-6  ">

                      <div className=" flex flex-row items-center justify-center">
                        <h4 className=" font-bold text-[15px] "> {produto.tempoEntrega} </h4>
                      </div>

                      <div className=" w-85  ">
                        <p className=" order-2  text-[14px] text-black-900  ">{produto.descrição}</p>
                      </div>

                    </div>

                    <div className=" pt-5 pr-1">
                      <img className="w-80 pl-1"
                        src="/img/linha.png"
                      />
                    </div>

                    <div className=" relative w-85 h-6  flex fle-row  justify-end pr-8 ">
                      <p className=" absolute top-[-4] text-lg font-semibold mb-4"> ATK/{produto.preco},00 R$ + FRETE </p>
                    </div>
                  </div>

                </div>
                <div className=" relative w-85 flex flex-row justify-start pl-6 ">
                  <button className="absolute top-[-40] text-white border-1 border-[#854836] rounded-xl bg-[#854836]">Garanta a sua</button>
                </div>

              </div>

              {/* Universo de Inspiração/ ano   */}
              <div className=" mb-1 w-85 h-3 flex flex-row  justify-between whitespace-nowrap">
                <p className="text-[14px] font-medium font-serif">Universo {produto.universo}</p>
                <p className="text-[14px] font-medium font-sans"> &copy; {new Date().getFullYear()} Móveis Gondor</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  );


}