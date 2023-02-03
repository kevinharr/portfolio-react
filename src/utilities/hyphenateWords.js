function hyphenateWords(str) {
	return `projects/${str.toLowerCase().replace(/\s+/g, '-')}`;
      }
      
export default hyphenateWords