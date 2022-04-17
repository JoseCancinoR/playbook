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
console.log("\nUsuario: " + datosTwitter.username)
console.log(datosTwitter.totalInteractions());
console.log(datosTwitter.information());

/* Facebook */
class Facebook {
    constructor(user, ciudad_actual, centro_edu, localidad) {
        this.user = user
        this.ciudad_actual = ciudad_actual
        this.centro_edu = centro_edu
        this.localidad = localidad
    }
    detalles() {
        return `Detalles sobre ${this.user}\nVive en: ${this.ciudad_actual}\nSe formo en: ${this.centro_edu}\nEs de la ciudad de: ${this.localidad}`
    }
}

const detallesFacebook = new Facebook("Pedri Gonzalez", "Barcelona", "Instituto Las Palmas", "Tegueste, Tenerife")
console.log("\nNombre: " + detallesFacebook.user)
console.log(detallesFacebook.detalles());

/* Intagram */
class Instagram {
    constructor(user, username, posts, seguidos, seguidores) {
        this.user = user
        this.username = username
        this.posts = posts
        this.seguidos = seguidos
        this.seguidores = seguidores
    }
    publicaciones() {
        return `${this.username} ha realizado ${this.posts} publicaciones`
    }
    information() {
        return `${this.user} tiene ${this.seguidores} seguidores`
      }
}

const datosInstagram = new Instagram("Pablo Sarabia", "pablosarabia17", 23, 120, 90)
console.log("\nNombre de usuario: " + datosInstagram.username)
console.log("Publicaciones realizdas: " + datosInstagram.publicaciones())
console.log(datosInstagram.information())