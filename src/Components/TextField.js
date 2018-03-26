import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.className = props.class || "form-control";
        this.inputType = props.type || "text";
        this.placeholder = props.placeholder || "";
        this.value = props.value;

        this.state = {
            textValue : props.value
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState(prevState => {
            prevState.textValue = nextProps.value,
            this.input.value = nextProps.value
        });
    }
    
    handleChange(e) {
        e.preventDefault();
        if(this.props.change) {
            this.props.change();
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        
        if(this.props.submit) {
            this.props.submit(this.input.value);
        }
    }

    render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <input type={this.inputType} 
                placeholder={this.placeholder}
                className={this.className} 
                onChange={this.handleChange}
                ref={(input) => this.input = input}></input>
        </form>
    )
  };
}

export default TextField;