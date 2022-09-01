const batMan = {
  realFirstName: "Bruce",
  realLastName: "Wayne",
  hobby: "save people",
  energy: 90,
  ears: "big",
  city: "Gotham",
  hasCar: true,
  hasWife: true,
  nameWife: "Joanna",
  mood: 10,
  mind: 85,
  crimeGotham: 0,
  fightAgainstCrime: false,
  modelCar: {
    name: "batmobile",
    maxspeed: "360 km/h",
    color: "black",
    hasWeapon: true,
    fuelPerKm: "middle",
  },
  exploreTheCity(status) {
    this.energy--;
    this.crimeGotham = status;
    if (this.crimeGotham > 0 && this.crimeGotham < 10) {
      this.fightAgainstCrime = true;
      console.log(
        "Я не хотел пачкать руки, но вы меня заставили. Та-та-бах-бах"
      );
    }
    if (this.crimeGotham >= 10) {
      this.comboMode();
    }
    if (this.crimeGotham === 0) {
      console.log("Я могу спать спокойно...");
    }
  },
  comboMode() {
    console.log("AAAAAAAAAAAAAAAAAAA!!!!!!Я в ярости, ВАМ КОНЕЕЕЕЕЦ");
    this.energy = 0;
    console.log("......мои силы тоже иссякли, Альфред, АЛЬФРЕЕЕЕД");
  },
  metWithWife() {
    console.log("Прости, у меня были дела, я с трудом выбрался из этой суеты.");
    this.mood += 10;
    this.energy++;
    this.mind--;
  },
  talkWithAlfred() {
    console.log(
      "Знаешь, Альфред, мои родители видимо очень доверяли тебе...Дай мне совет"
    );
    this.mind += 5;
    this.mood++;
    this.energy--;
  },
  changeWife(newWife) {
    this.nameWife = newWife;
    console.log(this.nameWife);
  },
};

batMan.exploreTheCity(10);
console.log(batMan.mind);
batMan.talkWithAlfred();
console.log(batMan.mind);
batMan.changeWife("Samanta");
