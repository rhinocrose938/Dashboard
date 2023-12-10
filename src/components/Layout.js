import React, { Suspense } from "react";
import "./Layout.css";

const Barchart = React.lazy(() => import('./Barchart'));
const Doughnut = React.lazy(() => import('./Doughnut'));
const Piechart  = React.lazy(() => import('./Piechart'));
const Linechart = React.lazy(() => import('./Linechart'));
const Areachart = React.lazy(() => import('./Areachart'));
const Information = React.lazy(() => import('./Information'));
const PaginationTable = React.lazy(() => import('./PaginationTable'));
const Sidebar = React.lazy(() => import('./Sidebar'));


export default function Layout() {
  return (
    <div className="grid-container">
      <div className="item1">
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
        </Suspense>
      </div>
      <div className="item2">
        <Suspense fallback={<div>Loading...</div>}>
          <Information />
        </Suspense>
      </div>
      <div className="item4">
        <Suspense fallback={<div>Loading...</div>}>
          <Areachart />
        </Suspense>
      </div>
      <div className="item3">
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationTable />
        </Suspense>
      </div>
      <div className="item6">
        <Suspense fallback={<div>Loading...</div>}>
          <Linechart />
        </Suspense>
      </div>
      <div className="item7">
        <Suspense fallback={<div>Loading...</div>}>
          <Barchart />
        </Suspense>
      </div>
      <div className="item8">
        <Suspense fallback={<div>Loading...</div>}>
          <Doughnut />
        </Suspense>
      </div>
      <div className="item9">
        <Suspense fallback={<div>Loading...</div>}>
          <Piechart />
        </Suspense>
      </div>
    </div>
  );
}
