import * as Mantine from "@mantine/core";

/** Creates styles to use in headers. */
const useHeaderStyles = Mantine.createStyles(() => ({
  sort: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: 12,
    fontWeight: 500,
    color: "#868E96",
    ":hover": {
      color: "#212529",
    },
    "&[data-active]": {
      color: "#212529",
    },
  },
}));

export default useHeaderStyles;
