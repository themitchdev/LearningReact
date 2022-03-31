import Header from "./Header"
import Footer from "./Footer"


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

ReactDOM.render(<Page />, document.getElementById("root"))
