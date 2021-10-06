import React from "react";


class Footer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <footer id="main-footer">
        <div id="footer-container">
          <a href="https://www.linkedin.com/in/tonykzhang" target="_blank"><img id="linkedInLogo" src={window.linkedin_logo} alt="linkedin logo"/></a>
          <a href="https://www.github.com/tozhang665" target="_blank"><img id="githubLogo" src={window.github_logo} alt="github logo"/></a>
        </div>
        <h1> Developed by Tony Zhang</h1>
      </footer>
    )

  }

}

export default Footer