import * as Mantine from "@mantine/core";

/** Creates styles to use in cells. */
const useGridStyles = Mantine.createStyles((theme) => ({
  table: {
    width: "100%",
    tableLayout: "fixed",
    borderCollapse: "collapse",
    textAlign: "left",
    whiteSpace: "nowrap",
    fontFeatureSettings: '"tnum"',
    "& th, td": {
      fontSize: theme.fontSizes.xs,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      lineHeight: 1,
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
    "& thead > tr > th": {
      fontWeight: 500,
      color: theme.colors.gray[6],
      background: theme.colors.gray[0],
    },
    "& tbody > tr > td": {
      fontSize: theme.fontSizes.xs,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: theme.colors.gray[2],
    },
  },
  row: {
    "&[data-expanded]": {
      background: theme.colors.gray[0],
      fontWeight: 600,
    },
  },
}));

export default useGridStyles;
