import * as Mantine from "@mantine/core";
import * as TanStack from "@tanstack/react-table";
import * as Icon from "react-feather";

import useHeader from "./useHeader";
import useHeaderStyles from "./useHeaderStyles";

/** Properties to render a header. */
interface HeaderProps<T, V> {
  /** Header instance. */
  header: TanStack.Header<T, V>;
}

/** Handles render for headers. */
function Header<T, V>(props: HeaderProps<T, V>) {
  const header = useHeader(props.header);
  const styles = useHeaderStyles();

  // prettier-ignore
  if (!header.canSort) {
    return (
      <th colSpan={props.header.colSpan}>
        {header.content}
      </th>
    );
  }

  return (
    <th colSpan={header.colSpan}>
      <Mantine.UnstyledButton
        className={styles.classes.sort}
        onClick={header.handleSort}
        data-active={header.isSorted || undefined}
      >
        {header.content}
        {header.sortStatus === "asc" ? (
          <Icon.ArrowDown size={13} />
        ) : header.sortStatus === "desc" ? (
          <Icon.ArrowUp size={13} />
        ) : null}
      </Mantine.UnstyledButton>
    </th>
  );
}

export default Header;
