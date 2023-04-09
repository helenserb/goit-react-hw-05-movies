function fetchImages(query, queryPage) { 
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: `33373070-0a3de92214998aff69d545527`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });
  
 return fetch(
  `${BASE_URL}?q=${query}&${searchParams}&page=${queryPage}`
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

