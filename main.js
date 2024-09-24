
class Hero{
  constructor(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
  }
  getAttack(){
    if (this.type === "mago") {
        this.attack = "Magia"      
      } else if (this.type = "guerreiro"){
        this.attack = "Espada"      
      } else if (this.type === "ninja"){
        this.attack = "shuriken"
      } else if(this.type = "monge"){
        this.attack = "Artes Marciais"
      }
    }
  heroAttack() {
    var attack = this.getAttack();
    console.log(`O ${this.name} atacou usando ${this.attack}`);
  }
}
const hero1 = new Hero("Mago", 25, "mago")
const hero2 = new Hero("Guerreiro",35, "guerreiro")
const hero3 = new Hero("Monge",99, "monge")

hero1.heroAttack();
hero2.heroAttack();
hero3.heroAttack();

