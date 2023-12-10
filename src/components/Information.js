import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { infoAction } from "../redux/actions/infoActions";
import "./Information.css";

export default function Information() {
  const dispatch = useDispatch();
  const infoData = useSelector((state) => state.infoReducer);
  const dataPresent = useSelector((state) => state.infoReducer.dataPresent);
  useEffect(() => {
    if (!dataPresent) {
      dispatch(infoAction());
    }
  }, [dataPresent, dispatch]);
  return (
    <div className="grid-container-in">
      <div className="item1-in">
        Active Users
        <div className="item1-in-numbers">{infoData.activeUsers}</div>
      </div>
      <div className="item2-in">
        Total Users<div className="item2-in-numbers">{infoData.totalUsers}</div>
      </div>
      <div className="item3-in">
        Applications
        <div className="item3-in-numbers">{infoData.applications}</div>
      </div>
    </div>
  );
}
