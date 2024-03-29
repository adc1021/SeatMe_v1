// export const restoreSession = async () => {
//   let res = await fetch('/api/session');
//   let token = res.headers.get('X-CSRF-Token');
//   sessionStorage.setItem('X-CSRF-Token', token);
//   let data = await res.json();
//   sessionStorage.setItem('currentUser', JSON.stringify(data.user));
// }
// asynchronous function that fetches the current user info from the data base
// adds that users X-CSRF-Token to the session Storage object
// which will be available in the browser

const csrfFetch = async (url, options = {}) => {
  options.method ||= 'GET';
  options.headers ||= {};
  // will need to modify this when using formData to attach resources like photos
      // can't have a Content-Type header
  if (options.method.toUpperCase() !== 'GET') {
      options.headers['Content-Type'] = 'application/json';
      options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
  }

  const res = await fetch(url, options);
  if (res.status >= 400) throw res;
  return res
}
//creating a custom method to include X-csrf-token in our fetch requests as long as they are not get requests
// GET requests do not receive the options argument

export default csrfFetch;
