import { ColumnDef } from "@tanstack/react-table";
import { useReactTable } from "@tanstack/react-table";
import { getCoreRowModel } from "@tanstack/react-table";
import { getFilteredRowModel } from "@tanstack/react-table";
import { getFacetedRowModel } from "@tanstack/react-table";
import { getFacetedUniqueValues } from "@tanstack/react-table";
import { getSortedRowModel } from "@tanstack/react-table";
import { getExpandedRowModel } from "@tanstack/react-table";
import { getGroupedRowModel } from "@tanstack/react-table";
import { ReactNode } from "react";

import { DataGridContext } from "./DataGridContext";

/** Properties to create a data grid instance. */
interface DataGridProviderProps<T> {
  /** Data collection. */
  dataCollection: T[];

  /** Column settings. */
  columns: ColumnDef<T>[];

  /** Data grid canvas. */
  children?: ReactNode;
}

/** Context wrapper for data grid values, initializes table. */
function DataGridProvider<T>(props: DataGridProviderProps<T>) {
  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    data: props.dataCollection,
    columns: props.columns,
  });

  return (
    <DataGridContext.Provider value={{ table }}>
      {props.children}
    </DataGridContext.Provider>
  );
}

export { DataGridProvider };
