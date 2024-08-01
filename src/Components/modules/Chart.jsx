import React, { useState } from "react";
import { convertData } from "../../Helpers/convertData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ chart, setchart }) {
  const [type, settype] = useState("prices");
  const buttonHandeler =(event)=>{
    console.log(event.target.name);
    const types = event.target.innerText.toLowerCase().replace(" ", "_");
    settype(types)

  }

  return (
    <>
      <div className="fixed w-full h-full backdrop-blur-sm top-0 left-0">
        <span
          className=" inline-block w-8 h-8 bg-blue-500 rounded-lg text-center font-medium ml-10 mt-10   cursor-pointer  text-white  "
          onClick={() => setchart(null)}
        >
          X
        </span>
        <div className="w-3/6 bg-slate-800 p-10 m-auto rounded-2xl mt-8 border-2 border-slate-500 border-solid">
          <div className="flex mb-9">
            <img className="w-8 h-8 mr-2" src={chart.coin.image} alt="" />
            <p className="text-white font-medium">{chart.coin.name}</p>
          </div>
          <div className=" h-80">
            {" "}
            {/* div-->graph */}
            <ChartComponent data={convertData(chart, type)} type={type} />
          </div>
          <div className="flex space-x-10 mt-3 " onClick={buttonHandeler}>
            <button className="border border-blue-500 border-2 p-1 rounded-lg text-blue-600 font-medium bg-blue-300">Prices</button>
            <button className="border border-blue-500 border-2 p-1 rounded-lg text-blue-600 font-medium bg-blue-300">Market Caps</button>
            <button className="border border-blue-500 border-2 p-1 rounded-lg text-blue-600 font-medium bg-blue-300">Total volumes</button>
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex space-x-1">
              <p className="text-blue-600 font-medium">Prices:</p>
              <span className="text-white">${chart.coin.current_price}</span>
            </div>
            <div className="flex space-x-1">
              <p className="text-blue-600 font-medium">ATH:</p>
              <span className="text-white">${chart.coin.ath}</span>
            </div>
            <div className="flex space-x-1">
              <p className="text-blue-600 font-medium">Market Cap:</p>
              <span className="text-white">${chart.coin.market_cap}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart className="" width={400} height={400} data={data}>
        <CartesianGrid className="" stroke="#5218ee" />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#5218ee"
          strokeWidth="2px"
        />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
