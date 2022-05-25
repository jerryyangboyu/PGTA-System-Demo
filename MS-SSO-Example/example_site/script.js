function setVisible(screen) {
  document.body.classList = [screen];
}

function showError(error) {
  console.error(error);
  document.querySelector(".error").textContent = error;
}

function showResult(tokenResponse) {
  // From: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/acquire-token.md#using-the-access-token
  var headers = new Headers();
  var bearer = "Bearer " + tokenResponse.accessToken;
  headers.append("Authorization", bearer);
  var options = {
    method: "GET",
    headers: headers,
  };
  var graphEndpoint = "https://graph.microsoft.com/v1.0/me";

  fetch(graphEndpoint, options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      document.querySelector("#result .name").textContent = response.givenName;
      setVisible("result");
    });
}

// Edit this variable with your details.
var msalConfig = {
  auth: {
    clientId: "d4fca68b-4002-4f3b-8a85-aeb479065048",
    // Only required if single tenant (remove if multi-tenant)
    authority: "https://login.microsoftonline.com/1faf88fe-a998-4c5b-93c9-210a11d9a5c2",
    // redirectUri: 'http://localhost:5500/MS-SSO-Example/example_site/index.html',
  },
};

function login() {
  var msalInstance = new msal.PublicClientApplication(msalConfig);

  msalInstance
    // Here is where you specify your scopes, I chose `user.read` here so I can later get the user's givenName.
    // All permissions (except for `user.read`) require your to specify them in your app registration and some
    // of those require admin consent.
    .loginPopup({ scopes: ["user.read"] })
    .then((response) => {
      if (response === null) {
        showError("There was an error authenticating you (response was null)");
        return;
      }

      showResult(response);
    })
    .catch((error) => {
      showError("There was an unexpected error during the login process");
      console.error(error);
    });
}
