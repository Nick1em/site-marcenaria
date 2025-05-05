'use client';

// Tive um "problema" para fazer um carrosel de imagem na Home..
// ..vou pesquisar uma forma melhor de fazer isso depois de acaabar o projeto

import dynamic from 'next/dynamic';

// Importa com SSR desativado
const ImagemCarrosel = dynamic(() => import('./imagemCarrosel'), {
  ssr: false,
});

export default function CarroselWrapper() {
  return <ImagemCarrosel />;
}