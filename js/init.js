$(function(){
  var app = (function () {

    var quotes = [
      {'author':'Eric Schmidt', 'content':'The rise of Google, the rise of Facebook, the rise of Apple, I think are proof that there is a place for computer science as something that solves problems that people face every day.'},
      {'author':'Alan Kay','content':'Technology is anything that wasn’t around when you were born.'},
      {'author':'Arthur C. Clarke','content':'Any sufficiently advanced technology is equivalent to magic.'},
      {'author':'Mark Kennedy','content':'All of the biggest technological inventions created by man – the airplane, the automobile, the computer – says little about his intelligence, but speaks volumes about his laziness.'},
      {'author':'Thomas Edison','content':'Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.'},
      {'author':'Albert Einstein','content':'It has become appallingly obvious that our technology has exceeded our humanity.'},
      {'author':'Elbert Hubbard','content':'One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man.'},
      {'author':'Douglas Adams','content':'Technology is a word that describes something that doesn’t work yet.'},
      {'author':'R. Buckminster Fuller','content':'Humanity is acquiring all the right technology for all the wrong reasons.'},
      {'author':'Kurt Vonnegut','content':'I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex.'},
      {'author':'Albert Einstein','content':'The human spirit must prevail over technology.'},
      {'author':'Libby Larsen','content':'The great myth of our times is that technology is communication.'},
      {'author':'Walter Lippmann','content':'You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers.'},
      {'author':'Douglas Adams','content':'We are stuck with technology when what we really want is just stuff that works.'},
      {'author':'Joseph Krutch','content':'Technology made large populations possible; large populations now make technology indispensable.'},
      {'author':'Don DeLillo','content':'This is the whole point of technology.  It creates an appetite for immortality on the one hand.  It threatens universal extinction on the other. Technology is lust removed from nature.'},
      {'author':'Sydney Harris','content':'The real danger is not that computers will begin to think like men, but that men will begin to think like computers.'},
      {'author':'Omar Bradley','content':'If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner.'},
      {'author':'John Lasseter','content':'The art challenges the technology, and the technology inspires the art'},
      {'author':'Arthur Schlesinger','content':'Science and technology revolutionize our lives, but memory, tradition and myth frame our response.'}
    ];

    var init = function() {
      $('.button-collapse').sideNav({
        menuWidth: 300,
        closeOnClick: true
      });
      getRandomQuote();
    }; // end init

    var getRandomQuote = function() {
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      $('#author').text('- '+quote.author);
      $('#content').text(quote.content);
    }; // end getRandomQuote

    return {
      init: init
    };

  })(); // end app

  app.init();

}); // end of document
