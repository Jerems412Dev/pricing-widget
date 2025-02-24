import { useState } from 'react'
import './App.css'
import { motion } from 'motion/react'
import Card from './Card';

function App() {
  const monthlyPrices = [
    { name: "Free",price: 0.00 },
    { name: "Starter",price: 9.99 },
    { name: "Pro",price: 19.99 }
  ];

  const yearlyPrices = [
    { price: 0.00 },
    { price: 7.49 },
    { price: 17.49 }
  ];

  const [isMonthly, setIsMonthly] = useState(true);

  const [isSelect, setIsSelect] = useState(1);
  const handleSelect = (index: number) => {
    setIsSelect(index);
  };

  return (
    <>
      <motion.div
        className="w-full h-screen flex flex-col items-center justify-center bg-[#fefefe]"
      >
        <motion.div 
          className="max-lg:w-[35%] max-md:w-[50%] max-sm:w-[90%] w-[27%] h-fit flex flex-col items-center justify-center rounded-3xl border-1 border-[#aeaeb6] bg-[#fefefe] p-2 gap-y-2"
        >
          <div className="relative w-full flex flex-row items-center">
            <div className="absolute z-10 w-full flex flex-row items-center justify-between p-1 gap-x-2 rounded-full">
              <button
                onClick={() => setIsMonthly(true)}
                className="outline-none flex flex-row items-center justify-center w-1/2 h-full rounded-full text-sm text-black font-bold px-2 py-2"
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className="outline-none flex flex-row items-center justify-center w-1/2 h-full rounded-full text-sm text-black font-bold px-2 py-2"
              >
                Yearly
              </button>
            </div>
            <div className="bg-[#f5f4fb] w-full flex flex-row items-center justify-between p-1 gap-x-2 rounded-full">
              <motion.button
                initial={{ x: isMonthly ? "0%" : "100%" }}
                animate={{ x: isMonthly ? "0%" : "100%" }}
                transition={{ duration: 0.3 }}
                className="text-transparent outline-none flex flex-row items-center justify-center w-1/2 rounded-full bg-white text-sm font-bold px-2 py-2"
              >
                Text
              </motion.button>
            </div>
          </div>
          <div className="relative w-full flex flex-col items-center gap-y-2 p-2">
            {
              monthlyPrices.map((card, index) => (
                <div
                  className="w-full flex flex-row items-center"
                  onClick={() => handleSelect(index + 1)}
                  key={index}
                >
                  <Card
                    level={monthlyPrices[index].name}
                    isMonthly={isMonthly}
                    monthlyPrices={card.price}
                    yearlyPrices={yearlyPrices[index].price}
                    isSelect={isSelect === index + 1}
                  />
                </div>
              ))
            }
            <motion.div 
              initial={{ y: isSelect === 1 ? "0%" : isSelect === 2 ? "110%" : "220%" }}
              animate={{ y: isSelect === 1 ? "0%" : isSelect === 2 ? "110%" : "220%" }}
              transition={{ duration: 0.3 }}
              className="absolute z-0 left-2 right-2 h-[30%] flex flex-row border-2 border-black rounded-2xl"
            >
            </motion.div>
          </div>
          <button 
            className="w-full flex flex-row items-center justify-center bg-black text-white text-lg rounded-full p-2"
          >
            Get Started
          </button>
        </motion.div>
      </motion.div>
    </>
  )
}

export default App
