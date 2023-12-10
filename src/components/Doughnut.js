import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { useSelector, useDispatch } from "react-redux";
import { doughnutAction } from "../redux/actions/doughnutActions";

export default function Doughnut() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState({});
  const doughnutData = useSelector((state) => state.doughnutReducer);
  const dataPresent = useSelector((state) => state.doughnutReducer.dataPresent);
  useEffect(() => {
    if (!dataPresent) {
      dispatch(doughnutAction());
    }
    if (dataPresent) {
      setOptions({
        data: doughnutData.doughnutData,
        series: [
          {
            type: "pie",
            calloutLabelKey: "asset",
            angleKey: "amount",
            innerRadiusRatio: 0.7,
          },
        ],
      });
    }
  }, [dataPresent, doughnutData.doughnutData, dispatch]);
  return <AgChartsReact options={options} />;
}
