console.log('line 1: ', 'Hello');

const testSpace = document.querySelector<HTMLParagraphElement>('.test')!;
const submitBtn = document.querySelector<HTMLButtonElement>('.submit-btn');
const dayInput = document.querySelector<HTMLInputElement>('#day');
const monthInput = document.querySelector<HTMLInputElement>('#month');
const yearInput = document.querySelector<HTMLInputElement>('#year');
const dayResult = document.querySelector<HTMLSpanElement>('.day-result')!;
const monthResult = document.querySelector<HTMLSpanElement>('.month-result')!;
const yearResult = document.querySelector<HTMLSpanElement>('.year-result')!;
const dayError = document.querySelector<HTMLParagraphElement>('.day-error')!;
const monthError =
  document.querySelector<HTMLParagraphElement>('.month-error')!;
const yearError = document.querySelector<HTMLParagraphElement>('.year-error')!;
const dateError = document.querySelector<HTMLParagraphElement>('.date-error')!;
const dayGroup = document.querySelector<HTMLDivElement>('.day-block')!;
const monthGroup = document.querySelector<HTMLDivElement>('.month-block')!;
const yearGroup = document.querySelector<HTMLDivElement>('.year-block')!;

// restart state
addHidden(dayError, monthError, yearError, dateError);

function handleSubmit(e: MouseEvent) {
  e.preventDefault();
  // reset before validation
  addHidden(dayError, monthError, yearError, dateError);
  removeErrorClass(dayGroup, monthGroup, yearGroup);
  const dayIn = dayInput?.valueAsNumber;
  const monthIn = monthInput?.valueAsNumber;
  const yearIn = yearInput?.valueAsNumber;
  console.log(dayIn, monthIn, yearIn);

  const currentYear = new Date().getFullYear();
  let errors = 0;
  // validate number inputs
  if (Number.isNaN(dayIn) || Number(dayIn) < 1 || Number(dayIn) > 31) {
    dayGroup?.classList.add('error');
    dayError?.classList.remove('hidden');
    errors++;
  }
  if (Number.isNaN(monthIn) || Number(monthIn) < 1 || Number(monthIn) > 12) {
    monthGroup?.classList.add('error');
    monthError?.classList.remove('hidden');
    errors++;
  }
  if (
    Number.isNaN(yearIn) ||
    Number(yearIn) < 1972 ||
    Number(yearIn) > currentYear
  ) {
    yearGroup?.classList.add('error');
    yearError?.classList.remove('hidden');
    errors++;
  }

  // if there were any errors
  if (errors > 0) return;

  // if everything was okay
  if (
    typeof dayIn === 'number' &&
    typeof monthIn === 'number' &&
    typeof yearIn === 'number'
  ) {
    const inputDate = new Date(yearIn, monthIn - 1, dayIn);
    const now = new Date();
    const calculatedDate = calcDateDiff(now, inputDate);
    testSpace.innerText =
      // inputDate + ' ...\n ' + now + ' ...\n ' + calculatedDate;
      JSON.stringify(calculatedDate);

    dayResult.innerHTML = calculatedDate.days.toString();
    monthResult.innerHTML = calculatedDate.months.toString();
    yearResult.innerHTML = calculatedDate.years.toString();
  } else {
    //! throw some ERROR
  }

  // const content = dayIn + ' ' + monthIn + ' ' + yearIn;
  // testSpace.innerText = content;
}

// Event Listeners
submitBtn?.addEventListener('click', (e) => handleSubmit(e));

// functions
function addHidden(...elements: HTMLElement[]) {
  elements.forEach((el) => el.classList.add('hidden'));
}
function removeErrorClass(...elements: HTMLElement[]) {
  elements.forEach((el) => el.classList.remove('error'));
}

interface Result {
  totalDays: number;
  days: number;
  months: number;
  years: number;
}

function calcDateDiff(date1: Date, date2: Date): Result {
  //* https://blog.bitsrc.io/calculate-the-difference-between-two-2-dates-e1d76737c05a

  //Get the Timestamp
  const date1Timestamp = date1.getTime();
  const date2Timestamp = date2.getTime();

  let calc;

  if (date1Timestamp > date2Timestamp) {
    calc = new Date(date1Timestamp - date2Timestamp);
  } else {
    calc = new Date(date2Timestamp - date1Timestamp);
  }

  //Retrieve the date, month and year
  const calcFormatTmp =
    calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear(); // DD-MM-YYYY
  const calcFormat = calcFormatTmp.split('-');

  // We will subtract each member of this array from the default date which is (01–01 -1970). This will help us know the number of days, months, and years that have elapsed.
  //Subtract each member of our array from the default date
  const daysPassed = Number(Math.abs(Number(calcFormat[0])) - 1);
  const monthsPassed = Number(Math.abs(Number(calcFormat[1])) - 1);
  const yearsPassed = Math.abs(Number(calcFormat[2])) - 1970;

  //Convert to days and sum together
  const totalDays = yearsPassed * 365 + monthsPassed * 30.417 + daysPassed;

  return {
    totalDays: Math.round(totalDays),
    days: daysPassed,
    months: monthsPassed,
    years: yearsPassed,
  };
}
