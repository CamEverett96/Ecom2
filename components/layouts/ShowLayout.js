import Header1 from '../Header/Header1/Header1'
import Header2 from '../Header/Header2/Header2'
import Header3 from '../Header/Header3/Header3'
export default function ShowLayout(props){
    return(<>
    
    <Header3/>
    <Header2/>
    <Header1/>
    <main>{props.children}</main>
    <header>This is a Footer</header>
    </>)
}