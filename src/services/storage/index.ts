export function SaveSession(keyName: string, duration: any) {

  localStorage.clear();
  const today = new Date();

  console.log(keyName, duration);
  sessionStorage.setItem(keyName, JSON.stringify({
    session: keyName,
    expiration: new Date(today.getTime() + duration * 3600 * 1000).getTime()
  }));
}
