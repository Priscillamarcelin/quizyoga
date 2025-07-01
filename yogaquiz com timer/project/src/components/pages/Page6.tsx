import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page6: React.FC<PageProps> = ({ onContinue, onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Você não está envelhecendo...
      </h2>
      
      <div className="max-w-2xl mx-auto space-y-6 mb-8">
        <p className="text-lg text-gray-700">
          Seu rosto só está desativado... Ele precisa de estímulo, não de cremes ou toxinas!
        </p>
        
        <p className="text-lg text-gray-700">
          O YogaFacial é uma técnica comprovada que ativa os músculos certos para levantar seu rosto, apagar rugas e redefinir seu contorno facial de forma 100% natural.
        </p>
        
        <p className="text-lg text-gray-700">
          Mas eles vão fazer de tudo pra esconder isso de você, porque não dá lucro pra indústria da estética...
        </p>
      </div>

      <img 
        src="https://i.ibb.co/7JYjGfrV/Chat-GPT-Image-21-de-jun-de-2025-20-09-42.webp" 
        alt="G1 Bem-Estar" 
        className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-6" 
      />

      <div className="max-w-2xl mx-auto space-y-6 mb-8">
        <p className="text-lg text-gray-700">
          Estudo internacional aponta que a prática regular de Face Yoga ativa músculos profundos do rosto, melhora a circulação e reduz rugas visivelmente em menos de uma semana.
        </p>
      </div>

      <img 
        src="https://i.ibb.co/d4JNzrS9/Chat-GPT-Image-21-de-jun-de-2025-20-18-55.webp" 
        alt="Mulher fazendo yoga facial" 
        className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-8" 
      />

      <div className="max-w-md w-full space-y-4 mb-8">
        <Button variant="answer" onClick={() => onSelectAnswer!("Botox")}>
          Botox{'\n'}Paralisa os seus músculos e só camuflam o problema...
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Cremes")}>
          Cremes{'\n'}Só hidratam sua pele e não resolvem nada...
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Cirurgia")}>
          Cirurgia{'\n'}São caras, arriscadas e dolorosas...
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Yoga Facial")}>
          Yoga Facial{'\n'}Técnica de 3 minutos por dia para rejuvenescer de forma natural...
        </Button>
      </div>
    </div>
  );
};

export default Page6;