// Date and time

function calculateDay(date_1, date_2) {
  const months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let date1, date2;

  function checkMonthAndDay(date) {
    if (date.includes(".")) {
      let dateArray = date.split(".");
      if (dateArray[1] > 12 || dateArray[1] < 1) {
        throw new Error("invalid month");
      } else if (
        Number(dateArray[0]) <= 0 ||
        Number(dateArray[0]) > months[dateArray[1]]
      ) {
        throw new Error("invalid day");
      } else {
        return `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
      }
    }
  }
  date1 = new Date(checkMonthAndDay(date_1)).getTime();
  date2 = new Date(checkMonthAndDay(date_2)).getTime();

  let difference = date2 - date1;
  return difference / (24 * 3600 * 1000);
}

module.exports = calculateDay;
