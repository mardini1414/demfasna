const truncate = (string, length) => {
  if (typeof string !== 'undefined' && string.length > length) {
    return string.substring(0, length) + '...';
  }
  return string;
};

export default truncate;
