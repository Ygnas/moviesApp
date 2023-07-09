import { Pagination } from "@mui/material";
import React, { useState } from "react";

const PaginationList = ({ count, page, onChange }) => {
  const [currentPage, setCurrentPage] = useState(page);

  const styles = {
    pagination: {
      display: 'flex',
      justifyContent: 'center',
    },
  };

  const handlePageChange = (event, value) => {
    onChange(value);
    setCurrentPage(value);
  };

  return (
    <Pagination
      sx={styles.pagination}
      count={(count < 500) ? count : 500}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default PaginationList;