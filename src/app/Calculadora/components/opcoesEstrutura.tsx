'use client';


import styles from '../../style/orcamento.module.css';

type Props = {
    
  mostrarDivisorias?: boolean;
  mostrarGavetas?: boolean;
  mostarPorta?: boolean;

  temPorta?: string;
  setTemPorta?: (v: string) => void;

  temDivisoria: string;
  setTemDivisoria: (v: string) => void;

  temGaveta: string;
  setTemGaveta: (v: string) => void;
};

export default function OpcoesEstrutura({

  mostrarDivisorias,
  mostrarGavetas,
  mostarPorta,

  temPorta,
  setTemPorta,

  temDivisoria,
  setTemDivisoria,

  temGaveta,
  setTemGaveta,


}: Props) {
  return (
    <>

      {mostarPorta && (
        <>
          <label className={styles.label}>Terá porta?</label>
          <div>
            <label>
              <input
                type="radio"
                value="sim"
                checked={temPorta === 'sim'}
                onChange={(e) => setTemPorta?.(e.target.value)}
              />
              Sim
            </label>


            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                value="não"
                checked={temPorta === 'não'}
                onChange={(e) => setTemPorta?.(e.target.value)}
              />
              Não
            </label>
          </div>
        </>
      )}

      {mostrarDivisorias && (
        <>
          <label className={styles.label}>Terá divisórias?</label>
          <div>
            <label>
              <input
                type="radio"
                value="sim"
                checked={temDivisoria === 'sim'}
                onChange={(e) => setTemDivisoria(e.target.value)}
              />
              Sim
            </label>

            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                value="não"
                checked={temDivisoria === 'não'}
                onChange={(e) => setTemDivisoria(e.target.value)}
              />
              Não
            </label>
          </div>
        </>
      )}

      {mostrarGavetas && (
        <>
          <label className={styles.label}>Terá gavetas?</label>
          <div>
            <label>
              <input
                type="radio"
                value="sim"
                checked={temGaveta === 'sim'}
                onChange={(e) => setTemGaveta(e.target.value)}
              />
              Sim
            </label>

            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                value="não"
                checked={temGaveta === 'não'}
                onChange={(e) => setTemGaveta(e.target.value)}
              />
              Não
            </label>
          </div>
        </>
      )}
    </>
  );
}
