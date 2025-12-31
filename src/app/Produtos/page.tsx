

import Produtos from "../data/produtos.json"

export default function ProdutosPage () {
  return (

    <div className="border-4  p-8 bg-[#141310] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl text-[#854836] font-serif text-center pb-5 "> Nosso Pack de Produtos </h1>
      </div>

      <div className="grid grid-cols- md:grid-cols- gap-20 sm:grid-cols-1 "> {/*diposição das cartas */}
        {Produtos.map((produto) => (
          <div key={produto.id} className="flex flex-col items-center justify-center
           bg-[url(/img/bordaCarta.png)] bg-contain bg-no-repeat bg-center w-90 h-133 rounded-xl"> {/*configuração das cartas*/}

            <div className=" p-2  bg-[url(/img/fundoCarta.png)] w-85 h-125 bg-cover bg-center 
              flex flex-col items-center justify-center">

              <div className="w-80 h-15 bg-[url(/img/fundoNomeProduto.png)] 
              bg-contain bg-center flex items-center">

                <div className="w-98 flex flex-row justify-between">
                  <h2 className="  pl-2 text-2xl font-serif font-bold p-1 ">{produto.nome} </h2>
                  <img className="w-8 h-8 " src="/img/divine.png"></img>
                </div>
              </div>

              <div className="  w-80 flex justify-end-safe">
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
                w-72 h-75 flex flex-col items-center justify-center">

                <div className="size-87 overflow-hidden rounded-md">
                  <img
                    src={produto.foto}
                    className="w-10 h-10 object-cover"
                  />
                </div>

              </div>
              <div className="relative w-84 h-3 flex flex-row justify-end">
                <p className=" absolute top-[-8] right-[-5] text-[14px] font-medium">info-descr</p>
              </div>
              <div className="bg-[#EDDBCF] w-7 bg-cover bg-center flex flex-col items-center justify-center ">
                <div className="    
                bg-[url(/img/bordadescri.png)]
                w-174
                flex flex-col items-center justify-center  
                bg-cover bg-center ">

                  <div className="flex flex-col items-center h-14  w-full ">

                    <div className=" flex flex-row items-center justify-center">
                      <h4 className=" font-bold text-lg "> {produto.tempoEntrega} </h4>
                    </div>

                    <div className=" w-85  ">
                      <p className=" order-2  text-sm text-black-900  ">{produto.descrição}</p>
                    </div>

                  </div>

                  <div className=" pt-10">
                    <img className="w-86 "
                      src="/img/linha.png"
                    />
                  </div>

                  <div className=" relative w-85 h-6  flex fle-row  justify-end ">
                    <p className=" absolute top-[-4] text-lg font-semibold mb-4"> ATK/{produto.preco},00 R$ + FRETE </p>
                  </div>

                </div>
                <div className=" relative w-85 flex flex-row justify-end  ">
                  <button className="absolute top-[-55] text-white border-1 border-[#854836] rounded-xl bg-[#854836]">Garanta a sua</button>
                </div>

              </div>
              <div className=" w-90 h-3 flex flex-row  justify-between whitespace-nowrap">
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