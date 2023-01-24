import { flexRender } from "@tanstack/react-table";
import { Header } from "@tanstack/react-table";

class HeaderUtils<T> {
  header: Header<T, unknown>;

  constructor(header: Header<T, unknown>) {
    this.header = header;
  }

  canSort() {
    return this.header.column.getCanSort();
  }

  isSorted() {
    return this.header.column.getIsSorted() !== false;
  }

  isSortedAsc() {
    return this.header.column.getIsSorted() === "asc";
  }

  isSortedDesc() {
    return this.header.column.getIsSorted() === "desc";
  }

  handleSort() {
    return this.header.column.getToggleSortingHandler();
  }

  render() {
    return flexRender(this.getContent(), this.getContext());
  }

  private getContent() {
    return this.header.column.columnDef.header;
  }

  private getContext() {
    return this.header.getContext();
  }
}

export { HeaderUtils };
