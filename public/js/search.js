const searchForm = document.querySelector('#search-form');

async function handleSubmit(event) {
  event.preventDefault();

  const searchTerm = document.querySelector('#search').value.trim();
  if (!searchTerm) {
    alert(
      'Please enter the name of the song or artist you would like to search for.'
    );
  } else {
    window.location.href = `/search/${searchTerm}`;
  }
}

searchForm.addEventListener('submit', handleSubmit);
