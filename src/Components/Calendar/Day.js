import React from 'react';
import styled from 'styled-components';

const StyledDay = styled.div`
  padding: 4px 0 100px 4px;
  border-bottom: 1px solid #aaa;
  border-right: 1px solid #aaa;
  &:nth-child(7n-6) {
    border-left: 1px solid #aaa;
  }
  &:hover {
    background-color: ${props => props.prevMonth ? '#eee' : '#51E8EA25'};
  }
  color: ${props => props.prevMonth && '#666'};
  background-color: ${props => props.currentDay && '#fffb9450'};
`

const Day = ({date, prevMonth, dateFull, currentDay}) => {
  return(
    <StyledDay prevMonth={prevMonth} currentDay={currentDay} onClick={()=>{
      console.log(dateFull)
    }}>
      {date}
    </StyledDay>
  )
}

export default Day