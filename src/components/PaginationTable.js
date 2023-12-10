import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tableAction } from "../redux/actions/tableActions";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";

const Styles = styled.div`
  padding: 1rem;
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  table td,
  table th {
    border: 1px solid #ffb347;
    padding: 8px;
    color: #ffb347;
  }
  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    color: #ffb347;
  }
  .pagination {
    padding: 0.5rem;
    text-align: center;
  }
`;

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  useEffect(() => {
    setPageSize(2);
  }, [setPageSize]);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {pageOptions.length !== 0 ? (
        <div className="pagination">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            style={{ background: "#ffb347", color: "#fff", border: 'none', cursor: 'pointer' }}
          >
            {"<"}
          </button>{" "}
          <span style={{ color: "#ffb347"}}>
            <strong>
            Page{" "} {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            style={{ background: "#ffb347", color: "#fff", border: 'none', cursor: 'pointer' }}
          >
            {">"}
          </button>{" "}
        </div>
      ) : null}
    </>
  );
}

function PaginationTable() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableReducer);
  const dataPresent = useSelector((state) => state.tableReducer.dataPresent);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!dataPresent) {
      dispatch(tableAction());
    }
  }, [dataPresent, dispatch]);
  useEffect(() => {
    if (dataPresent) {
      setColumns(tableData.tableHeaderData);
      setData(tableData.candidatesData);
    }
  }, [dataPresent, tableData.tableHeaderData, tableData.candidatesData]);
  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
export default PaginationTable;
