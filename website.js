const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('button');
btn.addEventListener('click', function () {
  let hexcolor = '#';
  for (let i = 0; i < 6; i++) {
    randomnumber = Math.floor(Math.random() * hex.length);
    hexcolor += hex[randomnumber];
  }
  btn.textContent = hexcolor;
  document.body.style.backgroundColor = hexcolor;
});
