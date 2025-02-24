import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "motion/react";

interface CardProps {
    isMonthly: boolean;
    monthlyPrices: number;
    yearlyPrices: number;
    isSelect: boolean;
    level: string;
}

function Card({ isMonthly, monthlyPrices, yearlyPrices, isSelect, level }: CardProps) {
    
    return (
        <div
            className="w-full flex flex-row items-start justify-between border-1 border-[#aeaeb6] rounded-2xl p-4"
        >
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-black font-bold text-xl">
                    {level}
                </h1>
                <div className="flex flex-row flex-nowrap items-center justify-between">
                <span className="text-black font-bold flex flex-row items-center">
                    $
                    <NumberFlow
                    value={(isMonthly) ? monthlyPrices : yearlyPrices}
                    format={{ style: "decimal" }}
                    />
                </span>
                <span className=" text-[#7a797c] flex flex-row items-center">
                    /month
                </span>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isSelect ?
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
                    transition={{ duration: 0 }} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28px" 
                    viewBox="0 0 24 24" 
                    fill="#7a797c"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></motion.svg>
                }
            </AnimatePresence>
        </div>
    );
}

export default Card;