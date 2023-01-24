import { Box } from "@mantine/core";
import { ScrollArea } from "@mantine/core";
import { Sx } from "@mantine/core";

import { useDataGrid } from "../context/useDataGrid";
import { Cell } from "./cell/Cell";
import { Header } from "./header/Header";

function Grid() {
  const context = useDataGrid();

  return (
    <ScrollArea>
      <Box component="table" sx={tableSx}>
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
            <Box
              key={row.id}
              component="tr"
              sx={expandedSx}
              data-expanded={row.getIsExpanded()}
            >
              {row.getVisibleCells().map((cell) => (
                <Cell key={cell.id} cell={cell} />
              ))}
            </Box>
          ))}
        </tbody>
      </Box>
    </ScrollArea>
  );
}

const tableSx: Sx = {
  width: "100%",
  tableLayout: "fixed",
  borderCollapse: "collapse",
  textAlign: "left",
  whiteSpace: "nowrap",
  fontFeatureSettings: '"tnum"',
  "& th, td": {
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    lineHeight: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
  "& thead > tr > th": {
    fontWeight: 500,
    color: "#868E96",
    background: "#F8F9FA",
  },
  "& tbody > tr > td": {
    borderTop: "1px solid",
    borderTopColor: "#E9ECEF",
  },
};

const expandedSx: Sx = {
  "&[data-expanded=true]": {
    background: "#F1F3F5",
    fontWeight: 600,
  },
};

export { Grid };
