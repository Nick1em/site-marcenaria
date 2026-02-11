

import { useState } from "react";

export function useDimensoesEstrutura() {
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState('');
  const [profundidade, setProfundidade] = useState('');

  const [resultado, setResultado] = useState(0);

  const dimensoesCompletas =
    altura !== '' &&
    largura !== '' &&
    profundidade !== '';

  return {
    largura,
    setLargura,
    altura,
    setAltura,
    profundidade,
    setProfundidade,
    resultado,
    setResultado,
    dimensoesCompletas,
  };
}
