'use strict';

import { registerUser } from '../redux/actions';
import { connect } from 'react-redux';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';

const {
  RaisedButton,
  TextField
} = MUI;

let Register = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },
  _submitHandler() {
    let { user, pass, confirm } = this.refs;
    if (user.getValue().localeCompare('') === 0) {
      // console.log('user');
      return;
    }
    if (pass.getValue().localeCompare('') === 0) {
      // console.log('pass');
      return;
    }
    if (confirm.getValue().localeCompare('') === 0) {
      // console.log('user');
      return;
    }

    if (pass.getValue().localeCompare(confirm.getValue()) === 0) {
      store.dispatch(
        registerUser(user.getValue(), pass.getValue())
      );

      user.clearValue();
      pass.clearValue();
      confirm.clearValue();
    }
  },

  render() {
    return (
      <div>
        <h3>Registration</h3>

        <TextField hintText="" fullWidth={true} type="text"
                   floatingLabelText="Email or Username" ref="user"
                   onEnterKeyDown={this._submitHandler} />

        <TextField hintText="" fullWidth={true} type="password"
                   floatingLabelText="Password" ref="pass"
                   onEnterKeyDown={this._submitHandler} />

        <TextField hintText="" fullWidth={true} type="password"
                   floatingLabelText="Confirm Password" ref="confirm"
                   onEnterKeyDown={this._submitHandler} />
            <br/>
            <br/>

        <form className="form-horizontal">
          <fieldset>
            <legend>Demographic Survey</legend>
            <span>
              This is confidential and will only be used for group representation.
              None of this will be traced back to you directly.
            </span>
            <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="politics-radios">
              Political Affiliation
            </label>
              <div className="col-md-4">
                <div className="radio">
                  <label htmlFor="politics-radios-0">
                  <input type="radio" name="politics-radios" id="politics-radios-0" value="1"/>
                    Democrat
                  </label>
                </div>
                <div className="radio">
                  <label htmlFor="politics-radios-1">
                  <input type="radio" name="politics-radios" id="politics-radios-1" value="2"/>
                    Republican
                  </label>
                </div>
                <div className="radio">
                  <label htmlFor="politics-radios-2">
                  <input type="radio" name="politics-radios" id="politics-radios-2" value="3"/>
                    Liberal
                  </label>
                </div>
                <div className="radio">
                  <label htmlFor="politics-radios-3">
                  <input type="radio" name="politics-radios" id="politics-radios-3" value="4"/>
                    Conservative
                  </label>
                </div>
                <div className="radio">
                  <label htmlFor="politics-radios-4">
                  <input type="radio" name="politics-radios" id="politics-radios-4" value="5"/>
                    Green Party
                  </label>
                </div>
                <div className="radio">
                  <label htmlFor="politics-radios-5">
                  <input type="radio" name="politics-radios" id="politics-radios-5" value="6"/>
                    Libertarian
                  </label>
                </div>
                <div className="radio">
                  <label htmlFor="politics-radios-6">
                  <input type="radio" name="politics-radios" id="politics-radios-6" value="7"/>
                    Independent
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="gender-radios">Gender</label>
              <div className="col-md-4">
                <div className="radio">
                  <label htmlFor="gender-radios-0">
                  <input type="radio" name="gender-radios" id="gender-radios-0" value="1"/>
                    Male
                  </label>
                </div>
              <div className="radio">
                <label htmlFor="gender-radios-1">
                <input type="radio" name="gender-radios" id="gender-radios-1" value="2"/>
                  Female
                </label>
              </div>
              <div className="radio">
                <label htmlFor="gender-radios-2">
                  <input type="radio" name="gender-radios" id="gender-radios-2" value="3"/>
                  Non-Binary
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="race-radios">Race</label>
              <div className="col-md-4">
                <div className="radio">
                  <label htmlFor="race-radios-0">
                  <input type="radio" name="race-radios" id="race-radios-0" value="1"/>
                    Native American or Alaskan Native
                  </label>
                </div>
              <div className="radio">
                <label htmlFor="race-radios-1">
                <input type="radio" name="race-radios" id="race-radios-1" value="2"/>
                  Asian American
                </label>
              </div>
              <div className="radio">
                <label htmlFor="race-radios-2">
                <input type="radio" name="race-radios" id="race-radios-2" value="3"/>
                  Black or African American
                </label>
              </div>
              <div className="radio">
                <label htmlFor="race-radios-3">
                  <input type="radio" name="race-radios" id="race-radios-3" value="4"/>
                    Native Hawaiian or Other Pacific Islander
                </label>
              </div>
              <div className="radio">
                <label htmlFor="race-radios-4">
                <input type="radio" name="race-radios" id="race-radios-4" value="5"/>
                  White or Cauasian
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="selectbasic">Age</label>
              <div className="col-md-4">
                <select id="selectbasic" name="selectbasic" className="form-control">
                  <option value="1">{"<"}18</option>
                  <option value="2">18-25</option>
                  <option value="3">25-34</option>
                  <option value="4">35-44</option>
                  <option value="5">45-54</option>
                  <option value="6">55-64</option>
                  <option value="7">65+</option>
                </select>
              </div>
            </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="selectbasic">Household Income</label>
              <div className="col-md-4">
                <select id="selectbasic" name="selectbasic" className="form-control">
                  <option value="1">{"<"}$10,000</option>
                  <option value="2">$10,000 to $30,000</option>
                  <option value="3">$30,001 to $50,000</option>
                  <option value="4">$50,001 to $75,000</option>
                  <option value="5">$75,001 to $100,000</option>
                  <option value="6">$100,000 to $150,000</option>
                  <option value="7">$150,001 to $300,000</option>
                  <option value="8">$300,001 to $500,000</option>
                  <option value="8">$500,001 to $1,000,000</option>
                  <option value="9">$1,000,000+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="marriage-radios">
            Marital Status
        </label>
              <div className="col-md-4">
                <div className="radio">
                  <label htmlFor="marriage-radios-0">
                  <input type="radio" name="marriage-radios" id="marriage-radios-0" value="1"/>
                    Married
                  </label>
                </div>
              <div className="radio">
                <label htmlFor="marriage-radios-1">
                <input type="radio" name="marriage-radios" id="marriage-radios-1" value="2"/>
                  Widowed
                </label>
              </div>
              <div className="radio">
                <label htmlFor="marriage-radios-2">
                <input type="radio" name="marriage-radios" id="marriage-radios-2" value="3"/>
                  Divorced
                </label>
              </div>
              <div className="radio">
                <label htmlFor="marriage-radios-3">
                <input type="radio" name="marriage-radios" id="marriage-radios-3" value="4"/>
                  Separated
                </label>
              </div>
              <div className="radio">
                <label htmlFor="marriage-radios-4">
                <input type="radio" name="marriage-radios" id="marriage-radios-4" value="5"/>
                  Single
                </label>
              </div>
            </div>
            </div>

<div className="form-group">
  <label className="col-md-4 control-label" htmlFor="education-radios"> Education</label>
  <div className="col-md-4">
  <div className="radio">
    <label htmlFor="education-radios-0">
      <input type="radio" name="education-radios" id="education-radios-0" value="1"/>
      Middle School
    </label>
  </div>
  <div className="radio">
    <label htmlFor="education-radios-1">
      <input type="radio" name="education-radios" id="education-radios-1" value="2"/>
      High school graduate
    </label>
  </div>
  <div className="radio">
    <label htmlFor="education-radios-2">
      <input type="radio" name="education-radios" id="education-radios-2" value="3"/>
      Have attended/currently attending college
    </label>
  </div>
  <div className="radio">
    <label htmlFor="education-radios-3">
      <input type="radio" name="education-radios" id="education-radios-3" value="4"/>
      Associate degree
    </label>
  </div>
  <div className="radio">
    <label htmlFor="education-radios-4">
      <input type="radio" name="education-radios" id="education-radios-4" value="5"/>
      Bachelor's degree
    </label>
  </div>
  <div className="radio">
    <label htmlFor="education-radios-5">
      <input type="radio" name="education-radios" id="education-radios-5" value="6"/>
      Master's degree
    </label>
  </div>
  <div className="radio">
    <label htmlFor="education-radios-6">
      <input type="radio" name="education-radios" id="education-radios-6" value="7"/>
      Professional degree
    </label>
  </div>
  <div className="radio">
    <label htmlFor="education-radios-7">
      <input type="radio" name="education-radios" id="education-radios-7" value="8"/>
      Doctorate degree
    </label>
  </div>
  </div>
</div>

            <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="employement-radios">
            Employment Status
        </label>
            <div className="col-md-4">
            <div className="radio">
            <label htmlFor="employement-radios-0">
            <input type="radio" name="employement-radios" id="employement-radios-0" value="1"/>
            Employeed
        </label>
            </div>
            <div className="radio">
            <label htmlFor="employement-radios-1">
            <input type="radio" name="employement-radios" id="employement-radios-1" value="2"/>
            Unemployeed
        </label>
            </div>
            <div className="radio">
            <label htmlFor="employement-radios-2">
            <input type="radio" name="employement-radios" id="employement-radios-2" value="3"/>
            Student
        </label>
            </div>
            <div className="radio">
            <label htmlFor="employement-radios-3">
            <input type="radio" name="employement-radios" id="employement-radios-3" value="4"/>
            Retired
        </label>
            </div>
            <div className="radio">
            <label htmlFor="employement-radios-4">
            <input type="radio" name="employement-radios" id="employement-radios-4" value="5"/>
            Disabled
        </label>
            </div>
            </div>
            </div>

<div className="form-group">
       <label className="col-md-4 control-label" htmlFor="selectbasic">
            State you currently reside in
        </label>
  <div className="col-md-4">
    <select id="selectbasic" name="selectbasic" className="form-control">
      <option value="1">Alabama</option>
      <option value="2">Alaska</option>
      <option value="3">Arizona</option>
      <option value="4">Arkansas</option>
      <option value="5">California</option>
      <option value="6">Colorado</option>
      <option value="7">Connecticut</option>
      <option value="8">Delaware</option>
      <option value="9">Florida</option>
      <option value="10">Georgia</option>
      <option value="11">Hawaii</option>
      <option value="12">Idaho</option>
      <option value="13">Illinois</option>
      <option value="14">Indiana</option>
      <option value="15">Iowa</option>
      <option value="16">Kansas</option>
      <option value="17">Kentucky</option>
      <option value="18">Louisiana</option>
      <option value="19">Maine</option>
      <option value="20">Maryland</option>
      <option value="21">Massachusetts</option>
      <option value="22">Michigan</option>
      <option value="23">Minnesota</option>
      <option value="24">Mississippi</option>
      <option value="25">Missouri</option>
      <option value="26">Montana</option>
      <option value="27">Nebraska</option>
      <option value="28">Nevada</option>
      <option value="29">New Hampshire</option>
      <option value="30">New Jersey</option>
      <option value="31">New Mexico</option>
      <option value="32">New York</option>
      <option value="33">North Carolina</option>
      <option value="34">North Dakota</option>
      <option value="35">Ohio</option>
      <option value="36">Oklahoma</option>
      <option value="37">Oregon</option>
      <option value="38">Pennsylvania</option>
      <option value="39">Rhode Island</option>
      <option value="40">South Carolina</option>
      <option value="41">South Dakota</option>
      <option value="42">Tennessee</option>
      <option value="43">Texas</option>
      <option value="44">Utah</option>
      <option value="45">Vermont</option>
      <option value="46">Virginia</option>
      <option value="47">Washington</option>
      <option value="48">West Virginia</option>
      <option value="49">Wisconsin</option>
      <option value="50">Wyoming</option>
      <option value="51">USA territory</option>
    </select>
  </div>
</div>


          </fieldset>
        </form>

        <RaisedButton label="Create Account" secondary={true} onClick={this._submitHandler} />
      </div>
    );
  }
});

export default connect(mapStateToProps)(Register);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
