import { useContext } from "react";

import { DataGridContext } from "./DataGridContext";

/** Provides access in a type-safe manner to context values. */
function useDataGrid() {
  const context = useContext(DataGridContext);

  if (!context) {
    throw new Error("useDataGrid must be within a provider.");
  }

  return context;
}

export { useDataGrid };
