/**
 * 
 * @param {*} start 
 * @param {*} end 
 */
function createMultiplyTable(start, end) {
  if(isValid(start, end)) {
	  return printMultiplyTable(start, end);
  } else {
	  return 'null';
  }
}

/**
 * 
 * @param {*} start 
 * @param {*} end 
 */
function isValid(start, end) {
	if (start < end && start >= 1 && end <= 1000) {
		return true;
	} else {
		return false;
	}
}
/**
 * 
 * @param {*} start 
 * @param {*} end   
 */
function printMultiplyTable(start, end) {
	let mutiplyTable;
	for(let i = start; i <= end; i++) {
		for(let j = i; j <= end; j++) {
			mutiplyTable =  `${i}` + "*" + `${j}` + "=" + `${i}` * `${j}` + "\t";
		}
			mutiplyTable += "\n";
	}
	return mutiplyTable;
}

module.exports = {
  createMultiplyTable,
};
