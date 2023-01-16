import * as Mantine from "@mantine/core";

import useDataGrid from "../context/useDataGrid";
import FilterColumn from "./column/FilterColumn";

/** Handles rendering for filter controls. */
function FilterControls() {
  const context = useDataGrid();

  return (
    <Mantine.MantineProvider theme={{ primaryColor: "gray" }}>
      {context.table.getAllFlatColumns().map((column) => (
        <FilterColumn key={column.id} column={column} />
      ))}
    </Mantine.MantineProvider>
  );
}

export default FilterControls;
