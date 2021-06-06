#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HostingStack } from './src/stacks/hosting-stack';
import { DeploymentStack } from './src/stacks/deployment-stack';
import {ComStack} from './src/stacks/com-stack';
import { SpaHostingStack } from './src/stacks/spa-hosting-stack';

const app = new cdk.App();
const env = {
    region: 'us-east-1', //process.env.CDK_DEFAULT_REGION, 
    account: process.env.CDK_DEFAULT_ACCOUNT
}

const hostingStack = new SpaHostingStack(app, 'cars-hosting-stack', {env});
const commStack = new ComStack(app, 'cars-communication-stack', {env});