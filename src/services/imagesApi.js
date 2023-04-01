function fetchImages(query) { 
return fetch(
  `https://pixabay.com/api/?q=${query}&page=1&key=33447943-79d2196749f400a54d8eaf5fb&image_type=photo&orientation=horizontal&per_page=12`
).then(response => {
  if (!response.ok) {
    return Promise.reject(
      new Error(`Упс! Щось пішло не так. Повторіть спробу`)
    );
  }
  return response.json();
});
} 

const api = {
    fetchImages,
}
export default api;