/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import axios from "axios";

const SERVER_URL = "YOUR_SERVER_URL";
const SERVER_REGION = "YOUR_SERVER_REGION";

export async function createMeetingRequest(meetingName, attendeeName) {
  let url = "https://apsy-eventplanning-dev.azurewebsites.net/api";
  console.log("meetingName", meetingName);
  return axios.post(
    url,
    {
      query: `mutation event_StartEvent($eventId: Int!, $hostId: Int!) {
        event_StartEvent(eventId: $eventId, hostId: $hostId) {
          status
          result {
            event {
              id
              metadata
              externalId
              registeredUsers {
                attended
                externalId
                joinedAt
                joinToken
                leftAt
              }
            }
            attendees {
              id
              firstName
              lastName
              userBase {
                email
                password
              }
              username
            }
          }
        }
      }      
      `,
      variables: {
        eventId: meetingName,
        hostId: 1,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
