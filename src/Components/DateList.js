import React from 'react';

class DateList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            items: props.items,
            selectedItem: {}
        };
        this.state.selectedItem = this.state.items[2];
        this.props = props;
        this.selectDate = this.selectDate.bind(this);
    }

    selectDate(item, e) {
        item.className = " selected";
        this.setState(prevState => {
            prevState.name = item.date;
            prevState.selectedItem.className = "";
            prevState.selectedItem = item;
        });
        if(this.props.switchDate) {
            this.props.switchDate(item.date);
        }
    }

    render() {
        return(
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {this.state.name}
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    {this.state.items.map((item, i) => {
                        var className = "list-group-item";
                        if(item.className) {
                            className += item.className;
                        }
                        return <li key={i} className={className} onClick={(e) => this.selectDate(item, e)}>{item.date}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default DateList;