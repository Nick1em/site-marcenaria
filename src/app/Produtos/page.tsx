import Image from "next/image";
import Link from "next/link";
import Produtos from "../data/produtos.json"

export default function () {
  return(

    <div className="p-8">
      <h1 className="text-3xl font-bold text-center"> Nossos Produtos</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Produtos.map((produto) => (
          <div key={produto.id} className="gr-white shadow-xl rounded-2xl overflow-hidden">
            <img
            src={produto.foto} 
            alt={produto.nome}
            width={400}
            height={400}
            className="object-cover w-full h-60"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibol">{produto.nome}</h2>
              <p className="text-sm text-gray-600 mb-2">{produto.descrição}</p>
              <p className="text-lg text-gray-700 mb-4">{produto.preco},00 R$ + Frete </p>
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl">Compre Agora</button>
            
          </div>
        ))}
      </div>
    </div>

  );


}