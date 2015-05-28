var React = require('react');

var Form = React.createClass({
    onClick:function(){
      console.log('You clicked inside the input! Just an event example.');
    },
    handleSubmit: function(e){
        e.preventDefault();
        var text = this.refs.text.getDOMNode().value.trim();
        var author = this.refs.author.getDOMNode().value.trim();
        if (!text) {
            return;
        }
        this.props.handleForm(author,text);

        this.refs.text.getDOMNode().value = '';
        this.refs.author.getDOMNode().value = '';
        return;
    },
    render:function(){
    	//You can tie pretty dom event in JSX, pretty sweet.
      return (
          <form onSubmit={this.handleSubmit}>
          <h1>testing again</h1>
              <input onClick={this.onClick} type="text" placeholder="author" ref="author"/>
              <input type="text" placeholder="text" ref="text" />
              <button type="submit">Submit</button>
          </form>
      )
  }
})

module.exports = Form;
