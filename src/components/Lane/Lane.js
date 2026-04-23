import React from "react";
import styled from "styled-components";
import Ticket from "../Ticket/Ticket";

/*This is the outter container for one lane*/
const LaneWrapper = styled.div`
  list-style: none;
  background-color: #fbf6f6;
  padding: 0;
  min-height: 50vh;
  width: 20vw;
  border-radius: 20px;
  @media (max-width: 768px) {
    margin-bottom: 5%;
    width: 100%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid black;
`;

const TicketsWrapper = styled.div`
  padding: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;

const Lane = ({
  tickets,
  loading,
  error,
  onDragStart,
  onDragOver,
  onDrop,
  title,
  laneId,
}) => (
  <LaneWrapper onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
    <Title>{title}</Title>
    {(loading || error) && <Alert>{loading ? "Loading..." : error}</Alert>}
    <TicketsWrapper>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} onDragStart={onDragStart} />
      ))}
    </TicketsWrapper>
  </LaneWrapper>
);

export default Lane;
