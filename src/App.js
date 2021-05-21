//import logo from './logo.svg';
import Address from './Profile/Address';
import FullName from './Profile/FullName';
import ProfilePhoto from './Profile/ProfilePhoto';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageInSrc from "./imageInSrc.png"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
           <ProfilePhoto /><br />
             <span style={{color: "green"}}>Nom et Prénon : </span><FullName />
             <span style={{color: "green"}}>Adresse : </span><Address />

            <h1 className="title red">Your name here</h1>

            <br />

            <img src={imageInSrc} alt="" />

            <br />

            <img src="/imageInPublic.png" alt="" />

        </div>


      <header className="App-header">
        <form className="p-3 mb-2 bg-light text-dark">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
           
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
