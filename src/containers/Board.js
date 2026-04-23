import React from "react";
import styled from "styled-components";
import Lane from "../components/Lane/Lane";
import withDataFetching from "../withDataFetching";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;
  color: black;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const lanes = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Review" },
  { id: 4, title: "Done" },
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ tickets: this.props.data });
    }
  }

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.effectAllowed = "move";
  };

  onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  onDrop = (e, laneId) => {
    const id = parseInt(e.dataTransfer.getData("id"), 10);
    const tickets = this.state.tickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.lane = laneId;
      }
      return ticket;
    });
    this.setState({
      tickets,
    });
  };

  render() {
    const { loading, error } = this.props;
    const { tickets } = this.state;

    return (
      <BoardWrapper>
        {lanes.map((lane) => (
          <Lane
            key={lane.id}
            laneId={lane.id}
            title={lane.title}
            loading={loading}
            error={error}
            onDragStart={this.onDragStart}
            onDragOver={this.onDragOver}
            onDrop={this.onDrop}
            tickets={tickets.filter((ticket) => ticket.lane === lane.id)}
          />
        ))}
      </BoardWrapper>
    );
  }
}

export default withDataFetching(Board);
