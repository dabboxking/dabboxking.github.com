$(function(){
  var app = (function () {
    quotes = [
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
      var isMobile = false; //initiate as false
      // device detection
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

      $('.button-collapse').sideNav({
        menuWidth: 300,
        closeOnClick: isMobile
      });
      getRandomQuote();
    }; // end init

    var getRandomQuote = function() {
      //var quote = quotes[Math.floor(Math.random() * quotes.length)];
      var url = 'https://the-quote-api.herokuapp.com/random';//'http://localhost:8080/quotes/random';
      $.getJSON(url,function(quote) {
        $('#author').text('- '+quote.author);
        $('#content').text(quote.content);
      });

    }; // end getRandomQuote

    return {
      init: init
    };

  })(); // end app

  app.init();

}); // end document
