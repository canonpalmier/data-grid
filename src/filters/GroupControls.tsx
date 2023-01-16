import * as Mantine from "@mantine/core";
import * as Icon from "react-feather";

import useDataGrid from "../context/useDataGrid";
import GroupColumn from "./column/GroupColumn";

/** Handles rendering for group controls. */
function GroupControls() {
  const context = useDataGrid();

  return (
    <Mantine.Menu closeOnItemClick={false} position="bottom-end" shadow="sm">
      <Mantine.Menu.Target>
        <Mantine.ActionIcon variant="default" radius="xl">
          <Icon.Table size={14} />
        </Mantine.ActionIcon>
      </Mantine.Menu.Target>
      <Mantine.Menu.Dropdown miw={160}>
        {context.table.getAllFlatColumns().map((column) => (
          <GroupColumn key={column.id} column={column} />
        ))}
      </Mantine.Menu.Dropdown>
    </Mantine.Menu>
  );
}

export default GroupControls;
