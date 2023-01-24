import { Cell } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

class CellUtils<T> {
  cell: Cell<T, unknown>;

  constructor(cell: Cell<T, unknown>) {
    this.cell = cell;
  }

  isRowExpanded() {
    return this.cell.row.getIsExpanded();
  }

  isAggregated() {
    return this.cell.getIsAggregated();
  }

  isGrouped() {
    return this.cell.getIsGrouped();
  }

  isPlaceholder() {
    return this.cell.getIsPlaceholder();
  }

  handleExpand() {
    return this.cell.row.getToggleExpandedHandler();
  }

  render(aggregated: boolean) {
    return flexRender(this.getContent(aggregated), this.getContext());
  }

  private getContent(aggregated: boolean) {
    if (!aggregated) {
      return this.cell.column.columnDef.cell;
    }

    return this.cell.column.columnDef.aggregatedCell;
  }

  private getContext() {
    return this.cell.getContext();
  }
}

export { CellUtils };
