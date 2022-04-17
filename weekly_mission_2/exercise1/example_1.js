/* Ejemplo 1 */
console.log("Ejemplo Twitter");
const twitter = {
  user: "Jose Cancino",
  username: "@JoseCancino115",
  email: "josecancino117@gmail.com",
  age: 22,
  creationDate: "Junio de 2015",
  num_tuits: 7,
  num_likes: 30,
  totalInteractions: function () {
    return this.num_tuits + this.num_likes
  },
  information: function () {
    return `${this.user} se unió en ${this.creationDate}`
  }
}

console.log("Nombre de usuario: " + twitter.username)
console.log("Total de interacciones: " + twitter.totalInteractions())
console.log(twitter.information())
console.log("\n");
