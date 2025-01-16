const listItems = document.querySelectorAll(".item");
console.log("Number of categories: " + listItems.length);
for (const element of listItems) {
  const itemTitle = element.querySelector("h2");
  const listOfItems = element.querySelectorAll("li");
  console.log("Category: " + itemTitle.textContent);
  console.log("Elements: " + listOfItems.length);
}
