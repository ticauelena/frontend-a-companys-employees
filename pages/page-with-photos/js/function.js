// same code with switch method input HTML
function weekFunction() {
    let dayOfWeek = document.getElementById("n").value;
        document.getElementById("week").innerHTML = determineDayOfTheWeek(dayOfWeek);
  }

  function determineDayOfTheWeek(dayNumber) {
    switch (+dayNumber) {
        case 1:
         return 'Monday';
          break;
        case 2:
          return 'Tuesday';
          break;
        case 3:
          return 'Wednesday';
          break;
        case 4:
           return 'Thursday';
          break;
        case 5:
            return 'Friday';
            break;
          case 6:
            return 'Saturday';
            break;
          case 7:
            return 'Sunday';
        }
  }
