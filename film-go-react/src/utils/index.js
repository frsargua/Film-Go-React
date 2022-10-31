export async function fetchData(apiUrl) {
  const data = await fetch(apiUrl);
  return data.json();
}
