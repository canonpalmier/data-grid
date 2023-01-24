import { ActionIcon } from "@mantine/core";
import { Menu } from "@mantine/core";
import { Eye } from "react-feather";

import { useDataGrid } from "../context/useDataGrid";
import { HideColumn } from "./column/HideColumn";

function HideControls() {
  const context = useDataGrid();

  return (
    <Menu closeOnItemClick={false} position="bottom-end" shadow="sm">
      <Menu.Target>
        <ActionIcon variant="default" radius="xl">
          <Eye size={14} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown miw={160}>
        {context.table.getAllFlatColumns().map((column) => (
          <HideColumn key={column.id} column={column} />
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export { HideControls };
