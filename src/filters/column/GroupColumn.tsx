import { Group } from "@mantine/core";
import { Menu } from "@mantine/core";
import { Column } from "@tanstack/react-table";
import { CheckSquare } from "react-feather";
import { Square } from "react-feather";

import { ColumnUtils } from "./ColumnUtils";

/** Properties to render a column group control. */
interface GroupColumnProps<T, V> {
  /** Column instance. */
  column: Column<T, V>;
}

function GroupColumn<T, V>(props: GroupColumnProps<T, V>) {
  const utils = new ColumnUtils(props.column);

  // Ignore if column cannot group
  if (!utils.canGroup()) return null;

  return (
    <Menu.Item onClick={utils.handleGrouping()}>
      <Group position="apart">
        {utils.render()}
        {utils.isGrouped() ? <CheckSquare size={14} /> : <Square size={14} />}
      </Group>
    </Menu.Item>
  );
}

export { GroupColumn };
