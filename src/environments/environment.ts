// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDncmeCFJ4iBdq8ft3qBiu62HPa6cNb50A",
    authDomain: "discord-clone-ui.firebaseapp.com",
    projectId: "discord-clone-ui",
    storageBucket: "discord-clone-ui.appspot.com",
    messagingSenderId: "721382074146",
    appId: "1:721382074146:web:54e1618d853629aca2e77b",
  },
};

export const defaultPhotoURL: string =
  "https://firebasestorage.googleapis.com/v0/b/discord-clone-420ba.appspot.com/o/default-server-icon.png?alt=media&token=22b079f4-06b8-456b-a36a-4ce66471aa8a";

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
