import * as Mantine from "@mantine/core";
import * as TanStack from "@tanstack/react-table";
import * as Icon from "react-feather";

import useColumn from "./useColumn";

/** Properties to render a column group control. */
interface GroupColumnProps<T, V> {
  /** Column instance. */
  column: TanStack.Column<T, V>;
}

/** Handles render for column group controls. */
function GroupColumn<T, V>(props: GroupColumnProps<T, V>) {
  const column = useColumn(props.column);

  // Ignore if column cannot group
  if (!column.canGroup) return null;

  return (
    <Mantine.Menu.Item onClick={column.handleGrouping}>
      <Mantine.Group position="apart">
        {column.content}
        {column.isGrouped ? (
          <Icon.CheckSquare size={14} />
        ) : (
          <Icon.Square size={14} />
        )}
      </Mantine.Group>
    </Mantine.Menu.Item>
  );
}

export default GroupColumn;
