import React, { Component } from 'react'
import './submitted_feedbacks.scss';
import { observer, inject } from 'mobx-react';
import { networkService} from '../../_shared/services';
import { appConstants } from '../../_shared/config/app.config';
import { toast } from 'react-toastify';


@inject("userStore", "pageStore")
@observer
class SubmittedFeedbacks extends Component {

  constructor(props) {
    super(props);
    this.userStore = props.userStore;
    this.pageStore = this.props.pageStore;
    this.pageStore.setPageIndex(1);
    this.state = {
      loadApp: false
    };
  }

  componentDidMount = () => {
    this.isValidToken();
  }

  isValidToken = async () => {
    const url = `${appConstants.urls.baseUrl}/api/users/`;
    await networkService.get(url).then((response) => {
      console.log(response);
      toast.success("Welcome to Submitted Feedback screen.");
    })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }

  render() {
    console.log(this.userStore.email);
    return (
      <h2>Welcome to Submitted Feedback screen.</h2>
    );
  }
}


export default SubmittedFeedbacks;
