//Filter
var filter = document.getElementById('filter');

filter.addEventListener('keyup',filterItems);

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items= itemList.getElementByTagName('li');
    Array.from(items).forEach(function(item)
    {
        var itemName = items.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    }
    );
}




