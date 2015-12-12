var score=0;
function newGame() {
  var color = ["#eef","#996600","#CCCC66","#FF6699","#FFFFCC","#FFCC00","#CCCCFF","#FFFF66","#00CCFF","#FF6699","#9966FF"];
  var firstBlockRow = firstBlockColumn = secondBlockRow = secondBlockColumn = 0;
  var string="<html><body>";
      string+="<table>";
      string+="<tr><td></td><td></td><td></td><td></td></tr>";
      string+="<tr><td></td><td></td><td></td><td></td></tr>";
      string+="<tr><td></td><td></td><td></td><td></td></tr>";
      string+="<tr><td></td><td></td><td></td><td></td></tr>";
      string+="</table><div id='gameOver'></div></body></html>";
  $("#body").html(string);
  function generateNumbers() {
    firstBlockRow = Math.floor( Math.random() * (3 - 0 + 1) ) + 0;
    firstBlockColumn = Math.floor( Math.random() * (3 - 0 + 1) ) + 0;
    secondBlockRow = Math.floor( Math.random() * (3 - 0 + 1) ) + 0;
    secondBlockColumn = Math.floor( Math.random() * (3 - 0 + 1) ) + 0;
    if ( (firstBlockRow === secondBlockRow) && (firstBlockColumn === secondBlockColumn)) {
       generateNumbers();
    }
    else {
      $("table tr:eq( " + firstBlockRow + " ) td:eq( " + firstBlockColumn + " ) ").html(2).css("background-color",color[0]);
      $("table tr:eq( " + secondBlockRow + " ) td:eq( " + secondBlockColumn + " ) ").html(2).css("background-color",color[0]);
    }
  }
  generateNumbers();
  $(window).keydown(function(event) {
     var eventNumber= event.which;

         if (eventNumber === 40) {
             keyDown();
          }
          else if (eventNumber === 38) {
             keyUp();
          }
          else if (eventNumber === 39) {
             keyRight();
          }
          else if (eventNumber === 37) {
             keyLeft();
          }
  });
  function keyDown() {
     for ( var coloumn = 4 ; coloumn >= 0 ; coloumn--) {
        for ( var row = 3 ; row >= 0 ; row-- ) {
            var blockValue = parseInt($("table tr:eq( " + row + " ) td:eq( " + coloumn + " ) ").html());
            var temp = row;
            if ( blockValue !== "") {
               for ( var l = row - 1; l >= 0 ; l--) {
                  var blockValue2 = parseInt($("table tr:eq( " + l + " ) td:eq( " + coloumn + " ) ").html());
                  if ( blockValue2 !== "") {
                     if ( blockValue === blockValue2 ) {
                        var addValue = blockValue + blockValue2;
                        score += addValue;
                        $("#score").text(score);
                        $("table tr:eq( " + temp + " ) td:eq( " + coloumn + " ) ").html("");
                        $("table tr:eq( " + l + " ) td:eq( " + coloumn + " ) ").html( addValue );
                        row = l;
                        break;
                     }
                  }
               }
            }
         }

         for ( var k = 3 ; k >= 0 ; k-- ) {
            if ( $("table tr:eq( " + k + " ) td:eq( " +  coloumn  + " ) ").html() === "" ) {
               var temp = k;
               for ( var j = k - 1 ; j >= 0; j--) {
                  var value = $("table tr:eq( " + j + " ) td:eq( " +  coloumn  + " ) ").html()
                  if ( $("table tr:eq( " + j + " ) td:eq( " +  coloumn  + " ) ").html() !== "") {
                     $("table tr:eq( " + k + " ) td:eq( " +  coloumn  + " ) ").html(value);
                     $("table tr:eq( " + j + " ) td:eq( " +  coloumn  + " ) ").html("");
                     boolean = true;
                     break;
                  }
                }
             }
         }
      }

        assignColors();

  }
  function keyUp() {
    for ( var i = 0 ; i < 4 ; i++) {
       for ( var j = 0 ; j < 3 ; j++ ) {
           var blockValue = parseInt($("table tr:eq( " + j + " ) td:eq( " + i + " ) ").html());
           var temp = j;
           if ( blockValue !== "") {
              for ( var l = j+1; l < 4 ; l++) {
                 var blockValue2 = parseInt($("table tr:eq( " + l + " ) td:eq( " + i + " ) ").html());
                 if ( blockValue2 !== "") {
                    if ( blockValue === blockValue2 ) {
                       var addValue = blockValue + blockValue2;
                       score += addValue;
                       $("#score").text(score);
                       $("table tr:eq( " + temp + " ) td:eq( " + i + " ) ").html("");
                       $("table tr:eq( " + l + " ) td:eq( " + i + " ) ").html( addValue );
                       j = l;
                       break;
                    }
                 }
              }
           }
        }

        for ( var k = 0 ; k < 4 ; k++ ) {
           if ( $("table tr:eq( " + k + " ) td:eq( " +  i  + " ) ").html() === "" ) {
              var temp = k;
              for ( var j = k + 1 ; j >= 0; j++) {
                 var value = $("table tr:eq( " + j + " ) td:eq( " +  i  + " ) ").html()
                 if ( $("table tr:eq( " + j + " ) td:eq( " +  i  + " ) ").html() !== "") {
                    $("table tr:eq( " + k + " ) td:eq( " +  i  + " ) ").html(value);
                    $("table tr:eq( " + j + " ) td:eq( " +  i  + " ) ").html("");
                    boolean = true;
                    break;
                 }
               }
            }
        }
     }
      assignColors();
  }
  function keyRight() {
    for ( var i = 4; i >= 0; i--) {
       for ( var j = 3; j >= 0; j-- ) {
           var blockValue = parseInt($("table tr:eq( " + i + " ) td:eq( " + j + " ) ").html());
           var temp = j;
           if ( blockValue !== "") {
              for ( var l = j - 1; l >= 0 ; l--) {
                 var blockValue2 = parseInt($("table tr:eq( " + i + " ) td:eq( " + l + " ) ").html());
                 if ( blockValue2 !== "") {
                    if ( blockValue === blockValue2 ) {
                       var addValue = blockValue + blockValue2;
                       score += addValue;
                       $("#score").text(score);
                       $("table tr:eq( " + i + " ) td:eq( " + temp + " ) ").html("");
                       $("table tr:eq( " + i + " ) td:eq( " + l + " ) ").html( addValue );
                       j = l;
                       break;
                    }
                 }
              }
           }
        }
        for ( var k = 3 ; k >= 0 ; k-- ) {
           if ( $("table tr:eq( " + i + " ) td:eq( " +  k  + " ) ").html() === "" ) {
              var temp = k;
              for ( var j = k - 1 ; j >= 0; j--) {
                 var value = $("table tr:eq( " + i + " ) td:eq( " +  j  + " ) ").html()
                 if ( $("table tr:eq( " + i + " ) td:eq( " +  j  + " ) ").html() !== "") {
                    $("table tr:eq( " + i + " ) td:eq( " +  k  + " ) ").html(value);
                    $("table tr:eq( " + i + " ) td:eq( " +  j  + " ) ").html("");
                    break;
                 }
               }
            }
        }

     }
  assignColors();
 }

function keyLeft() {
  for ( var i = 0 ; i < 4 ; i++) {
     for ( var j = 0 ; j < 3 ; j++ ) {
         var blockValue = parseInt($("table tr:eq( " + i + " ) td:eq( " + j + " ) ").html());
         var temp = j;
         if ( blockValue !== "") {
            for ( var l = j + 1; l < 4 ; l++) {
               var blockValue2 = parseInt($("table tr:eq( " + i + " ) td:eq( " + l + " ) ").html());
               if ( blockValue2 !== "") {
                  if ( blockValue === blockValue2 ) {
                     var addValue = blockValue + blockValue2;
                     score += addValue;
                     $("#score").text(score);
                     $("table tr:eq( " + i + " ) td:eq( " + temp + " ) ").html("");
                     $("table tr:eq( " + i + " ) td:eq( " + l + " ) ").html( addValue );
                     j = l;
                     break;
                  }
               }
            }
         }
      }

      for ( var k = 0 ; k < 4 ; k++ ) {
         if ( $("table tr:eq( " + i + " ) td:eq( " +  k  + " ) ").html() === "" ) {
            var temp = k;
            for ( var j = k + 1 ; j >= 0; j++) {
               var value = $("table tr:eq( " + i + " ) td:eq( " +  j  + " ) ").html()
               if ( $("table tr:eq( " + i + " ) td:eq( " +  j  + " ) ").html() !== "") {
                  $("table tr:eq( " + i + " ) td:eq( " +  k  + " ) ").html(value);
                  $("table tr:eq( " + i + " ) td:eq( " +  j  + " ) ").html("");
                  break;
               }
             }
          }
      }
   }
      assignColors();
}
function assignColors() {
  for ( var row = 0; row < 4; row++) {
    for ( var coloumn = 0; coloumn < 4; coloumn++) {
       if ($("table tr:eq( " + row + " ) td:eq( " +  coloumn  + " ) ").html() === "" ) {
          $("table tr:eq( " + row + " ) td:eq( " +  coloumn  + " ) ").css("background-color","#eee");
       }
       else {
          for ( var exponent = 1; exponent <= 11; exponent++ ) {
             if ( parseInt($("table tr:eq( " + row + " ) td:eq( " +  coloumn  + " ) ").html()) === Math.pow(2,exponent) ) {
                $("table tr:eq( " + row + " ) td:eq( " +  coloumn  + " ) ").css("background-color",color[exponent - 1]);
                break;
             }
          }
       }
    }
  }
  valueGenerator();
}

function valueGenerator() {
  var block = "", number = 0, number1 = 0, i=0;
      do{
        number = Math.floor( Math.random() * (3 - 0 + 1) ) + 0;
        number1 = Math.floor( Math.random() * (3 - 0 + 1) ) + 0;
        block = $("table tr:eq( " + number + " ) td:eq( " + number1 + " ) ").html();
        i++;
        if ( i === 16) {
            return;
        }
     } while ( block !== "");
     $("table tr:eq( " + number + " ) td:eq( " + number1 + " ) ").html(2).css("background-color",color[0]);
  }
  $("#newGame").click(function(){
     score=0;
     $("#score").text(score);
    newGame();
  });
}
