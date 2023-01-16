import * as TanStack from "@tanstack/react-table";

/** Manages header state and values. */
function useHeader<T>(header: TanStack.Header<T, unknown>) {
  // Retrieve content for header
  const content = TanStack.flexRender(
    header.column.columnDef.header,
    header.getContext()
  );

  // Header properties
  const canSort = header.column.getCanSort();
  const sortStatus = header.column.getIsSorted();
  const isSorted = sortStatus !== false;
  const colSpan = header.colSpan;

  // Header handlers
  const handleSort = header.column.getToggleSortingHandler();

  return {
    content,
    canSort,
    sortStatus,
    isSorted,
    colSpan,
    handleSort,
  };
}

export default useHeader;
