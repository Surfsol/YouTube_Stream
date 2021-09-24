const replaceWhitespace = string => {
    const adjusted = string.replace(/\s/g, '%20');
    return adjusted;
  };

export {replaceWhitespace}