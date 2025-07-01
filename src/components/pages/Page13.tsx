import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page13: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Você estaria disposta a investir 3 minutos do seu dia para cuidar da sua aparência?
      </h2>
      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("✅ Claro")}>
          ✅ Claro
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("🤔 Talvez")}>
          🤔 Talvez
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("⏰ Não tenho tempo")}>
          ⏰ Não tenho tempo
        </Button>
      </div>
    </div>
  );
};

export default Page13;