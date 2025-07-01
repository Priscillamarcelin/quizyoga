import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page7: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Como você define sua pele hoje?
      </h2>
      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("Oleosa")}>
          Oleosa🧑🏽✨🛢️
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Seca")}>
          Seca🧓🏽
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Sensível")}>
          Sensível🧑🏻‍🦰🥺❗
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Mista")}>
          Mista🧖‍♀️🧴🌀
        </Button>
      </div>
    </div>
  );
};

export default Page7;