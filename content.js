window.document.body.style.overflow = 'auto';

let paywall;
setInterval(function () {
  if (paywall = window.document.body.querySelector('#graphics-paywall-overlay')) {
    paywall.remove();
  }
}, 200)