export const News = (arreglo) => {
  arreglo.sort((a, b) =>
    a.data.created > b.data.created
      ? -1
      : a.data.created < b.data.created
      ? 1
      : 0
  );
  return arreglo;
};

export const Popular = (arreglo) => {
  arreglo.sort((a, b) =>
    a.data.num_comments > b.data.num_comments
      ? -1
      : a.data.num_comments < b.data.num_comments
      ? 1
      : 0
  );
  return arreglo;
};

export const Top = (arreglo) => {
  arreglo.sort((a, b) =>
    a.data.score > b.data.score ? -1 : a.data.score < b.data.score ? 1 : 0
  );
  return arreglo;
};

export const Hot = (arreglo) => {
  arreglo.sort((a, b) =>
    a.data.num_reports > b.data.num_reports
      ? -1
      : a.data.num_reports < b.data.num_reports
      ? 1
      : 0
  );
  return arreglo;
};

export const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
