"use client";

import { formatDate } from "utilities/common";

const FormattedDate = (props: { date: string }) => {
  const { date } = props;
  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {formatDate(date)}
    </p>
  );
};

export default FormattedDate;
