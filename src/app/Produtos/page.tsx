import Image from "next/image";
import Link from "next/link";
import Produtos from "../data/produtos.json"

export default function () {
  return (

    <div className="border-4  p-8 bg-[#141310] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl text-white font-serif text-center  "> Nosso Pack de Produtos </h1>
      </div>

      <div className="grid grid-cols-3  gap-8"> {/*diposição das cartas */}
        {Produtos.map((produto) => (
          <div key={produto.id} className="flex flex-col items-center justify-center
           bg-[url(/img/bordaCarta.png)] 
           bg-cover bg-center 
           w-100 h-150 
           shadow-xl rounded-xl"> {/*configuração das cartas*/}

            <div className=" p-2 w-95 h-142 bg-[url(/img/fundoCarta.png)] bg-cover bg-center 
              flex flex-col items-center justify-center">

              <div className=" w-92 h-15 bg-[url(/img/fundoNomeProduto.png)] 
              bg-contain bg-center flex flex-col items-center justify-center shadow-1">
                <h2 className=" text-xl font-semibol">{produto.nome}</h2>
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

              <div className=" bg-[url(/img/bordaFotoCarta.png)] bg-cover bg-center 
                w-85 h-97 flex flex-col items-center justify-center ">

                <div className=" w-75  h-75 border-4 border-red-400 flex flex-col items-center justify-center">
                  <img
                    src={produto.foto}
                    className=" w-75 h-75 "
                  />
                </div>

              </div>
              <div className="bg-[#EDDBCF] w-90 flex flex-col items-center justify-center ">
                <div className="  w-94 
                bg-[url(/img/bordaDescrição.png)] 
                flex flex-col items-center justify-center  
                bg-cover bg-center ">
                  <div className="h-14 overflow-y-auto w-full ">
                    <p className=" order-2  text-sm text-black-900 p-2 ">{produto.descrição}</p>
                  </div>
                  <div className=" pt-10">
                    <img className="w-80 "
                      src="/img/linha.png"
                    />
                  </div>

                  <div className="  w-50 h-6  flex fle-row  justify-end ">
                    <p className="text-lg text-black-900 mb-4">{produto.preco},00 R$ + Frete </p>
                  </div>

                </div>
              </div>


            </div>
          </div>
        ))}
      </div>
    </div>

  );


}