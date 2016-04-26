class Persona {
  constructor (nombre) {
    this.nombre = nombre
  }

  saludar () {
    console.log(`Hola ${this.nombre}!`)
  }
}

let carlos = new Persona('Carlos')
carlos.saludar()
