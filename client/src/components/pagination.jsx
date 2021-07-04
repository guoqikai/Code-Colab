import { Pagination as BootsTrapPagination } from "react-bootstrap";
import "./pagination.css";

const calculatePageRange = (page, maxPage, numPageItems) => {
  if (maxPage <= numPageItems)
    return Array.from({ length: maxPage }, (_, i) => i + 1);
  const offset = ~~(numPageItems / 2);
  if (page - offset <= 2) {
    return [
      ...Array.from({ length: numPageItems }, (_, i) => i + 1),
      "...",
      maxPage,
    ];
  }
  if (page + offset >= maxPage - 1) {
    return [
      1,
      "...",
      ...Array.from(
        { length: numPageItems },
        (_, i) => i + 1 + maxPage - numPageItems
      ),
    ];
  }

  return [
    1,
    "...",
    ...Array.from(
      { length: numPageItems - 2 },
      (_, i) => i + page - offset + 1
    ),
    "...",
    maxPage,
  ];
};

const Pagination = ({
  page,
  maxPage,
  numPageItems = 7,
  onClick,
  className,
}) => (
  <BootsTrapPagination className={"app-pagination " + className}>
    <BootsTrapPagination.Prev onClick={() => onClick(Math.max(page - 1, 1))} />
    {calculatePageRange(page, maxPage, numPageItems).map((p, index) =>
      p === "..." ? (
        <BootsTrapPagination.Ellipsis disabled key={"..." + index}/>
      ) : (
        <BootsTrapPagination.Item
          key={p}
          active={page === p}
          onClick={() => onClick(p)}
        >
          {p}
        </BootsTrapPagination.Item>
      )
    )}
    <BootsTrapPagination.Next
      onClick={() => onClick(Math.min(page + 1, maxPage))}
    />
  </BootsTrapPagination>
);

export default Pagination;
