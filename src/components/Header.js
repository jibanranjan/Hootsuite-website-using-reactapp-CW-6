import './Header.css';
import logo from './logo.png'






function Header(){
    return(
 <div class="topnavbar">
    <div class="leftnavcontainer">
       <div class="logopart">
          <img src={logo}/>
        </div>

             <ul class="leftnavlinksdiv">
               <li> <a class="navlinksfirst" href=" ">Platforms</a></li>
               <li><a class="navlinksfirst" href=" ">Plan</a></li>
               <li><a class="navlinksfirst" href=" ">Enterprise</a></li>
               <li><a class="navlinksfirst" href=" ">Resources</a></li>
               <li><a class="navlinksfirst" href=" ">Education</a></li>
            </ul>
    </div>

      <div class="rightnavbarcontainer">
         <ul class="navlinksseconddiv">
             <li><a class="navlinkssecond" href=" ">Contact Us</a></li>
             <li><a class="navlinkssecond" href=" ">Login</a></li>
             <li> <button class="signupbtn">Signup</button> </li>
         </ul>

      </div>




 </div>

    );
}

export default Header;