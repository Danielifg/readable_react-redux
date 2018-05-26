import React, { Component } from 'react';
import { Field, reduxForm, SubmitionError } from 'redux-form'
import { Input, Button, Message } from 'semantic-ui-react'



class NewPostCard extends Component {

  autocompleteSuggest({input, label, type, meta: { touched, error, warning }, ...custom}){
      const hasError = touched && error !== undefined;
      return (
        <div className="two fields">
          {hasError &&
            <Message
               error
               header='Error'
               content={error}/>
             }
             <Input type={type} error={hasError} fluid placeholder={label} {...input} {...custom} />
        </div>
      )
  }

submit(){

}

render(){
    const { handleSubmit, title,author, addPost } = this.props
    return(
      <div>
          <form className="ui form" onSubmit={handleSubmit(addPost)}>

                <div className="field">
                  <Field name='title' component={ this.autocompleteSuggest } label='Title' type="text" {...title}/>
                  <Field name='author' component={ this.autocompleteSuggest } label='Author' type="text" {...author}/>
                </div>
                <div className="field">
                    <textarea name='post' rows="2 "></textarea>
                </div>

            <Button fluid className="ui button" type="submit">Add</Button>
          </form>
    </div>
  );
  }
}


const validate = values =>{
const { title } = values;
  const errors = {};
  if(!title  || title.trim() === ''){
     errors.title = 'Field Requiered';
  }
  return errors;
}


expNewPostCardort default reduxForm({
  // a unique name for the form
  form: 'postForm',
  validate
})(NewPostCard);
