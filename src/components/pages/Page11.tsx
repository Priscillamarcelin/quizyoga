import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page11: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Você já fez procedimentos estéticos?
      </h2>
      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("💸 Sim, já gastei muito")}>
          💸 Sim, já gastei muito
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("🤏 Fiz poucas vezes")}>
          🤏 Fiz poucas vezes
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("❌ Nunca fiz")}>
          ❌ Nunca fiz
        </Button>
      </div>
    </div>
  );
};

export default Page11;