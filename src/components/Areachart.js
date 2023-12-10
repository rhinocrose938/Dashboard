import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { useSelector, useDispatch } from "react-redux";
import { areaAction } from "../redux/actions/areaActions";

export default function Areachart() {
  const dispatch = useDispatch();
  const areaData = useSelector((state) => state.areaReducer);
  const dataPresent = useSelector((state) => state.areaReducer.dataPresent);
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (!dataPresent) {
      dispatch(areaAction());
    }
    if (dataPresent) {
      setOptions({
        title: {
          text: "Sales by Month",
        },
        data: areaData.areaData,
        series: [
          {
            type: "area",
            xKey: "month",
            yKey: "subscriptions",
            yName: "Subscriptions",
          },
          {
            type: "area",
            xKey: "month",
            yKey: "services",
            yName: "Services",
          },
          {
            type: "area",
            xKey: "month",
            yKey: "products",
            yName: "Products",
          },
        ],
      });
    }
  }, [dataPresent, areaData.areaData, dispatch]);
  return <AgChartsReact options={options} />;
}
