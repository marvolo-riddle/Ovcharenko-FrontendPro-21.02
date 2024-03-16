let numOrStr = prompt("input number or string");
switch (true) {
  case numOrStr === null:
    alert("Ви скасували");
    break;
  case numOrStr.trim() === "":
    alert("Empty string");
    break;
  case isNaN(+numOrStr):
    alert(" number is Ba_NaN");
    break;
  default:
    alert("Ok!");
}
