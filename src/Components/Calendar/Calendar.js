import React, {useState} from 'react';
import styled from 'styled-components';
import DateGrid from './DateGrid';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  vertical-align: middle;
`

const StyledDays = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #aaa;
  background-color: #eeeeee60;
`

const StyledCalendar = styled.div`
  width: 50%;
  border: 1px solid #aaa;
  padding: 20px;
  margin: 0 auto;
  border-radius: 5px;
`

const StyledButton = styled.button`
  margin: 3px;
  padding: 10px;
  background-color: #293669;
  color: white;
  border: none;
  border-radius: 25px;
  &:hover {
    background-color: #29366990;
  }
`

const Calendar = () => {
  const getCurrentMonth = () => {
    const date = new Date();
    return date.getMonth();
  }
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  }
  let [month, setMonth] = useState(getCurrentMonth())
  let [year, setYear] = useState(getCurrentYear());

  const getMonth = monthInt => {
    let month = '';
    switch(monthInt) {
      case 0:
        month = 'January';
      break;
      case 1:
        month = 'February';
      break;
      case 2:
        month = 'March';
      break;
      case 3:
        month = 'April';
      break;
      case 4:
        month = 'May';
      break;
      case 5:
        month = 'June';
      break;
      case 6:
        month = 'July';
      break;
      case 7:
        month = 'August';
      break;
      case 8:
        month = 'September';
      break;
      case 9:
        month = 'October';
      break;
      case 10:
        month = 'November';
      break;
      case 11:
        month = 'December';
      break;
      default:
        month = 'January'
      break;
    }
    return month;
  }

  const incrementMonth = (month, setMonth, year, setYear) => {
    if(month === 11) {
      setMonth(0);
      setYear(++year);
    } else {
      setMonth(++month);
    }
  }

  const decrementMonth = (month, setMonth, year, setYear) => {
    if(month === 0) {
      setMonth(11);
      setYear(--year);
    } else {
      setMonth(--month);
    }
  }

  const setDateToCurrentDay = () => {
    const date = new Date();
    setMonth(date.getMonth());
    setYear(date.getFullYear())
  }

  return(
    <StyledCalendar>
      <StyledHeader>
        <div>
          <StyledButton onClick={()=>decrementMonth(month, setMonth, year, setYear)}><i className="fa fa-chevron-left"></i></StyledButton>
          <StyledButton onClick={()=>incrementMonth(month, setMonth, year, setYear)}><i className="fa fa-chevron-right"></i></StyledButton>
          <StyledButton onClick={()=>setDateToCurrentDay()}>Today</StyledButton>
        </div>
        <div>
          <h3>{getMonth(month) + ' ' + year}</h3>
        </div>
        <div>
          <StyledButton onClick={()=>setYear(--year)}>Prev Year</StyledButton>
          <StyledButton onClick={()=>setYear(++year)}>Next Year</StyledButton>
        </div>
      </StyledHeader>
      <StyledDays>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </StyledDays>
      <DateGrid year={year} month={month}/>
    </StyledCalendar>
  )
}

export default Calendar 