import Footer from "./Footer"
import Navbarpf from "./Navbarpf"
import '../styles/HomePage.css'
import Gallery from "./Gallery"
import ViewPhotos from "./ViewPhotos"
function HomePage(){
    return(
    <>
    
    <div className="HomePage">
    <Navbarpf />
   <div className="header-text">
            <h1>Hello,</h1>
            <h1>  I'm  <span className="delayed">VISHNU KM</span> </h1>
        </div>
        <p>Through their lens, a photographer connects hearts across time and culture</p>
        <div id="gmail">
            <a href="mailto:vishnukm407@gmail.com">vishnukm407@gmail.com</a>
        </div>
   </div>
        <ViewPhotos/>
    <Footer />
    
    </>
    )
}
export default HomePage