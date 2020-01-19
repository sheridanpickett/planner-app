import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Day from './Day';

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`

const Calendar = ({year, month}) => {

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 32).getDate();
    return 32 - date;
  }

  const getDaysInPrevMonth = (year, month) => {
    const date = new Date(year, month-1, 32).getDate();
    return 32 - date;
  }

  const getFirstMonday = (year, month) => {
    let day = new Date(year, month, 1);
    if(!(day.getDay === 1)) {
      day = new Date(year, (month-1), 1);
      day = moment(day).endOf('month').startOf('isoweek');
    }
    return day;
  }

  const generateDates = (firstMonday, daysInMonth, daysInPrevMonth) => {
    let days = '';
    if(firstMonday.format('DD') > 7) {
      days = daysInMonth + (daysInPrevMonth - firstMonday.format('DD')) + 1;
    } else {
      days = daysInMonth;
    }

    let prevMonth = true;
    const currentDay = moment(new Date());
    let date = firstMonday;
    
    const dates = [];
    for(let i = 0; i < days; i++) {
      if(date.format('DD') === '01') {
        prevMonth = false;
      }
      if(date.format('DD-MM-YYYY')===currentDay.format('DD-MM-YYYY')) {
        dates.push(<Day date={date.format('DD')} dateFull={date.format('DD-MM-YYYY')} prevMonth={prevMonth} currentDay={true} key={i}/>);
      } else {
        dates.push(<Day date={date.format('DD')} dateFull={date.format('DD-MM-YYYY')} prevMonth={prevMonth} key={i}/>);
      }
      date.add(1, 'd');
    }
    return dates;
  }
  
  const firstMonday = getFirstMonday(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const daysInPrevMonth = getDaysInPrevMonth(year, month);
  const dates = generateDates(firstMonday, daysInMonth, daysInPrevMonth);
  
  return (
    <DateGrid>
      {dates}
    </DateGrid>
  )
}

export default Calendar