import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
};

const keycloak = new Keycloak(keycloakConfig);

async function makeLogin(fn: (v: boolean) => void) {
  keycloak
    .init({ onLoad: 'login-required', redirectUri: 'http://localhost:8888/' })
    .then((authenticated) => {
      if (authenticated) {
        console.log('User is authenticated');
        fn(authenticated);
      } else {
        console.log('User is not authenticated');
      }
    })
    .catch((error) => {
      console.error('Initialization error', error);
    });
}

export { keycloak, makeLogin };