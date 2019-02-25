// vars
var src, trmnl, caret, pos, speed;
trmnl = $('#terminal');
caret = $('#caret');
pos = 0;
speed = 3;

// main
$('html').on('keydown', function(e) {
  pos += speed;
  if (pos > src.length + speed - src.length % speed) {
    pos = 0;
  }
  trmnl.html(trmnl.html() + src.slice(pos - speed, pos));
  caret.removeClass('transparent');
  line.css({
    'top': caret.offset().top
  });
  window.scrollTo(0, document.body.scrollHeight);
});

// caret animation
setInterval(function() {
  caret.toggleClass('transparent');
}, 600);

// filler code
src = "\n\tMicrosoft Student Chapter invites you all to an amazing session on penetration testing with collaboration 'Learn code online'. It will provide you with exciting oppurtunities to learn new things and a platform to hone your skills as an aspiring Pentester.\n\n";