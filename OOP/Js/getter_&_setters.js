class Course{constructor(
  {name,classes=[],})
  {
    this._name=name;
    this.classes=classes;
  }
  
  get name(){
    return this._name;
  }
  
  set name(nuevoNombrecito)
  {
  if(nuevoNombrecito==="Curso Malito de Programación Básica")
  {
    console.error("Web... no");
  }else{
    this._name=nuevoNombrecito;
  }}
}
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
  });
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
  });