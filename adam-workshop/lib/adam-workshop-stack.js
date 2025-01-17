const { Stack } = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");

class AdamWorkshopStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Define the Lambda function resource
    const authorsFunction = new lambda.Function(this, "AuthorsFunction", {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset("lambda"),
      functionName: "AdamAuthorsFunction",
      handler: "authors.handler",
    });
  }
}

module.exports = { AdamWorkshopStack };
