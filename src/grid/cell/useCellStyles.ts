import * as Mantine from "@mantine/core";

/** Creates styles to use in cells. */
const useCellStyles = Mantine.createStyles(() => ({
  cell: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  expand: {
    display: "flex",
    alignItems: "center",
    width: 13,
    height: 13,
  },
}));

export default useCellStyles;
