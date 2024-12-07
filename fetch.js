const btn = document.querySelector("button");
async function pokeMan() {
  try {
    const inputs = document.querySelector("input").value.toLowerCase();

    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputs}`);

    if (!promise.ok) {
      throw new Error("Not Found");
    }
    const data = await promise.json();
    const status = data;
    // const { stats } = status;
    console.log(status);
    // console.log(status);
    // status.forEach((status) => {
    //   console.log(status);
    // });
    const poke = data.sprites.front_default;
    const img = document.querySelector("img");
    img.src = poke;
    img.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", pokeMan);
