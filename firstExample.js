class Persona {
    constructor(nombre, edad, genero, ciudad, estado, candidato) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
      this.ciudad = ciudad;
      this.estado = estado;
      this.candidato = candidato;
    }
    
presentarse() {
    console.log("Hola, mi nombre es ${this.nombre} y voy a votar por ${this.candidato}.");
  }
  votar() {
    console.log(`${this.nombre} está votando por ${this.candidato}.`);
  }
  
  }
  const persona1 = new Persona("Juan", 30, "Masculino", "Ciudad de México", "CDMX", "Jorge Maynez");
  const persona2 = new Persona("María", 25, "Femenino", "Guadalajara", "Jalisco", "Xochilt Galvez");
  const persona3 = new Persona("Pedro", 40, "Masculino", "Monterrey", "Nuevo León", "Claudia Sheinbaum");
  persona1.presentarse();
  persona1.votar();
  persona2.presentarse();
  persona2.votar();
  persona3.presentarse();
  persona3.votar();