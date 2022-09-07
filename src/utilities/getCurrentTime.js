export const getCurrentTime = () => {
  const dt = new Date();
  const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

  return `${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(
    dt.getSeconds()
  )}, ${padL(dt.getMonth() + 1)}/${padL(dt.getDate())}/${dt.getFullYear()} `;
};
