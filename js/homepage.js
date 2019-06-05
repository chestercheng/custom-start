var weekday = new Array(
    '<span class="day1">S</span><span class="day2">U</span><span class="day3">N</span>',
    '<span class="day1">M</span><span class="day2">O</span><span class="day3">N</span>',
    '<span class="day1">T</span><span class="day2">U</span><span class="day3">E</span>',
    '<span class="day1">W</span><span class="day2">E</span><span class="day3">D</span>',
    '<span class="day1">T</span><span class="day2">H</span><span class="day3">U</span>',
    '<span class="day1">F</span><span class="day2">R</span><span class="day3">I</span>',
    '<span class="day1">S</span><span class="day2">A</span><span class="day3">T</span>'
);
var quotes = new Array(
    'You know my methods, Watson.',
    'There is no one who knows the higher criminal world of London so well as I do.',
    'How often have I said that when you have excluded the impossible whatever remains, however improbable, must be the truth.',
    'My name is Sherlock Holmes. It is my business to know what other people don’t know.',
    'I trust that age doth not wither nor custom stale my infinite variety.',
    'Never trust to general impressions, my boy, but concentrate yourself upon details.',
    'Education never ends, Watson. It is a series of lessons with the greatest for the last.',
    'Mediocrity knows nothing higher than itself; but talent instantly recognizes genius.',
    'The chief proof of man’s real greatness lies in his perception of his own smallness.',
    'Where there is no imagination there is no horror.',
    'The world is full of obvious things which nobody by any chance ever observes.',
    'There is nothing more stimulating than a case where everything goes against you.',
    'Come at once if convenient — if inconvenient come all the same.',
    'We balance probabilities and choose the most likely. It is the scientific use of the imagination.',
    'It has long been an axiom of mine that the little things are the infinitely the most important.',
    'Work is the best antidote to sorrow, my dear Watson.',
    'There can be no question, my dear Watson, of the value of exercise before breakfast.',
    'What one man can invent, another can discover.',
    'I never guess. It is a shocking habit – destructive to the logical faculty.',
    'There is nothing more deceptive than an obvious fact.',
);
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDay();
    var am_pm = 'AM';
    var greet = 'Good Morning, ';
    m = checkTime(m);
    s = checkTime(s);
    if(h <= 12) {
        am_pm = 'AM';
        if (h < 5) greer = 'Howdy Night Owl, ';
    } else {
        am_pm = 'PM';
        h = h % 12;
        if (h <= 5) {
            greet = 'Good Afternoon, '
        } else {
            greet = 'Good Evening, '
        }
    }
    h = checkTime(h);
    document.getElementById('clock').innerHTML = h + ':' + m + '<span class="time">' + am_pm + '</span>' + weekday[day];
    document.getElementById('greeting').innerHTML = greet;
    document.getElementById('quote').textContent = quotes[m % quotes.length];
    setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
