import { defineBackend } from '@aws-amplify/backend';
import * as iam from "aws-cdk-lib/aws-iam"
import * as sns from "aws-cdk-lib/aws-sns"
import { data } from './data/resource';
import { runbatch } from './functions/runbatch/resource'

const backend = defineBackend({
  runbatch,
  data,
});

const runBatchLambda = backend.runbatch.resources.lambda;

const dynamoStack = backend.createStack("dynamoStack")
const dynamo = new sns.Topic(dynamoStack, "Topic", {
  displayName: "dynamo",
})

const statement = new iam.PolicyStatement({
  sid: "AllowPublish",
  actions: ["sns:Publish"],
  resources: [dynamo.topicArn],
})


runBatchLambda.addToRolePolicy(statement);