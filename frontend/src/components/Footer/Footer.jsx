import "./Footer.css";

function Footer(){
    return(
        <footer className="outfit">
          <div>
              <div className="brand baloo">' श्रीमद्भगवद्गीता '</div>
              <div className="copyright">© {new Date().getFullYear()} <span className="baloo">' श्रीमद्भगवद्गीता ’</span> .All rights reserved.</div>
          </div>
          <div> 
              <div className="footHead">Navigation Links</div>
              <div className="footLink">
                  <div><a href="x">Home</a></div>
                  <div><a href="x">Explore</a></div>
                  <div><a href="x">About</a></div>
                  <div><a href="x">Learn More.</a></div>  
              </div>
          </div>
          <div>
              <div className="footHead">From Developer</div>
              <div className="footLink">
                  <div className="links">
                      <div><img src="/images/linkedin.svg" alt="" /></div>
                      <div><a href="x">LinkedIn</a></div>
                  </div>
                  <div className="links">
                      <div><img src="/images/github.svg" alt="" /></div>
                      <div><a href="x">Github</a></div>
                  </div>
                  <div className="links">
                      <div><img src="/images/x.svg" alt="" /></div>
                      <div><a href="x">X (Twitter)</a></div>
                  </div>
                  <div className="links">
                      <div><img src="/images/instagram.svg" alt="" /></div>
                      <div><a href="x">Instagram</a></div>
                  </div>
              </div>
          </div>
          <div>
              <div><u>‘Stay inspired! Keep working hard.’</u></div>
          </div>
      </footer>
    );
}

export default Footer;