export const durationCalculate = givendate => {
  var got = new Date(givendate.split('/').reverse().join('-'));

  var d1 = got.getDate();
  var m1 = 1 + got.getMonth();
  var y1 = got.getFullYear();

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  var duration = y + ' Years ' + m + ' Months ' + d + ' Days';

  return duration;
};
