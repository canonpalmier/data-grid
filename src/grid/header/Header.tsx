import { Sx } from "@mantine/core";
import { UnstyledButton } from "@mantine/core";
import { Header } from "@tanstack/react-table";
import { ArrowDown } from "react-feather";
import { ArrowUp } from "react-feather";

import { HeaderUtils } from "./HeaderUtils";

/** Properties to render a header. */
interface HeaderProps<T, V> {
  /** Header instance. */
  header: Header<T, V>;
}

function Header<T, V>(props: HeaderProps<T, V>) {
  const utils = new HeaderUtils(props.header);

  if (!utils.canSort()) {
    return <th colSpan={props.header.colSpan}>{utils.render()}</th>;
  }

  return (
    <th colSpan={props.header.colSpan}>
      <UnstyledButton
        sx={buttonSx}
        onClick={utils.handleSort()}
        data-active={utils.isSorted()}
      >
        {utils.render()}
        {utils.isSortedAsc() && <ArrowDown size={13} />}
        {utils.isSortedDesc() && <ArrowUp size={13} />}
      </UnstyledButton>
    </th>
  );
}

const buttonSx: Sx = {
  display: "flex",
  alignItems: "center",
  gap: 4,
  fontSize: 12,
  fontWeight: 500,
  color: "#868E96",
  ":hover": {
    color: "#212529",
  },
  "&[data-active=true]": {
    color: "#212529",
  },
};

export { Header };
