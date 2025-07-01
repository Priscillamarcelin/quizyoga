import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { Answer } from '../types';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page11 from './pages/Page11';
import Page12 from './pages/Page12';
import Page13 from './pages/Page13';
import Page14 from './pages/Page14';
import Page15 from './pages/Page15';
import Page16 from './pages/Page16';
import Timer from './TopTimer/timer';

const Quiz: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const totalPages = 16;

  const goToNextPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(prev => Math.min(prev + 1, totalPages));
      setIsTransitioning(false);
    }, 300);
  };

  const goToPage = (pageNumber: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsTransitioning(false);
    }, 300);
  };

  const selectAnswer = (answer: string) => {
    const newAnswer: Answer = {
      page: currentPage,
      answer: answer
    };
    setAnswers(prev => [...prev, newAnswer]);
    setTimeout(() => {
      goToNextPage();
    }, 500);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 onContinue={goToNextPage} />;
      case 2:
        return <Page2 onSelectAnswer={selectAnswer} />;
      case 3:
        return <Page3 onSelectAnswer={selectAnswer} />;
      case 4:
        return <Page4 onSelectAnswer={selectAnswer} />;
      case 5:
        return <Page5 onSelectAnswer={selectAnswer} />;
      case 6:
        return <Page6 onContinue={goToNextPage} onSelectAnswer={selectAnswer} />;
      case 7:
        return <Page7 onSelectAnswer={selectAnswer} />;
      case 8:
        return <Page8 onSelectAnswer={selectAnswer} />;
      case 9:
        return <Page9 onContinue={goToNextPage} />;
      case 10:
        return <Page10 onSelectAnswer={selectAnswer} />;
      case 11:
        return <Page11 onSelectAnswer={selectAnswer} />;
      case 12:
        return <Page12 onContinue={goToNextPage} />;
      case 13:
        return <Page13 onSelectAnswer={selectAnswer} />;
      case 14:
        return <Page14 onContinue={goToNextPage} onSelectAnswer={selectAnswer} />;
      case 15:
        return <Page15 onContinue={goToNextPage} />;
      case 16:
        return <Page16 onContinue={() => console.log('Quiz completed!')} />;
      default:
        return <Page1 onContinue={goToNextPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ProgressBar currentPage={currentPage} totalPages={totalPages} />
      
      {/* ✅ Timer só aparece na página 16 */}
      {currentPage === 16 && <Timer />}

      <div className={`transition-all duration-300 ease-in-out ${
        isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        {renderCurrentPage()}
      </div>
    </div>
  );
};

export default Quiz;