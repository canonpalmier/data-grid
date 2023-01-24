import { Group } from "@mantine/core";
import { Menu } from "@mantine/core";
import { Column } from "@tanstack/react-table";
import { Eye } from "react-feather";
import { EyeOff } from "react-feather";

import { ColumnUtils } from "./ColumnUtils";

/** Properties to render a column hide control. */
interface HideColumnProps<T, V> {
  /** Column instance. */
  column: Column<T, V>;
}

function HideColumn<T, V>(props: HideColumnProps<T, V>) {
  const utils = new ColumnUtils(props.column);

  // Ignore if cannot hide
  if (!utils.canHide()) return null;

  return (
    <Menu.Item onClick={utils.handleHiding()}>
      <Group position="apart">
        {utils.render()}
        {utils.isHidden() ? <EyeOff size={14} /> : <Eye size={14} />}
      </Group>
    </Menu.Item>
  );
}

export { HideColumn };
