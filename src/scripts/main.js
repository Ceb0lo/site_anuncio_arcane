AOS.init();

const eventDate = new Date("feb 19, 2025 00:00:00");
const eventTimeStamp = eventDate.getTime();

const countsTheHours = setInterval(function(){
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const daysUntilTheEvent = Math.floor(timeUntilEvent /(1000 * 60 * 60 * 24));
    const hoursUntilTheEvent = Math.floor((timeUntilEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesUntilTheEvent = Math.floor((timeUntilEvent % (1000 * 60 * 60)) / (1000 * 60));
    const secondsUntilTheEvent = Math.floor((timeUntilEvent % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${daysUntilTheEvent}D ${hoursUntilTheEvent}H ${minutesUntilTheEvent}M ${secondsUntilTheEvent}S`

    if (timeUntilEvent < 0){
        clearInterval(countsTheHours);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);