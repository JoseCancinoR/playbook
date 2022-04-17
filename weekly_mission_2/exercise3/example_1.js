class Twitter {
    constructor(user, username, email, age, creationDate, num_tuits, num_likes) {
        this.user = user
        this.username = username
        this.email = email
        this.age = age
        this.creationDate = creationDate
        this.num_tuits = num_tuits
        this.num_likes = num_likes
    }

    totalInteractions() {
        const sum = this.num_tuits+this.num_likes
        return `Total de interacciones: ${sum}`
    }

    information() {
        return `${this.user} se unió en ${this.creationDate}`
    }
}

const datosTwitter = new Twitter("Jose Cancino", "@JoseCancino", "josecancino117@gmail.com", 22, "Junio de 2015", 7, 30)
/* console.log(datosTwitter); */
console.log("Usuario: " + datosTwitter.username)
console.log(datosTwitter.totalInteractions());
console.log(datosTwitter.information());