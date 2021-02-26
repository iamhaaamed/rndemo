/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React from "react";
import { SafeAreaView, StatusBar, Alert, Text } from "react-native";
import { Login } from "./containers/Login";
import { Meeting } from "./containers/Meeting";
import { createMeetingRequest } from "./utils/Api";
import {
  getSDKEventEmitter,
  MobileSDKEvent,
  NativeFunction,
} from "./utils/Bridge";
import styles from "./Style";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isInMeeting: false,
      isLoading: false,
      meetingTitle: "",
      selfAttendeeId: "",
    };
  }

  componentDidMount() {
    this.onMeetingStartSubscription = getSDKEventEmitter().addListener(
      MobileSDKEvent.OnMeetingStart,
      () => {
        this.setState({ isInMeeting: true, isLoading: false });
      }
    );

    this.onMeetingEndSubscription = getSDKEventEmitter().addListener(
      MobileSDKEvent.OnMeetingEnd,
      () => {
        this.setState({ isInMeeting: false, isLoading: false });
      }
    );

    this.onErrorSubscription = getSDKEventEmitter().addListener(
      MobileSDKEvent.OnError,
      (message) => {
        Alert.alert("SDK Error", message);
      }
    );
  }

  componentWillUnmount() {
    if (this.onMeetingEndSubscription) {
      this.onMeetingEndSubscription.remove();
    }
    if (this.onMeetingStartSubscription) {
      this.onMeetingStartSubscription.remove();
    }
    if (this.onErrorSubscription) {
      this.onErrorSubscription.remove();
    }
  }

  initializeMeetingSession = (meetingName, userName) => {
    this.setState({
      isLoading: true,
    });

    // createMeetingRequest(meetingName, userName)
    //   .then((meetingResponse) => {

    // this.setState({
    //   meetingTitle: meetingName,
    //   selfAttendeeId: meetingResponse.JoinInfo.Attendee.Attendee.AttendeeId,
    // });
    // NativeFunction.startMeeting(
    //   meetingResponse.JoinInfo.Meeting.Meeting,
    //   meetingResponse.JoinInfo.Attendee.Attendee
    // );

    if (userName === "1") {
      NativeFunction.startMeeting(
        {
          MeetingId: "df6df0a7-01de-40e1-a32b-64c5baba4824",
          MediaPlacement: {
            AudioFallbackUrl:
              "wss://haxrp.m2.ue1.app.chime.aws:443/calls/df6df0a7-01de-40e1-a32b-64c5baba4824",
            AudioHostUrl:
              "98f0644405dea976a3737c1aa9252b42.k.m2.ue1.app.chime.aws:3478",
            ScreenDataUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/df6df0a7-01de-40e1-a32b-64c5baba4824",
            ScreenSharingUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/df6df0a7-01de-40e1-a32b-64c5baba4824",
            ScreenViewingUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=df6df0a7-01de-40e1-a32b-64c5baba4824",
            SignalingUrl:
              "wss://signal.m2.ue1.app.chime.aws/control/df6df0a7-01de-40e1-a32b-64c5baba4824",
            TurnControlUrl: "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions",
          },
          MediaRegion: "us-east-1",
        },
        {
          ExternalUserId: "#1",
          AttendeeId: "4693492a-7b43-1522-84c9-0876592aa202",
          JoinToken:
            "NDY5MzQ5MmEtN2I0My0xNTIyLTg0YzktMDg3NjU5MmFhMjAyOjgyMTI3NTg0LWMwNDUtNDI2MS1iNmE4LTYxNDBiMmRhM2FkMQ",
        }
      );
    } else if (userName === "2") {
      NativeFunction.startMeeting(
        {
          MeetingId: "df6df0a7-01de-40e1-a32b-64c5baba4824",
          MediaPlacement: {
            AudioFallbackUrl:
              "wss://haxrp.m2.ue1.app.chime.aws:443/calls/df6df0a7-01de-40e1-a32b-64c5baba4824",
            AudioHostUrl:
              "98f0644405dea976a3737c1aa9252b42.k.m2.ue1.app.chime.aws:3478",
            ScreenDataUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/df6df0a7-01de-40e1-a32b-64c5baba4824",
            ScreenSharingUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/df6df0a7-01de-40e1-a32b-64c5baba4824",
            ScreenViewingUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=df6df0a7-01de-40e1-a32b-64c5baba4824",
            SignalingUrl:
              "wss://signal.m2.ue1.app.chime.aws/control/df6df0a7-01de-40e1-a32b-64c5baba4824",
            TurnControlUrl: "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions",
          },
          MediaRegion: "us-east-1",
        },
        {
          ExternalUserId: "#2",
          AttendeeId: "4cc52e47-0ac0-92f8-7f3f-8c1d408e4146",
          JoinToken:
            "NGNjNTJlNDctMGFjMC05MmY4LTdmM2YtOGMxZDQwOGU0MTQ2OjU1NzJlMWZhLWI4MTktNDZkYS05ZjA5LTQ4NzU2YjZlNzliMw",
        }
      );
    } else if (userName === "3") {
      NativeFunction.startMeeting(
        {
          MeetingId: "df6df0a7-01de-40e1-a32b-64c5baba4824",
          MediaPlacement: {
            AudioFallbackUrl:
              "wss://haxrp.m2.ue1.app.chime.aws:443/calls/df6df0a7-01de-40e1-a32b-64c5baba4824",
            AudioHostUrl:
              "98f0644405dea976a3737c1aa9252b42.k.m2.ue1.app.chime.aws:3478",
            ScreenDataUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/df6df0a7-01de-40e1-a32b-64c5baba4824",
            ScreenSharingUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/v2/screen/df6df0a7-01de-40e1-a32b-64c5baba4824",
            ScreenViewingUrl:
              "wss://bitpw.m2.ue1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=df6df0a7-01de-40e1-a32b-64c5baba4824",
            SignalingUrl:
              "wss://signal.m2.ue1.app.chime.aws/control/df6df0a7-01de-40e1-a32b-64c5baba4824",
            TurnControlUrl: "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions",
          },
          MediaRegion: "us-east-1",
        },
        {
          ExternalUserId: "#3",
          AttendeeId: "a3dc5052-741e-4d81-2bf7-281570d8587f",
          JoinToken:
            "YTNkYzUwNTItNzQxZS00ZDgxLTJiZjctMjgxNTcwZDg1ODdmOjcxZDkzODExLWIwZmQtNDJjNy04NmRlLTM3ZjQ1NjAxYmVkZA",
        }
      );
    }

    // })
    // .catch((error) => {
    //   console.log(error);
    //   Alert.alert(
    //     "Unable to find meeting",
    //     `There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired.n ${error}`
    //   );
    //   this.setState({ isLoading: false });
    // });
  };

  renderRoute() {
    if (this.state.isInMeeting) {
      return (
        <Meeting
          meetingTitle={this.state.meetingTitle}
          selfAttendeeId={this.state.selfAttendeeId}
        />
      );
    } else {
      return (
        <Login
          isLoading={this.state.isLoading}
          onSubmit={(meetingName, userName) =>
            this.initializeMeetingSession(meetingName, userName)
          }
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar />
        <SafeAreaView>{this.renderRoute()}</SafeAreaView>
      </React.Fragment>
    );
  }
}
export default App;
