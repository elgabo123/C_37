class Form {

  constructor() {
    this.input = createInput("Nombre");
    this.button = createButton('Jugar');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Juego De Carreras De Autos");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250,200);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name=this.input.value();
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("hola "+player.name);
      this.greeting.position(130,100);
    });

  }
}
