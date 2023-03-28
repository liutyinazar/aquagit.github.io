import "./Technologies.scss";
import windows from "../assets/images/windows.svg";
import web from "../assets/images/web.svg";
import db from "../assets/images/db.svg";
import other from "../assets/images/other.svg";
import mobile from "../assets/images/mobile.svg";

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="border">
        <div className="tech_wrapper">
          <div className="tech_title">
            <h1>Technologies</h1>
            <span></span>
          </div>

          <div className="tech">
            <div className="tech_block">
              <div className="tech_item">
                <img src={web} alt="web" height={"100px"} />
                <h3>Web</h3>
              </div>
              <ul>
                <li>Angular</li>
                <li>React</li>
                <li>Redux</li>
                <li>TypeScript</li>
                <li>SCSS</li>
                <li>ASP.NET</li>
                <li>C#</li>
                <li>HTML/CSS/JS</li>
                <li>ES6</li>
                <li>MVC</li>
              </ul>
            </div>
            <div className="tech_block">
              <div className="tech_item">
                <img src={mobile} alt="mobile" height={"100px"} />
                <h3>Mobile</h3>
              </div>
              <ul>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Objective-C</li>
                <li>SWIFT</li>
                <li>React Native</li>
                <li>C#</li>
                <li>Unity</li>
                <li>Xamarin</li>
                <li>JS</li>
                <li>PhoneGap</li>
              </ul>
            </div>
            <div className="tech_block">
              <div className="tech_item">
                <img src={windows} alt="windows" height={"100px"} />
                <h3>Microsoft</h3>
              </div>
              <ul>
                <li>.NET Core</li>
                <li>ASP.NET</li>
                <li>C#</li>
                <li>MVC</li>
                <li>WCF</li>
                <li>WPF</li>
                <li>XAML</li>
                <li>WinForms</li>
                <li>Xamarin</li>
                <li>UWP</li>
              </ul>
            </div>

            <div className="tech_block">
              <div className="tech_item">
                <img src={db} alt="db" height={"100px"} />
                <h3>DW & BI</h3>
              </div>
              <ul>
                <li>Oracle</li>
                <li>MS SQL Server</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>MicroStrategy</li>
                <li>IBM DB2</li>
                <li>Infobright</li>
                <li>Pentaho</li>
                <li>SSIS</li>
                <li>Hive</li>
              </ul>
            </div>
            <div className="tech_block">
              <div className="tech_item">
                <img src={other} alt="other" height={"100px"} />
                <h3>Other</h3>
              </div>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>Amazon AWS</li>
                <li>DevOps</li>
                <li>Go</li>
                <li>Spring</li>
                <li>SAP Hybris</li>
                <li>JBoss</li>
                <li>Hibernate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
