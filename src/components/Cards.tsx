import { TrendingUp, TrendingDown } from "lucide-react";

const Cards = ({
  title,
  growth,
  amount,
  subHead,
  data,
}: {
  title: string;
  growth?: string;
  amount: string;
  subHead: string;
  data: string;
}) => {
  return (
    <div className="grid grid-cols-1 gap-2 font-semibold border border-gray-400/30 p-6 max-md:p-3 rounded-2xl shadow-md shadow-zinc-300/60 transition-all duration-300">
      <ul className="flex justify-between w-full">
        <li className="text-lg max-md:text-sm">{title}</li>
        <li
          className={`text-[12px] max-md:text-[10px] h-min py-1 px-2 border border-gray-400 rounded-2xl min-w-min`}
        >
          {`${growth} ${growth && (growth.startsWith("+") ? "↑" : "↓")}`}
        </li>
      </ul>
      <h1 className="text-3xl max-md:text-2xl py-2">{amount}</h1>
      <p className="text-sm max-md:text-[12px]">
        {subHead}{" "}
        {growth ? (
          growth.startsWith("+") ? (
            <TrendingUp className="inline-block w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="inline-block w-4 h-4 text-red-600" />
          )
        ) : null}
      </p>
      <p className=" text-sm max-md:text-[12px]">{data}</p>
    </div>
  );
};

export default Cards;
