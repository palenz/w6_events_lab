document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const titleInput = document.querySelector('#new-item-form');
  titleInput.addEventListener('submit', handleTitle);

  const authorInput = document.querySelector('#new-item-form');
  authorInput.addEventListener('submit', handleAuthor);

  const categorySelect = document.querySelector('#new-item-form');
  categorySelect.addEventListener('submit', handleCategory);

});

const handleTitle = function(event){
  event.preventDefault();
  const resultParagraph = document.querySelector('#title-test');
  resultParagraph.textContent = (`Title is ${event.target.title.value}`);
  console.dir(event);
}

const handleAuthor = function(event){
  event.preventDefault();
  const resultParagraph = document.querySelector('#author-test');
  resultParagraph.textContent = (`Author is ${event.target.author.value}`);
  console.dir(event);
}

const handleCategory = function(event){
  event.preventDefault();
  const resultSelect = document.querySelector('#category-test');
  resultSelect.textContent = (`You selected the ${event.target.category.value} category.`);
}
