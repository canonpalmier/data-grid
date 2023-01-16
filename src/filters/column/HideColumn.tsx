import * as Mantine from "@mantine/core";
import * as TanStack from "@tanstack/react-table";
import * as Icon from "react-feather";

import useColumn from "./useColumn";

/** Properties to render a column hide control. */
interface HideColumnProps<T, V> {
  /** Column instance. */
  column: TanStack.Column<T, V>;
}

/** Handles render for column hide controls. */
function HideColumn<T, V>(props: HideColumnProps<T, V>) {
  const column = useColumn(props.column);

  // Ignore if cannot hide
  if (!column.canHide) {
    return null;
  }

  // prettier-ignore
  return (
    <Mantine.Menu.Item onClick={column.handleHiding}>
      <Mantine.Group position="apart">
        {column.content}
        {column.isHidden ? (
          <Icon.EyeOff size={14} />
        ) : (
          <Icon.Eye size={14} />
        )}
      </Mantine.Group>
    </Mantine.Menu.Item>
  );
}

export default HideColumn;
