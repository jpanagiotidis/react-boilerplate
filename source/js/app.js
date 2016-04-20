'use strict';

import '../sass/lp.scss';

console.log('YEAH');

moufa()
.then((data) => {
  console.log('YEAH', data);
})
.catch((err) => {
  console.log('ERR', err);
});

async function moufa(){
  console.log('FFFF');
}
