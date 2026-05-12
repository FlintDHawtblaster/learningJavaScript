function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion", "Lynx"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion", "Lynx"]