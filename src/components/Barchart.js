import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { useSelector, useDispatch } from "react-redux";
import { barAction } from "../redux/actions/barActions";

export default function Barchart() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState({});
  const barData = useSelector((state) => state.barReducer);
  const dataPresent = useSelector((state) => state.barReducer.dataPresent);
  useEffect(() => {
    if (!dataPresent) {
      dispatch(barAction());
    }
    if (dataPresent) {
      setOptions({
        title: {
          text: "Revenue by Product Category",
        },
        subtitle: {
          text: "In Billion U.S. Dollars",
        },
        data: barData.barData,
        series: [
          {
            type: "bar",
            xKey: "quarter",
            yKey: "iphone",
            yName: "iPhone",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "mac",
            yName: "Mac",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "ipad",
            yName: "iPad",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "wearables",
            yName: "Wearables",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "services",
            yName: "Services",
          },
        ],
      });
    }
  }, [dataPresent, barData.barData, dispatch]);
  return <AgChartsReact options={options} />;
}
