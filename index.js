function Page(){
    return (
        
        <div>
            <Header />
            <ol>
                <li>
                    I cannot say I like react yet because I have not used it.
                </li>
                <li>
                    I do know there are many jobs that require react skills.
                </li>
                <li>
                    I also know they pay very well for this skill.
                </li>
                <li>
                    But I want to learn it to be able to do my own thang.
                </li>
            </ol>
            <Footer />
        </div>
    )
}

function Header(){
    return (
        <nav>
            <img src="./react-logo.png" width= "40px" />
            <h1>
                Reasons Im excited for React!
            </h1>
        </nav>
    )
}

function Footer(){
    return (
        <small>
        C 2022 Sanchez developement. All reights reserved.
        </small>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
