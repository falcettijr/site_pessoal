import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/sergiofalcetti.png";

import "../styles/components/sidebar.sass";
  
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Sergio Falcetti" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
