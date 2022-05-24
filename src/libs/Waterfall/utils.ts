export const getMinHeightColumn = (columnHeights: number[]) => {
  let column = 0,
    height = columnHeights[column];
  columnHeights.forEach((columHeight, index) => {
    if (columHeight < height) {
      height = columHeight;
      column = index;
    }
  });
  return {
    column,
    height,
  };
};
export const getMinHeight = (columnHeightObj: number[]) => {};
