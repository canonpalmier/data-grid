import * as Mantine from "@mantine/core";
import * as TanStack from "@tanstack/react-table";

import useColumn from "./useColumn";

/** Properties to render a column filter control. */
interface FilterColumnProps<T, V> {
  /** Column instance. */
  column: TanStack.Column<T, V>;
}

/** Handles render for column filter controls. */
function FilterColumn<T, V>(props: FilterColumnProps<T, V>) {
  const column = useColumn(props.column);

  // Ignore if cannot filter
  if (!column.canFilter) {
    return null;
  }

  return (
    <Mantine.Select
      size="xs"
      data={column.values}
      placeholder={column.content}
      onChange={column.handleFiltering}
      clearable
      searchable
    />
  );
}

export default FilterColumn;
