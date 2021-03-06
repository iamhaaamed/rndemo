/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import { AppRegistry } from "react-native";
import codePush from "react-native-code-push";

import App from "./src/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => codePush(App));
