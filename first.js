const tabs = document.querySelectorAll('.tab');
const photos = document.querySelectorAll('.photo');

tabs.forEach(function(tab){
  tab.addEventListener('click', function(){

    // remove "active" from every tab, then add it to just the one clicked
    tabs.forEach(function(t){
      t.classList.remove('active');
    });
    tab.classList.add('active');

    const selectedCategory = tab.dataset.filter;

    photos.forEach(function(photo){
      if (selectedCategory === 'all' || photo.dataset.category === selectedCategory) {
        photo.classList.remove('hidden');
      } else {
        photo.classList.add('hidden');
      }
    });

  });
});