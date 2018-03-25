import React from 'react';

class DateList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name || "Dropdown"
        };
        this.props = props;
        this.init(props);
        this.selectDate = this.selectDate.bind(this);
    }

    selectDate(date, e) {
        this.setState(prevState => ({
            name : date
        }));
        if(this.props.switchDate) {
            this.props.switchDate(date);
        }
    }

    init(props) {
        var items = props.items;
        this.listItems = items.map((item, i) => 
            <li key={i} onClick={(e) => this.selectDate(item, e)}><a>{item}</a></li>
        );
    }
    render() {
        return(
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {this.state.name}
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">{this.listItems}</ul>
            </div>
        )
    }
}

export default DateList;