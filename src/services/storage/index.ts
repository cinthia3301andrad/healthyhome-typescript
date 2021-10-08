import { safeParse } from '../../utils/modifierFormat';

export const sessionLS = 'sessionHealthyHome';

export function saveSession(keyName: string, duration: any) {

  localStorage.clear();
  const today = new Date();

  sessionStorage.setItem(sessionLS, JSON.stringify({
    session: keyName,
    expiration: new Date(today.getTime() + duration * 3600 * 1000).getTime()
  }));
}

export function isAuthenticated() {
  const session = setRecover(sessionLS).session || {};

  return !!session.token;
}

export function userToken() {
  const session = setRecover(sessionLS).session || {};

  return session !== {} ? session.token : false;
}

export function infosSession() {
  const session = setRecover(sessionLS).session || {};
  return session;
}

export function setRecover(rotulo: string) {
  return safeParse(sessionStorage.getItem(rotulo) || '{}');
}

export const headers = {
  Authorization: `Bearer ${userToken()}`,
};
