import * as TanStack from "@tanstack/react-table";
import * as React from "react";

/** Properties that compose data grid context. */
export interface DataGridContextProps {
  /** TanStack table instance. */
  table: TanStack.Table<any>;
}

/** Context to manage data grid values. */
const DataGridContext = React.createContext<DataGridContextProps | null>(null);

export default DataGridContext;
