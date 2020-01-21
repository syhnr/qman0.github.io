var count = 0;

commandtab.onmousedown = handler;
function handler(e) {
    const commandlist = document.getElementById('commandlist');
        count++;
        if(count == 2) {commandlist.innerHTML = ""; count = 0} else {;
        const tab = document.querySelector('[href="#commands"]');
        commandlist.innerHTML = json[0]["commandnav"];
        }
} 
//It's dropdown

var konami = ['38','38','40','40','37','39','37','39','66','65','13'], key = 0;
  document.addEventListener('keydown', function(e) {
    var requiredKey = konami[key];
      if (e.keyCode == requiredKey) {
      key++;
      if (key == konami.length) {
        document.getElementById('viewer').innerHTML = '<img src="https://i.redd.it/fs6z3gbyde241.jpg" alt="doggo">';
        key = 0;
      }
    } else {
      key = 0;
    }
});
