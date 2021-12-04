import React, { Component } from 'react';
import RoomDetail from './roomdetail';
import RoomUpdate from './roomupdate';
import axios from 'axios';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomsData: [],
            room: " ",
            showComponent: false,
        };
        this.getRoomDetail = this.getRoomDetail.bind(this);
        this.showRoomDetails = this.showRoomDetails.bind(this);
    }

    getRoomDetail(item) {
        axios
            .get("http://127.0.0.1:8000".concat(item.absolute))
            .then((response) => {
                this.setState({room: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    showRoomDetails(item) {
        this.getRoomDetail(item);
        this.setState({ showComponent: true });
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            this.setState({roomsData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                {this.state.roomsData.map((item) => {
                    return (
                        <h3 key={item.id} onClick={() => this.showRoomDetails(item)}>
                            {item.room_name}: {item.description}
                        </h3>
                    );
                })}

                {this.state.showComponent ? (
                    <RoomDetail roomDetail={this.state.room} />
                ) : null}
            </div>
        );
    }
}
export default RoomList;