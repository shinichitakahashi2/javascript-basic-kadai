const timeday = new Date(Date.now());

const year = timeday.getFullYear();
const month = timeday.getMonth() + 1;
const day = timeday.getDate();
console.log(year + "年" + month + "月" + day + "日");