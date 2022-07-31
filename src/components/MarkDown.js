import React, { Component } from 'react'
import {marked} from "marked"
//a header (H1 size), a
// sub header (H2 size), a link,
// inline code, a code block, 
//a list item, a blockquote,
// an image, and bolded text
const defaultText= `# A MARKDOWN PREVIEWER
## Here is the subheading
[Link here](https://www.example.com)

\`write a code\`

\`\`\`
{
  "firstName": "Toby",
  "lastName": "Ekene",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote here

![Toby](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)

**Write a bold text**

`
marked.setOptions({
  breaks: true
})

 class Markdown extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: defaultText
      }
    }
    markingDown=(event)=>{
        this.setState({
           text: event.target.value

        })
        

    }
  render() {
    return (
      <div><textarea id = "editor"
       onChange={this.markingDown} 
       value= {this.state.text}
       placeholder="Enter your markdown" ></textarea>
       
      <div id = "preview" 
       dangerouslySetInnerHTML = {{ __html: marked(this.state.text) }}></div>
      </div>
    )
  }
}

export default Markdown

window.onload= init;
function init(){
    document.getElementById("editor").style= " height: 60vh; width: 68vh"
    
   
}

