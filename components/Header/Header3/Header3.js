export default function Header3(){
    return(
        <header className="header header3">
            
            <div className="header3__logo">
             <a href="/link">Company 3</a>
             </div>
                
                
             <ul className="header3__collections-nav">
           <li className="header3__collection-link">
                <a href="/link">
                     Link top
                <i className="fas fa-chevron-down"></i>
                </a>
            <ul className="collection-link__sub-links">
                <li><a href="#">Sub-Link</a></li>
                <li><a href="#">Sub-Link</a></li>
                <li><a href="#">Sub-Link</a></li>
                <li><a href="#">Sub-Link</a></li>
            </ul>
        </li>
        <li className="header3__collection-link">
        <a href="/link" >Link</a>
        </li>
        <li className="header3__collection-link">
        <a href="/link" >Link</a>
        </li>
        
       
        <a href="/link" className="header3__collection-link">Link
        </a>
        <a href="/cart"><i className="fas fa-shopping-cart"></i>
        </a>
        <a href="/cart"><i className="fas fa-user"></i>
        </a>
                    </ul>
        </header>
    )
}