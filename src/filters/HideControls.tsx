import * as Mantine from "@mantine/core";
import * as Icon from "react-feather";

import useDataGrid from "../context/useDataGrid";
import HideColumn from "./column/HideColumn";

/** Handles rendering for hide controls. */
function HideControls() {
  const context = useDataGrid();

  return (
    <Mantine.Menu closeOnItemClick={false} position="bottom-end" shadow="sm">
      <Mantine.Menu.Target>
        <Mantine.ActionIcon variant="default" radius="xl">
          <Icon.Eye size={14} />
        </Mantine.ActionIcon>
      </Mantine.Menu.Target>
      <Mantine.Menu.Dropdown miw={160}>
        {context.table.getAllFlatColumns().map((column) => (
          <HideColumn key={column.id} column={column} />
        ))}
      </Mantine.Menu.Dropdown>
    </Mantine.Menu>
  );
}

export default HideControls;
