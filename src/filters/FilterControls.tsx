import { MantineProvider } from "@mantine/core";

import { useDataGrid } from "../context/useDataGrid";
import { FilterColumn } from "./column/FilterColumn";

function FilterControls() {
  const context = useDataGrid();

  return (
    <MantineProvider theme={{ primaryColor: "gray" }}>
      {context.table.getAllFlatColumns().map((column) => (
        <FilterColumn key={column.id} column={column} />
      ))}
    </MantineProvider>
  );
}

export { FilterControls };
