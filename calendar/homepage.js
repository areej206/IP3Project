// Get the current date
const today = new Date();

// Format the date in the iPhone calendar icon format (MM/dd)
const month = today.getMonth() + 1;
const day = today.getDate();
const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;

// Display the formatted date
console.log(formattedDate);
