$(document).ready(function() {
  var $minutesv = $("#minutes");
  var $secondsv = $("#seconds");
  var minutes = 24;
  var seconds = 60;
  var breakmin = 5;
  var timerID = null;
  var $body = $("#container");
  var i = 0;
  var timer = "clock";
  //////////////////////////////////////////////////////////////////     
  ChangeTimer();

  //////////////////////////////////////////////////////////////////////
  $("#start").click(function(e) {
    mincop = minutes;
    $(this).text("STOP");
    breakcop = breakmin;
    console.log(minutes, mincop);
    if (timerID === null) {
      $('.glyphicon').slideUp(200);
      timerID = setInterval(function() {

        Clock();
      }, 1000);
      /////////////////////////////// STOP ////////////////
    } else {
      $(this).text("START");
      clearInterval(timerID);
      $('.glyphicon').slideDown(200);
      timerID = null;

    }

  });
  ////////////////CLOCK////////////////////////
  function Clock() {

    // var color = '#' + Math.floor(Math.random() * 16777215).toString(16);//COLOR
    switch (timer) {

      case "clock":

        i = i + 1;
        $body.append("<div class=general id=clocky" + i + "><span class=texty>" + minutes + " : " + seconds + "</span></div>");

        $("#clocky" + i).animate({

          left: "-=550px"

        }, "ease-in-out", function() {
          // Animation complete.
          $("#clocky" + i).delay(550).hide(300, function() {
            setTimeout(function() {
              $(this).hide(500);
            }, 1300);
          });

        });

        if (($("#clocky" + i).css('display') == 'none')) {
          console.log(($("#clocky" + i).css('display') == 'none'));
          $(this).hide(300);
        }
        if (($("#clocky" + i).css('display') == 'none')) {
          console.log(($("#clocky" + i).css('display') == 'none'));
          $(this).hide(300);
        } //RE CHECK -.-

        // if(i==2){
        //   clearInterval(timerID);
        // }

        // $($body: i).append("<div style=" + color + "></div>");
        if (seconds >= 0) {
          seconds = seconds - 1;
        }
        if (minutes === 0 && seconds === 0) {
          console.log("BREAAAAK");
          $body.html("");

          timer = "break";
          $(".general").remove();
          seconds = 60;
          minutes = mincop;
        } else if (seconds == 0) {
          minutes--;
          seconds = 60;
        }

        break;
      case "break":

        var color = '#' + Math.floor(Math.random() * 16777215).toString(16); //COLOR
        i = i + 1;
        $body.append("<div class=general1 style=background-color:" + color + " id=clocky" + i + "><span class=texty>" + breakmin + " : " + seconds + "</span></div>");

        if (seconds >= 0) {
          seconds = seconds - 1;
        }

        $("#clocky" + i).animate({

          right: "-=850px"
        }, "ease-in-out", function() {
          // Animation complete.
          $("#clocky" + i).delay(550).hide(300, function() {
            setTimeout(function() {
              $("#clocky" + i).hide(500);
            }, 1300);
          });

        });
        if (($("#clocky" + i).css('display') == 'none')) {
          console.log(($("#clocky" + i).css('display') == 'none'));
          $(this).hide(300);
        } //RECHECK -.-

        if (($("#clocky" + i).css('display') == 'none')) {
          console.log(($("#clocky" + i).css('display') == 'none'));
          console.log("AQUI PERRA SUCIA");
          $(this).hide(300);
        }

        if (breakmin === 0 && seconds === 0) {
          console.log("TO WORK");
          $body.html("");
          timer = "clock";
          $(".general1").remove();
          seconds = 60;
          breakmin = breakcop;
        } else if (seconds == 0) {
          breakmin--;
          seconds = 60;
        }

        break;

    }
  }
  ////CLOOOOOOOOOOOOOOOOOOOOOOCK
  //////////////////////////////////////////////////////////////////////////////
  function breakTime() {

  } //////BREAKTIME

  ////////////////////////////////////////////////////////////////
  function ChangeTimer(e) {
    ////////////////////

    $("#minus").click(function() {
      if (minutes > 0) {
        minutes--;
        $body.html("<span class=texty>" + minutes + " : " + seconds + "</span>");
        $(".texty").delay(1000).fadeOut(300);

        $("#mincount").text(minutes);
      }

    });
    $("#plus").click(function() {

      minutes++;
      $body.html("<span class=texty>" + minutes + " : " + seconds + "</span>");
      $(".texty").delay(1000).fadeOut(300);

      $("#mincount").text(minutes);

    });
    ////////////////////////break//////
    $("#minus1").click(function() {
      if (breakmin > 0) {
        breakmin--;
        $body.html("<span class=texty>" + breakmin + " : " + seconds + "</span>");
        $(".texty").delay(1000).fadeOut(300);

        $("#mincount1").text(breakmin);
      }

    });
    $("#plus1").click(function() {
      breakmin++;

      $body.html("<span class=texty>" + breakmin + " : " + seconds + "</span>");
      $(".texty").delay(1000).fadeOut(300);

      $("#mincount1").text(breakmin);

    });

    ////////check/////
  } ////changetimer/////

});