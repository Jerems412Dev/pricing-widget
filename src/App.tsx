import { useState } from 'react'
import './App.css'
import { AnimatePresence, motion } from 'motion/react'
import NumberFlow from '@number-flow/react'

function App() {
  const monthlyPrices = [
    { price: 0.00 },
    { price: 9.99 },
    { price: 19.99 }
  ];

  const yearlyPrices = [
    { price: 0.00 },
    { price: 7.49 },
    { name: "Pro", price: 17.49 }
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
            <motion.div
              onClick={() => handleSelect(1)} 
              className="w-full flex flex-row items-start justify-between border-1 border-[#aeaeb6] rounded-2xl p-4"
            >
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-black font-bold text-xl">
                  Free
                </h1>
                <div className="flex flex-row gap-x-1">
                  <span className="text-black font-bold">
                    $
                    <NumberFlow
                      value={(isMonthly) ? monthlyPrices[0].price : yearlyPrices[0].price}
                      format={{ style: "decimal" }}
                    />
                  </span>
                  <span className="text-[#7a797c]">
                    /month
                  </span>
                </div>
              </div>
              <AnimatePresence mode="wait">
                {isSelect === 1 ?
                  <motion.svg
                    key={1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} 
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></motion.svg>
                  :
                  <motion.svg
                    key={2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28px" 
                    viewBox="0 0 24 24" 
                    fill="#7a797c"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></motion.svg>
                }
              </AnimatePresence>
            </motion.div>
            <motion.div 
              onClick={() => handleSelect(2)}
              className="w-full flex flex-row items-start justify-between border-1 border-[#aeaeb6] rounded-2xl p-4"
            >
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-between gap-x-2">
                  <h1 className="text-black font-bold text-xl">
                    Starter
                  </h1>
                  <p className="rounded-full bg-[#f3edb6] text-xs text-[#555024] font-bold py-1 px-2">
                    Popular
                  </p>
                </div>
                <div className="flex flex-row w-[65%] flex-nowrap items-center justify-between">
                  <span className="w-1/2 text-black font-bold flex flex-row items-center">
                    $
                    <NumberFlow
                      value={(isMonthly) ? monthlyPrices[1].price : yearlyPrices[1].price}
                      format={{ style: "decimal" }}
                    />
                  </span>
                  <span className="text-[#7a797c] w-1/2 flex flex-row items-center">
                    /month
                  </span>
                </div>
              </div>
              <AnimatePresence mode="wait">
                {isSelect === 2 ?
                  <motion.svg
                    key={3}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} 
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></motion.svg>
                  :
                  <motion.svg
                    key={4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28px" 
                    viewBox="0 0 24 24" 
                    fill="#7a797c"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></motion.svg>
                }
              </AnimatePresence>
            </motion.div>
            <motion.div
              onClick={() => handleSelect(3)} 
              className="w-full flex flex-row items-start justify-between border-1 border-[#aeaeb6] rounded-2xl p-4"
            >
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-black font-bold text-xl">
                  Pro
                </h1>
                <div className="flex flex-row flex-nowrap items-center justify-between">
                  <span className="text-black font-bold flex flex-row items-center">
                    $
                    <NumberFlow
                      value={(isMonthly) ? monthlyPrices[2].price : yearlyPrices[2].price}
                      format={{ style: "decimal" }}
                    />
                  </span>
                  <span className=" text-[#7a797c] flex flex-row items-center">
                    /month
                  </span>
                </div>
              </div>
              <AnimatePresence mode="wait">
                {isSelect === 3 ?
                  <motion.svg
                    key={5}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} 
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></motion.svg>
                  :
                  <motion.svg
                    key={6}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0 }} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28px" 
                    viewBox="0 0 24 24" 
                    fill="#7a797c"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></motion.svg>
                }
              </AnimatePresence>
            </motion.div>
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
