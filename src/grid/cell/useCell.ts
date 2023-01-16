import * as TanStack from "@tanstack/react-table";

/** Manages cell state and values. */
function useCell<T>(cell: TanStack.Cell<T, unknown>) {
  // Retrieve content for individual cell
  const content = TanStack.flexRender(
    cell.column.columnDef.cell,
    cell.getContext()
  );

  // Retrieve content for aggregated cell
  const aggregatedContent = TanStack.flexRender(
    cell.column.columnDef.aggregatedCell,
    cell.getContext()
  );

  // Cell properties
  const isRowExpanded = cell.row.getIsExpanded();
  const isAggregated = cell.getIsAggregated();
  const isGrouped = cell.getIsGrouped();
  const isPlaceholder = cell.getIsPlaceholder();

  // Cell handlers
  const handleExpand = cell.row.getToggleExpandedHandler();

  return {
    content,
    aggregatedContent,
    isRowExpanded,
    isAggregated,
    isGrouped,
    isPlaceholder,
    handleExpand,
  };
}

export default useCell;
