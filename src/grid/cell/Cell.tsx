import * as Mantine from "@mantine/core";
import * as TanStack from "@tanstack/react-table";
import * as Icon from "react-feather";

import useCell from "./useCell";
import useCellStyles from "./useCellStyles";

/** Properties to render a cell. */
interface CellProps<T, V> {
  /** Cell instance. */
  cell: TanStack.Cell<T, V>;
}

/** Handles render for cells. */
function Cell<T, V>(props: CellProps<T, V>) {
  const cell = useCell(props.cell);
  const styles = useCellStyles();

  if (cell.isPlaceholder) {
    return <td></td>;
  }

  if (cell.isAggregated) {
    return <td>{cell.aggregatedContent}</td>;
  }

  // prettier-ignore
  if (cell.isGrouped) {
    return (
      <td>
        <Mantine.Group spacing="xs" noWrap>
          <Mantine.UnstyledButton
            onClick={cell.handleExpand}
            className={styles.classes.expand}
          >
            {cell.isRowExpanded ? (
              <Icon.MinusSquare />
            ) : (
              <Icon.PlusSquare />
            )}
          </Mantine.UnstyledButton>
          <span className={styles.classes.cell}>
            {cell.content}
          </span>
        </Mantine.Group>
      </td>
    );
  }

  return <td>{cell.content}</td>;
}

export default Cell;
