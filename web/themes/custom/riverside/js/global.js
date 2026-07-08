(function (Drupal, once) {
  Drupal.behaviors.riversideTheme = {
    attach(context) {
      once('riverside-global', 'body', context).forEach(() => {
        console.log('Riverside theme loaded');
      });
    }
  };
})(Drupal, once);