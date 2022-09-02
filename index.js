
for(var a =0;a<7;a++)
{
document.querySelectorAll(".drum")[a].addEventListener("click",function(){

   var buttinhtml = this.innerHTML;
   mackSound(buttinhtml);
   animation(buttinhtml);
});
 }
document.addEventListener("keypress",function(event){

mackSound(event.key);
animation(event.key);
})
function mackSound(key){
  switch (key) {

    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
      break;
      case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
        break;
        case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
          break;
          case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
            break;
            case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
              break;
              case "k":
              var audio = new Audio("sounds/crash.mp3");
              audio.play();
                break;
                case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                  break;
    default:
    console.log(event.key);

  }

}

function animation(keybuttun){
  var buttonAnimation = document.querySelector("."+keybuttun);
  buttonAnimation.classList.add("pressed");
   setTimeout(function(){  buttonAnimation.classList.remove("pressed");},100)
}
