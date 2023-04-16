let list = document.querySelectorAll('.tabs-content > li');
console.log(list);
let tabs = document.querySelectorAll('.tabs-title');
console.log(tabs);

function reset()
{
for(let i = 0; i<list.length;i++)
      list[i].hidden = true;

for(let i = 0; i<tabs.length;i++)
tabs[i].removeAttribute('id');
}
reset();
list[0].hidden = false;

function tabActive(tab)
{
  if(tab.hasAttribute('id', 'active'))
  tab.removeAttribute('id','active');
  else
  tab.setAttribute('id','active');
}

tabs.forEach(tab => {
  tab.addEventListener('click', function handleClick(event) {
    reset();
    switch(tab.innerText)
    {
      case "Akali":
        list[0].hidden = false;
        tabActive(tab);
        break;
      case "Anivia":
        list[1].hidden = false;
        tabActive(tab);
        break;
      case "Draven":
        list[2].hidden = false;
        tabActive(tab);
        break;
      case "Garen":
        list[3].hidden = false;
        tabActive(tab);
        break;
      case "Katarina":
        list[4].hidden = false;
        tabActive(tab);
        break;
    }
  });
});