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
      if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        let country = "";
        switch (city) {
          case "Київ":
            country = "України";
            break;
          case "Вашингтон":
            country = "США";
            break;
          case "Лондон":
            country = "Великої Британії";
            break;
          default:
            country = "цієї країни";
            break;
        }
        message += "Ти живеш у столиці " + country + ".";
      } else {
        message += "Ти живеш у місті " + city + ".";
      }
      let champions = {
        футбол: "Ліонель Мессі",
        теніс: "Рафаель Надаль",
        формула1: "Макс Ферстаппен",
      };
      if (favoriteSport.toLowerCase() in champions) {
        let championName = champions[favoriteSport.toLowerCase()];
        message += "\nКруто! Хочеш стати " + championName + "?";
      } else {
        message += "\nКруто! Але хто твій улюблений спортсмен?";
      }
      alert(message);
    }
  }
}
