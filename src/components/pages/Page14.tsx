import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page14: React.FC<PageProps> = ({ onContinue, onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        3 minutos de exercícios faciais diariamente melhora a firmeza, circulação e aparência da pele!
      </h2>

      <img 
        src="https://i.ibb.co/r2GBK7xc/Screenshot-2025-06-21-213203.webp" 
        alt="Suelen antes e depois" 
        className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-4" 
      />

      <p className="text-lg font-semibold text-gray-900 mb-4">Suelen (50 anos)</p>
      
      <p className="text-lg text-gray-700 mb-8 max-w-2xl italic">
        "Eu tinha muita gordura no rosto, principalmente no pescoço, e com a idade minha pele começou ficar flácida e cair, mas depois que comecei a técnica de FaceYoga consegui queimar todas essas calorias e meus músculos do rosto ficaram mais firmes, me sinto 10 anos mais jovem..."
      </p>

      <div className="max-w-2xl mx-auto space-y-4 mb-8">
        <div className="flex items-center justify-center text-red-500 text-lg">
          <span className="mr-2">❌</span>
          <span>Se você já tentou de tudo e não viu nada acontecer...</span>
        </div>
        <div className="flex items-center justify-center text-red-500 text-lg">
          <span className="mr-2">❌</span>
          <span>Se você se olha no espelho e sente que a idade chegou antes da hora...</span>
        </div>
        <div className="flex items-center justify-center text-red-500 text-lg">
          <span className="mr-2">❌</span>
          <span>Se você está cansada de filtros ou maquiagens para parecer melhor...</span>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-6 max-w-2xl">
        Você só precisa de 3 minutos por dia, na frente do espelho, com os seus próprios dedos, e em poucos dias já é possível ver:
      </p>

      <div className="max-w-md w-full space-y-4 mb-8">
        <Button variant="answer" onClick={() => onSelectAnswer!("✨ Rugas suavizando")}>
          ✨ Rugas suavizando
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("⬆️ Bochechas mais altas")}>
          ⬆️ Bochechas mais altas
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("👋 Papada desaparecendo")}>
          👋 Papada desaparecendo
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("💎 Contorno facial definido")}>
          💎 Contorno facial definido
        </Button>
      </div>

      <div className="max-w-md w-full">
        <Button onClick={onContinue!}>
          Quero meu protocolo personalizado!
        </Button>
      </div>
    </div>
  );
};

export default Page14;