import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(900); // 15 minutos

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-black text-white flex justify-between items-center px-4 py-2 shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-sm md:text-base font-medium">Preço reservado por:</span>
        <span className="text-lg md:text-xl font-bold">{minutes}:{seconds}</span>
      </div>
      <a
        href="https://pay.hotmart.com/J100339323Y?checkoutMode=10"
        className="bg-green-500 hover:bg-green-600 animate-pulse text-white px-4 py-2 rounded-md text-xs md:text-sm font-bold"
      >
        GARANTIR MEU PROTOCOLO ANTI-IDADE
      </a>
    </div>
  );
};

export default Timer;