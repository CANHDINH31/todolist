export const getCurrentTime = () => {
  const dt = new Date();
  const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

  return `${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(
    dt.getSeconds()
  )}, ${padL(dt.getMonth() + 1)}/${padL(dt.getDate())}/${dt.getFullYear()} `;
};

export const getCurrentDate = () => {
  const dt = new Date();
  const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

  return `${padL(dt.getMonth() + 1)}/${padL(
    dt.getDate()
  )}/${dt.getFullYear()} `;
};

export const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (date) => {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join("/");
};
