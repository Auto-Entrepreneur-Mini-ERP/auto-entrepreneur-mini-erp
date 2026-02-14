export const setCookie = (name: string, value: string) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 15*60*60);
  // Set the cookie string, including security flags and expiration
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/;`;
};