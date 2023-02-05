function hyphenateWords(str) {
	return `${str.toLowerCase().replace(/\s+/g, '-')}`;
      }
      
export default hyphenateWords