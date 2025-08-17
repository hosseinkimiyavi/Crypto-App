import React from "react";
import { RotatingLines } from "react-loader-spinner";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { chartCoin } from "../../services/cryptoApi";

function Tables({ coines, loading, setchart }) {
  return (
    <div className="flex justify-center items-center mt-16 px-2">
      {loading ? (
        <div className="flex items-center justify-center mt-56">
          <RotatingLines strokeColor="white" width="52" height="52" />
        </div>
      ) : (
        <div className="w-full overflow-x-auto rounded-lg shadow-2xl shadow-blue-400">
          <table className="text-white w-full m-auto">
            <thead>
              <tr className="border-b-2 text-sm md:text-base">
                <th className="px-3 py-2 text-left">Coin</th>
                <th className="px-3 py-2 text-left hidden md:table-cell">
                  Name
                </th>
                <th className="px-3 py-2 text-left">Price</th>
                <th className="px-3 py-2 text-left">24h</th>
                <th className="px-3 py-2 text-left hidden md:table-cell">
                  Total Volume
                </th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {coines.map((coine) => (
                <TableRow coines={coine} key={coine.id} setchart={setchart} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const TableRow = ({ coines, setchart }) => {
  const {
    id,
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  } = coines;

  const chartHandler = async () => {
    try {
      const res = await fetch(chartCoin(id));
      const json = await res.json();
      setchart({ ...json, coin: coines });
    } catch (err) {
      setchart(null);
    }
  };

  return (
    <tr className="border-b border-gray-700 text-sm md:text-base">
      <td className="px-3 py-2">
        <div
          className="flex items-center cursor-pointer"
          onClick={chartHandler}
        >
          <img src={image} alt={symbol} className="h-7 w-7 mr-2" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td className="px-3 py-2 hidden md:table-cell">{name}</td>
      <td className="px-3 py-2">{current_price.toLocaleString()}</td>
      <td
        className={`px-3 py-2 ${
          price_change > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {price_change.toFixed(2)}%
      </td>
      <td className="px-3 py-2 hidden md:table-cell">
        {total_volume.toLocaleString()}
      </td>
      <td className="px-3 py-2 hidden md:table-cell">
        <img src={price_change > 0 ? chartUp : chartDown} alt="" />
      </td>
    </tr>
  );
};
export default Tables;
