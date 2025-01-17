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
