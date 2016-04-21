'user strict';

import Baobab from 'baobab';
import { browserHistory } from 'react-router';

export const tree = new Baobab({
  "app": {

  },
  "dashboard": {
    "links": [
      {
        "label": "Home",
        "path": "/dashboard"
      },
      {
        "label": "Users",
        "path": "/dashboard/users"
      },
      {
        "label": "Settings",
        "path": "/dashboard/settings"
      }
    ]
  }
});

export const history = browserHistory;
