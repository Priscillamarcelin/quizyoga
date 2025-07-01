import React from 'react';
import { PageProps } from '../../types';

const Page16: React.FC<PageProps> = () => {
  const handleCheckoutClick = () => {
    const eventID = `checkout-${Date.now()}`;

    if (typeof fbq !== 'undefined') {
      fbq('track', 'InitiateCheckout', {
        value: 37.00,
        currency: 'BRL',
        eventID: eventID
      });
    }
  };

  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Seu protocolo personalizado ANTI-IDADE está pronto!
      </h2>

      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        O Yogafacial é o primeiro aplicativo que combina IA + exercícios faciais guiados para levantar seu rosto, apagar rugas e redefinir seu contorno facial de forma 100% natural...
      </p>

      <img 
        src="https://i.ibb.co/ksprPf4Y/Whats-App-Image-2025-06-21-at-22-25-56-ea3aaa77.webp" 
        alt="App FaceYoga" 
        className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-8" 
      />

      {/* Bloco de vídeo YouTube */}
      <p className="text-lg font-semibold text-gray-800 mb-4">
  👇 Veja um exemplo de exercício yoga facial
</p>
      <div className="w-full max-w-xl mx-auto mb-12">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/iPZml9juZrg"
            title="Vídeo de Apresentação"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Primeiro botão */}
      <div className="max-w-md mx-auto mt-4 mb-6">
        <a
          href="https://pay.hotmart.com/J100339323Y?checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCheckoutClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg w-full block text-center blink"
        >
          Acessar agora por R$37
        </a>
      </div>

      <img 
  src="https://i.ibb.co/xqX0bvHf/O-E-YOGA.webp" 
  alt="Programa pessoal Yoga Facial" 
  className="w-full max-w-4xl mx-auto my-8 rounded-lg shadow-xl"
/>
      {/* Imagem promocional com mockup */}
<img 
  src="https://i.ibb.co/bRbtV9mB/Chat-GPT-Image-26-de-jun-de-2025-22-28-46.webp" 
  alt="Programa pessoal Yoga Facial" 
  className="w-full max-w-4xl mx-auto my-8 rounded-lg shadow-xl"
/>

      {/* ... (continua igual até o final) */}

       {/* Imagem final adicional */}
      <img 
        src="https://i.ibb.co/Rpvdt8cz/Whats-App-Image-2025-06-25-at-19-40-46-d940b0af.webp" 
        alt="Imagem final adicional" 
        className="w-full max-w-sm h-auto mt-0 mb-12 rounded-md shadow-lg" 
      />

  <div className="flex justify-center my-16">
  <img 
    src="https://i.ibb.co/dwZpzmTv/Chat-GPT-Image-25-de-jun-de-2025-20-56-37.png"
    alt="Mockup Yoga Facial"
    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
  />
</div>


      {/* Título acima das imagens de depoimentos */}
<h3 className="text-2xl font-bold text-gray-900 text-center mb-6 mt-16">
  💬 Veja o que mulheres reais estão dizendo sobre o Yoga Facial:
</h3>
      
      {/* Oito imagens abaixo do botão */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <img src="https://i.ibb.co/Y7d0dmCW/Chat-GPT-Image-21-de-jun-de-2025-23-48-15.webp" alt="Resultado 1" className="w-full rounded-lg shadow-md" />
        <img src="https://i.ibb.co/3xPMdDD/Chat-GPT-Image-21-de-jun-de-2025-23-56-56.webp" alt="Resultado 2" className="w-full rounded-lg shadow-md" />
        <img src="https://i.ibb.co/jkwtBskb/Chat-GPT-Image-21-de-jun-de-2025-23-59-45.webp" alt="Resultado 3" className="w-full rounded-lg shadow-md" />
        <img src="https://i.ibb.co/LXFZ8pyM/Chat-GPT-Image-26-de-jun-de-2025-19-33-16.webp" alt="Resultado 4" className="w-full rounded-lg shadow-md" />
        <img src="https://i.ibb.co/nMyr18TZ/1fcf0333-f88e-423a-abfe-21d3c3088ed8.webp" alt="Resultado 5" className="w-full rounded-lg shadow-md" />
        <img src="https://i.ibb.co/Cj5dzvc/Chat-GPT-Image-26-de-jun-de-2025-20-37-01.webp" className="w-full rounded-lg shadow-md" />
        
      </div>

      

      {/* Segundo botão */}
      <div className="max-w-md w-full mb-8">
        <a
          href="https://pay.hotmart.com/J100339323Y?checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCheckoutClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg w-full block text-center blink"
        >
          Acessar Agora por R$37!
        </a>
      </div>

      {/* Imagem final adicional */}
      <img 
        src="https://i.ibb.co/RkyY5Wsr/Chat-GPT-Image-22-de-jun-de-2025-16-41-55.webp" 
        alt="Imagem final adicional" 
        className="w-full max-w-sm h-auto mt-0 mb-12 rounded-md shadow-lg" 
      />
      
      {/* Imagem final adicional */}
      <img 
        src="https://i.ibb.co/Rpvdt8cz/Whats-App-Image-2025-06-25-at-19-40-46-d940b0af.webp" 
        alt="Imagem final adicional" 
        className="w-full max-w-sm h-auto mt-0 mb-12 rounded-md shadow-lg" 
      />


{/* Botão abaixo da imagem */}
<div className="flex justify-center mb-16">
  <a
    href="#oferta" // ou substitua por um link externo ou outra seção
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-base font-semibold shadow-md transition"
  >
    Quero Começar Agora!
  </a>
</div>

      {/* Nova imagem final extra */}
      <img 
        src="https://i.ibb.co/6cq4G4vb/Chat-GPT-Image-22-de-jun-de-2025-00-05-54.webp" 
        alt="Imagem final extra" 
        className="w-full max-w-sm h-auto mt-4 mb-16 rounded-md shadow-lg" 
      />
    </div>
  );
};

export default Page16;