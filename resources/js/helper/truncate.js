const truncate = (string, length) => {
  return string.substring(0, length) + '...';
};

export default truncate;