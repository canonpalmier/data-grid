import { ActionIcon } from "@mantine/core";
import { Menu } from "@mantine/core";
import { Table } from "react-feather";

import { useDataGrid } from "../context/useDataGrid";
import { GroupColumn } from "./column/GroupColumn";

function GroupControls() {
  const context = useDataGrid();

  return (
    <Menu closeOnItemClick={false} position="bottom-end" shadow="sm">
      <Menu.Target>
        <ActionIcon variant="default" radius="xl">
          <Table size={14} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown miw={160}>
        {context.table.getAllFlatColumns().map((column) => (
          <GroupColumn key={column.id} column={column} />
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export { GroupControls };
