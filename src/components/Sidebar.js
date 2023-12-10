import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarAction } from "../redux/actions/sidebarActions";
import DateAndTime from "./DateAndTime";
import "./Sidebar.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const sidebarData = useSelector((state) => state.sidebarReducer);
  const dataPresent = useSelector((state) => state.sidebarReducer.dataPresent);
  useEffect(() => {
    if (!dataPresent) {
      dispatch(sidebarAction());
    }
  }, [dataPresent, dispatch]);
  return (
    <div className="grid-container-sidebar">
      <div className="item1-sidebar">
        Welcome User
        <div className="item1-sidebar-in">{sidebarData.userName}</div>
      </div>
      <div className="item2-sidebar">
        <DateAndTime />
      </div>
      <div className="item3-sidebar">
        Notifications
        <div className="item3-sidebar-in">
          <ol>
            {sidebarData.notifications.map((obj, id) => (
              <li key={id}>{obj.message}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
