import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { useSelector, useDispatch } from "react-redux";
import { lineAction } from "../redux/actions/lineActions";

export default function Linechart() {
  const dispatch = useDispatch();
  const lineData = useSelector((state) => state.lineReducer);
  const dataPresent = useSelector((state) => state.lineReducer.dataPresent);
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (!dataPresent) {
      dispatch(lineAction());
    }
    if (dataPresent) {
      setOptions({
        title: {
          text: "Temperature Readings",
        },
        series: [
          {
            data: lineData.officeData,
            xKey: "time",
            yKey: "sensor",
            yName: "Lounge",
          },
          {
            data: lineData.loungeData,
            xKey: "time",
            yKey: "sensor",
            yName: "Office",
          },
        ],
        axes: [
          {
            type: "time",
            position: "bottom",
          },
          {
            type: "number",
            position: "left",
            label: {
              format: "#{.1f} °C",
            },
          },
        ],
      });
    }
  }, [dataPresent, lineData.officeData, lineData.loungeData, dispatch]);

  return <AgChartsReact options={options} />;
}
