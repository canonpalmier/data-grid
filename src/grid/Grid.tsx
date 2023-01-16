import * as Mantine from "@mantine/core";

import useDataGrid from "../context/useDataGrid";
import Cell from "./cell/Cell";
import Header from "./header/Header";
import useGridStyles from "./useGridStyles";

function Grid() {
  const context = useDataGrid();
  const styles = useGridStyles();

  return (
    <Mantine.ScrollArea>
      <Mantine.Box component="table" className={styles.classes.table}>
        <thead>
          {context.table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Header key={header.id} header={header} />
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {context.table.getRowModel().rows.map((row) => (
            <Mantine.Box
              key={row.id}
              component="tr"
              className={styles.classes.row}
              data-expanded={row.getIsExpanded() || undefined}
            >
              {row.getVisibleCells().map((cell) => (
                <Cell key={cell.id} cell={cell} />
              ))}
            </Mantine.Box>
          ))}
        </tbody>
      </Mantine.Box>
    </Mantine.ScrollArea>
  );
}

export default Grid;
