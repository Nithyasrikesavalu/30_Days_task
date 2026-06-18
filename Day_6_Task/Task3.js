const movies = [
  { id: 1, name: "Leo", ticketPrice: 200 },
  { id: 2, name: "Jailer", ticketPrice: 180 },
  { id: 3, name: "Vikram", ticketPrice: 220 }
];


console.log("Movies List:");
movies.forEach(movie =>
  console.log(`${movie.id}. ${movie.name} - ₹${movie.ticketPrice}`)
);

const selectedMovie = movies[0];
const seats = 3;
const totalAmount = selectedMovie.ticketPrice * seats;

console.log("\nBooking Summary");
console.log("Movie:", selectedMovie.name);
console.log("Seats:", seats);
console.log("Ticket Price:", selectedMovie.ticketPrice);
console.log("Total Amount:", totalAmount);