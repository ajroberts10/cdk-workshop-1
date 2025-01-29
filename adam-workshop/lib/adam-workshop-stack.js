const { Stack } = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");

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

    // Create the API Gateway
    const api = new apigateway.RestApi(this, "AdamBookshopApi", {
      restApiName: "AdamBookshopService",
      description: "This service serves bookshop data.",
    });

    // Create the /authors route and connect it to our Authors Lambda function
    const authors = api.root.addResource("authors");
    authors.addMethod(
      "GET",
      new apigateway.LambdaIntegration(authorsFunction),
      {
        apiKeyRequired: true,
        authorizationType: apigateway.AuthorizationType.NONE,
      }
    );

    const apiKey = new apigateway.ApiKey(this, "AdamApiKey", {
      apiKeyName: "AdamApiKey",
      description: "API Key for My Bookshop Service",
    });

    // Create a Usage Plan and associate it with the API Key
    const usagePlan = new apigateway.UsagePlan(this, "AdamUsagePlan", {
      name: "Basic",
      apiStages: [
        {
          api,
          stage: api.deploymentStage,
        },
      ],
    });

    usagePlan.addApiKey(apiKey);
  }
}

module.exports = { AdamWorkshopStack };
