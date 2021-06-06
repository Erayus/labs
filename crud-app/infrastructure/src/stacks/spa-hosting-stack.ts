import * as cdk from '@aws-cdk/core';
import { SPADeploy } from 'cdk-spa-deploy';

export class SpaHostingStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new SPADeploy(this, 'spaDeploy')
          .createBasicSite({
            indexDoc: 'index.html',
            websiteFolder: '../website/build'
          });
    }
}