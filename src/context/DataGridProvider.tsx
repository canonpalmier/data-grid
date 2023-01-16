import * as TanStack from "@tanstack/react-table";
import * as React from "react";

import DataGridContext from "./DataGridContext";

/** Properties to create a data grid instance. */
interface DataGridProviderProps<T> {
  /** Data collection. */
  dataCollection: T[];

  /** Column settings. */
  columns: TanStack.ColumnDef<T>[];

  /** Data grid canvas. */
  children?: React.ReactNode;
}

/** Context wrapper for data grid values, initializes table. */
function DataGridProvider<T>(props: DataGridProviderProps<T>) {
  const table = TanStack.useReactTable({
    getCoreRowModel: TanStack.getCoreRowModel(),
    getFilteredRowModel: TanStack.getFilteredRowModel(),
    getFacetedRowModel: TanStack.getFacetedRowModel(),
    getFacetedUniqueValues: TanStack.getFacetedUniqueValues(),
    getSortedRowModel: TanStack.getSortedRowModel(),
    getExpandedRowModel: TanStack.getExpandedRowModel(),
    getGroupedRowModel: TanStack.getGroupedRowModel(),
    data: props.dataCollection,
    columns: props.columns,
  });

  return (
    <DataGridContext.Provider value={{ table }}>
      {props.children}
    </DataGridContext.Provider>
  );
}

export default DataGridProvider;
