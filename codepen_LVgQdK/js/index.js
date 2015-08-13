function setup() {
  var toogle = document.getElementById('toggle');
  toggle.addEventListener('click', function() {
    var menu = document.getElementById('menu');
    alert('hello');
    menu.classList.toggle('collapsed');
  });
  
}