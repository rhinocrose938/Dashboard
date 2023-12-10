import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { useSelector, useDispatch } from "react-redux";
import { pieAction } from "../redux/actions/pieActions";

export default function Piechart() {
  const dispatch = useDispatch();
  const pieData = useSelector((state) => state.pieReducer);
  const dataPresent = useSelector((state) => state.pieReducer.dataPresent);
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (!dataPresent) {
      dispatch(pieAction());
    }
    if (dataPresent) {
      setOptions({
        data: pieData.pieData,
        series: [
          {
            type: "pie",
            angleKey: "amount",
            legendItemKey: "asset",
          },
        ],
      });
    }
  }, [dataPresent, pieData.pieData, dispatch]);
  return <AgChartsReact options={options} />;
}
