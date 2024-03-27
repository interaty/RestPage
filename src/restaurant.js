// restaurant.js

const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // create and append image element
  const image = document.createElement("img");
  image.src = "https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D";
  image.height = "300";
  pageContent.appendChild(image);

  // Create and append headline element
  const headline = document.createElement("h1");
  headline.textContent = "welcome to our restaurant!";
  pageContent.appendChild(headline);

  // Create and append copy element
  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in the city!";
  pageContent.appendChild(copy);

  // Append pageContent to content div
  content.appendChild(pageContent);
}

export default createRestaurantHomePage;
