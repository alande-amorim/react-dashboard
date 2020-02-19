import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';

class Form extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Forms" />

        <div className="row">
          <div className="col-lg-12">
            <div id="default">
              <div className="card mb-4">
                <div className="card-header">
                  Default Bootstrap Form Controls
                </div>
                <div className="card-body">
                  <div className="sbp-preview">
                    <div className="sbp-preview-content">
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlInput1">
                            Email address
                          </label>
                          <input
                            className="form-control"
                            id="exampleFormControlInput1"
                            type="email"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">
                            Example select
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect2">
                            Example multiple select
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                            multiple=""
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Example textarea
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="sbp-preview-text">
                      The default Bootstrap form control states have been
                      restyled to fit the SB Admin Pro theme. The style has
                      changed, but the markup is identical.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div id="default">
              <div className="card mb-4">
                <div className="card-header">Custom Checkboxes & Radio</div>
                <div className="card-body">
                  <div className="sbp-preview">
                    <div className="sbp-preview-content">
                      <form>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Custom Checkbox 1
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheck2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck2"
                          >
                            Custom Checkbox 2
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheck3"
                            type="checkbox"
                            disabled=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck3"
                          >
                            Custom Checkbox (Disabled)
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="sbp-preview-content">
                      <form>
                        <div className="custom-control custom-radio">
                          <input
                            className="custom-control-input"
                            id="customRadio1"
                            type="radio"
                            name="customRadio"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio1"
                          >
                            Toggle this custom radio
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            className="custom-control-input"
                            id="customRadio2"
                            type="radio"
                            name="customRadio"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio2"
                          >
                            Or toggle this other custom radio
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            className="custom-control-input"
                            id="customRadio3"
                            type="radio"
                            name="customRadio"
                            disabled=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio3"
                          >
                            This radio is disabled
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Form;
