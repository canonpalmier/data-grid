import { Select } from "@mantine/core";
import { Column } from "@tanstack/react-table";

import { ColumnUtils } from "./ColumnUtils";

/** Properties to render a column filter control. */
interface FilterColumnProps<T, V> {
  /** Column instance. */
  column: Column<T, V>;
}

function FilterColumn<T, V>(props: FilterColumnProps<T, V>) {
  const utils = new ColumnUtils(props.column);

  // Ignore if cannot filter
  if (!utils.canFilter()) return null;

  return (
    <Select
      size="xs"
      data={utils.getValues()}
      placeholder={utils.render()}
      onChange={props.column.setFilterValue}
      clearable
      searchable
    />
  );
}

export { FilterColumn };
