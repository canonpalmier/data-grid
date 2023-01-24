import { Box } from "@mantine/core";
import { Group } from "@mantine/core";
import { Sx } from "@mantine/core";
import { UnstyledButton } from "@mantine/core";
import { Cell } from "@tanstack/react-table";
import { MinusSquare } from "react-feather";
import { PlusSquare } from "react-feather";

import { CellUtils } from "./CellUtils";

/** Properties to render a cell. */
interface CellProps<T, V> {
  /** Cell instance. */
  cell: Cell<T, V>;
}

function Cell<T, V>(props: CellProps<T, V>) {
  const utils = new CellUtils(props.cell);

  if (utils.isPlaceholder()) {
    return <td></td>;
  }

  if (utils.isAggregated()) {
    return <td>{utils.render(true)}</td>;
  }

  if (utils.isGrouped()) {
    return (
      <td>
        <Group spacing={4} noWrap>
          <UnstyledButton sx={buttonSx} onClick={utils.handleExpand()}>
            {utils.isRowExpanded() ? <MinusSquare /> : <PlusSquare />}
          </UnstyledButton>
          <Box component="span" sx={cellSx}>
            {utils.render(false)}
          </Box>
        </Group>
      </td>
    );
  }

  return <td>{utils.render(false)}</td>;
}

const cellSx: Sx = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const buttonSx: Sx = {
  display: "flex",
  alignItems: "center",
  width: 13,
  height: 13,
};

export { Cell };
