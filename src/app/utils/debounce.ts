function debounce(cb: any, ms = 1000) {
  let timeout: NodeJS.Timeout;

  return (...args: any) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, ms);
  };
}

export default debounce;