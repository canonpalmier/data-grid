import * as TanStack from "@tanstack/react-table";

/** Manages column state and values. */
function useColumn<T, V>(column: TanStack.Column<T, V>) {
  // Alias for code readability
  const header = column.columnDef.header;
  const keys = column.getFacetedUniqueValues().keys();

  // Retrieve content for column
  const content = typeof header === "string" ? header : column.id;

  // Column properties
  const canFilter = column.getCanFilter();
  const canHide = column.getCanHide();
  const canGroup = column.getCanGroup();
  const isHidden = !column.getIsVisible();
  const isGrouped = column.getIsGrouped();
  const values = Array.from(keys).sort().map(String);

  // Column handlers
  const handleFiltering = column.setFilterValue;
  const handleHiding = column.getToggleVisibilityHandler();
  const handleGrouping = column.getToggleGroupingHandler();

  return {
    content,
    canFilter,
    canHide,
    canGroup,
    isHidden,
    isGrouped,
    values,
    handleFiltering,
    handleHiding,
    handleGrouping,
  };
}

export default useColumn;
