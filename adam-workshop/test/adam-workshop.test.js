const cdk = require("aws-cdk-lib");
const { Template } = require("aws-cdk-lib/assertions");
const AdamWorkshop = require("../lib/adam-workshop-stack");

test("Author Lambda Function Created", () => {
  const app = new cdk.App();

  const stack = new AdamWorkshop.AdamWorkshopStack(app, "MyTestStack");

  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::Lambda::Function", {
    FunctionName: "AdamAuthorsFunction",
  });
});

test("API Gateway Created with /authors Route and Lambda Integration", () => {
  const app = new cdk.App();

  const stack = new AdamWorkshop.AdamWorkshopStack(app, "MyTestStack");

  const template = Template.fromStack(stack);

  // Assert that the /authors resource exists and is integrated with a Lambda function
  template.hasResourceProperties("AWS::ApiGateway::Resource", {
    PathPart: "authors",
  });

  // Check that the GET method for /authors is using Lambda integration
  template.hasResourceProperties("AWS::ApiGateway::Method", {
    AuthorizationType: "NONE",
    HttpMethod: "GET",
    Integration: {
      IntegrationHttpMethod: "POST",
      Type: "AWS_PROXY", // AWS_PROXY is the integration type for Lambda functions
    },
  });
});
