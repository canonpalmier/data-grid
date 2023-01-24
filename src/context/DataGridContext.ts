import { Table } from "@tanstack/react-table";
import { createContext } from "react";

/** Properties that compose data grid context. */
interface DataGridContextProps {
  /** TanStack table instance. */
  table: Table<any>;
}

/** Context to manage data grid values. */
const DataGridContext = createContext<DataGridContextProps | null>(null);

export { DataGridContext, DataGridContextProps };
