import React, { Component } from 'react';
import RoomUpdate from './roomupdate';
import axios from "axios";

class RoomDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updateRoomDetails = this.updateRoomDetails.bind(this);
        this.deleteRoom = this.deleteRoom.bind(this);
    }
    updateRoomDetails() {
        this.setState({ showComponent: true });
    }
    deleteRoom(obj) {
        console.log(obj);
        axios.delete("http://127.0.0.1:8000".concat(obj))
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const obj = this.props.roomDetail;
        return (
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>{obj.room_name}</h4>
                <p>{obj.description}</p>
                <p><label>Length:</label>{obj.length} x <label>Width:</label>{obj.width}</p>
                <button
                    style={{ backgroundColor: "white" }}
                    onClick={() => this.updateRoomDetails()}
                >
                    Update
                </button>
                <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => this.deleteRoom(obj.delete)}>
                    Delete
                </button>
                {this.state.showComponent ? <RoomUpdate roomUpdate={obj} />: null}
            </div>
        );
    }
}
export default RoomDetail;