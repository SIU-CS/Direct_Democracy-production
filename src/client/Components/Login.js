import React from 'react';
import Bill from './Bill';

class Login extends React.Component {

		constructor(props){
				super(props);
				this.state = {loggedIn:false}


				this.submit = this.submit.bind(this);
		}

    submit(){
            var x=document.forms["login"]["usermail"].value;
            var y=document.forms["login"]["password"].value;
            console.log(x);
            console.log(y);
            if(x.localeCompare('user') === 0 && y.localeCompare('password') === 0){
                this.setState({loggedIn:true});
            }else{
                this.setState({loggedIn:false});
            }
        }

		render() {
        if(!this.state.loggedIn){
						return (
                <div className="Login">
<form name="login" action="index_submit" method="get" >
    <label>Email</label>
    <input type="email" name="usermail" placeholder="yourname@email.com" required />
                <br />
    <label>Password</label>
    <input type="password" name="password" placeholder="password" required />
                <br />
    <input type="submit" onClick={this.submit} value="Login" />
</form>

                </div>
						);
        }else{
            return(
            <div>
                <Bill billId={1}>
                </Bill>
            </div>
                );
        }
		}
}

export default Login;
