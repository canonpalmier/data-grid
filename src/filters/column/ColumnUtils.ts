import { Column } from "@tanstack/react-table";

class ColumnUtils<T, V> {
  column: Column<T, V>;

  constructor(column: Column<T, V>) {
    this.column = column;
  }

  canFilter() {
    return this.column.getCanFilter();
  }

  canHide() {
    return this.column.getCanHide();
  }

  canGroup() {
    return this.column.getCanGroup();
  }

  isHidden() {
    return !this.column.getIsVisible();
  }

  isGrouped() {
    return this.column.getIsGrouped();
  }

  getHeader() {
    return this.column.columnDef.header;
  }

  getValues() {
    return Array.from(this.getKeys()).sort().map(String);
  }

  render() {
    const header = this.getHeader();
    const id = this.column.id;
    return typeof header === "string" ? header : id;
  }

  handleHiding() {
    return this.column.getToggleVisibilityHandler();
  }

  handleGrouping() {
    return this.column.getToggleGroupingHandler();
  }

  private getKeys() {
    return this.column.getFacetedUniqueValues().keys();
  }
}

export { ColumnUtils };
