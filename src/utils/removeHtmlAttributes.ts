const removeHtmlAttributes = (text: string): string => {
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, '');
};

export default removeHtmlAttributes;
