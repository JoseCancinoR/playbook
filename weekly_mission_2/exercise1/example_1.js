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
console.log(twitter.information()+"\n")

/* Ejemplo 2 */
console.log("Ejemplo Facebook");
const facebook = {
  user: "Pedri Gonzalez",
  ciudad_actual: "Barcelona",
  centro_edu: "Instituto Las Palmas",
  localidad: "Tegueste, Tenerife",
  detalles: function () {
    return `Detalles sobre ${this.user}\nVive en: ${this.ciudad_actual}\nSe formo en: ${this.centro_edu}\nEs de la ciudad de: ${this.localidad}`
  }
}

console.log(facebook.detalles()+"\n")

/* Ejemplo 3 */
console.log("Ejemplo Instagram");
const instagram = {
  user: "Pablo Sarabia",
  username: "pablosarabia17",
  posts: 23,
  seguidos: 120,
  seguidores: 90,
  publicaciones: function() {
    return `${this.username} ha realizado ${this.posts} publicaciones`
  },
  information: function () {
    return `${this.user} tiene ${this.seguidores} seguidores`
  }
}

console.log("Nombre de usuario: " + instagram.username)
console.log("Publicaciones realizdas: " + instagram.publicaciones())
console.log(instagram.information())