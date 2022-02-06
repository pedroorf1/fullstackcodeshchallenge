import React from "react";
import logo from './imgs/Logo.png'
import "./Home.css";

//api--
import api from "./../../../api/api";


//--conponentes
import HomeForm from '../../Forms/search/Searc.frm'


//actions
class Home extends React.Component {
  state = {
    msgHome: [],
  };

  async componentDidMount() {
    const getHome = await api.get("");
    this.setState({ msgHome: getHome.data });
  }

  render() {
    const { msgHome } = this.state;
    return (
      <>
        <div className="container">
          <div className="homebody">

            <div className="homeSearcform">
              <HomeForm />
            </div>

            <div className='homelogo'>
              <img src={logo} alt='Logo' className="img-fluid" />
            </div>
            <div className="message">

              {msgHome['message']}

            </div>

          </div>
        </div>
      </>
    );
  }
}
export default Home;
