export const sortArray = (appointments, sortBy, sortDirection = "asc") => {
  if (sortBy === "None") {
    return appointments;
  }

  const direction = sortDirection === "asc" ? 1 : -1;

  return [...appointments].sort((a, b) => {
    const aProp = a[sortBy];
    const bProp = b[sortBy];

    // Handle cases where sortBy property is undefined or null
    if (aProp === bProp) {
      return 0;
    }
    if (aProp === null) {
      return -1 * direction;
    }
    if (bProp === null) {
      return 1 * direction;
    }

    // Convert string values to a common case for comparison
    if (typeof aProp === "string" && typeof bProp === "string") {
      return aProp.localeCompare(bProp) * direction;
    }

    // Compare numeric values directly
    return aProp - bProp * direction;
  });
};
