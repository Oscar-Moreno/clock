// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const digitalHour = document.getElementById('digital-hour')
const digitalMinutes = document.getElementById('digital-minutes')
const digitalWeekDay = document.getElementById('week-day')
const digitalMonthDay = document.getElementById('month-day')
const digitalMonth = document.getElementById('month')
const digitalYear = document.getElementById('year')


const changeDate = () =>{
    const date = new Date()

    digitalHour.textContent = date.getHours()
    digitalMinutes.textContent = date.getMinutes()
    console.log(date)
}
