const copyToClipboard = text => {
  try {
    navigator.clipboard.writeText(text);
    alert('text has been copied');
  } catch (error) {
    alert('Unable to copy to clipboard');
  }
};

export default copyToClipboard;
