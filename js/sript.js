let userBirth = prompt("Якого ти року народження?", 2000);
if (userBirth === null) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
  let city = prompt("У якому місті ти живеш?", "Київ");
  if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
  } else {
    let favoriteSport = prompt("Який твій улюблений вид спорту?", "Теніс");
    if (favoriteSport === null) {
      alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    } else {
      const age = 2024 - userBirth;
      let message = "Ваш вік: " + age + " років.\n";
      //
      let championName = "";
      if (favoriteSport === "Футбол") {
        championName = "Ліонель Мессі";
      } else if (favoriteSport === "Теніс") {
        championName = "Рафаель Надаль";
      } else if (favoriteSport === "Формула1") {
        championName = "Макс Ферстаппен";
      }

      if (championName !== "") {
        message += "\nКруто! Хочеш стати як" + championName + "?";
      }
      //
      switch (city) {
        case "Київ":
          message += "\nТи живеш у столиці України.";
          break;
        case "Вашингтон":
          message += "\nТи живеш у столиці США.";
          break;
        case "Лондон":
          message += "\nТи живеш у столиці Великої Британії.";
          break;
        default:
          message += "\nТи живеш у місті " + city + ".";
          break;
      }
      //
      alert(message);
    }
  }
}
