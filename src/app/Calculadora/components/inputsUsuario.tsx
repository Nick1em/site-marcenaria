'use client';

import styles from '../../style/orcamento.module.css';

type Props = {
  altura: string;
  largura: string;
  profundidade?: string;

  setAltura: (valor: string) => void;
  setLargura: (valor: string) => void;
  setProfundidade?: (valor: string) => void;
};

export default function InputsUsuario({
  altura,
  largura,
  profundidade,
  setAltura,
  setLargura,
  setProfundidade,

}:
  Props) {

  return (
    <>
      <label className={styles.label}>Altura</label>
      <input
        className={styles.input}
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <label className={styles.label}>Largura</label>
      <input
        className={styles.input}
        type="number"
        value={largura}
        onChange={(e) => setLargura(e.target.value)}
      />


      {/*Para poder ter a opção de não usar profundidade sem dar erro no type,
       coloquei como opcional, e só renderiza o input se for passado a função
        de setProfundidade e o valor de profundidade! */}
      {profundidade !== undefined && setProfundidade && (
        <>
          <label className={styles.label}>Profundidade</label>
          <input
            className={styles.input}
            type="number"
            value={profundidade}
            onChange={(e) => setProfundidade(e.target.value)}
          />
        </>
      )}
    </>
  );
}


//medidads gavetas

