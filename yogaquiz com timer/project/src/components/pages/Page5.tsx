import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page5: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Você já ouviu falar sobre Yoga Facial antes?
      </h2>
      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("✅ Sim, já testei")}>
          ✅ Sim, já testei
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("❌ Nunca ouvi falar")}>
          ❌ Nunca ouvi falar
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("🤏 Sei um pouco")}>
          🤏 Sei um pouco
        </Button>
      </div>
    </div>
  );
};

export default Page5;