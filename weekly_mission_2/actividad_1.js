/* Ejemplo 1 */
const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`
  }
}

console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log("\n");

/* Ejemplo 2 */
const issue = {
  title: "02 Live Semana 1",
  repositoryNameAssociated: "MissionNodeJS",
  status: "Open",
  numberOfComments: 101,
  labels: 1,
  author: "LaunchX",
  dateCreated: "06 de Abril",
  lastUpdated: "Hace 8 dias",
  getTitleAndAuthor: function () {
    return `Title: ${this.title}, Author: ${this.author}`
  },
  getGeneralInfo: function () {
    return `This repository ${this.repositoryNameAssociated} was created by ${this.author}`
  }
}

console.log("Nombre del repo: " + issue.repositoryNameAssociated)
console.log("Title and Author: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
console.log("\n");

/* Ejemplo 3 */
const pullRequest = {
  title: "Enviando blog ",
  branchName: "JoseCancinoR",
  dateCreated: "07 de Abril",
  status: "Open",
  repositoryNameAssociated: "launch-x-explorers",
  getStatus: function () {
    return `${this.status}`
  },
  getTitleAndAuthor: function () {
    return `Title: ${this.title}, Author: ${this.branchName}`
  }
}

console.log("Nombre del repo: " + pullRequest.repositoryNameAssociated)
console.log("Estatus de la petición: " + pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())