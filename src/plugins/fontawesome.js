// src/plugins/fontawesome.js

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner, faStar, faAward } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner, faStar, faAward);

export default (app) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
};