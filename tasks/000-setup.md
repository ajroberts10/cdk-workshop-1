# ⚙️ Setup Tasks
Before we can begin the workshop, we need to make sure we have the appropriate tools installed and have CLI access to the correct AWS account.

The following steps should get us ready to go!

## Install Node.js
AWS CDK requires Node.js.

This can be downloaded from the [Node.js official website](https://nodejs.org/en/download/package-manager)

You can verify that node has been successfully installed by running the following:

```
node -v
npm -v
```

## Install the AWS CLI
We'll use the AWS CLI to configure our AWS access. It's also useful for listing resources within a given AWS account.

This can be installed from the [AWS Website](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

_Note: It's recommended to use the GUI installer rather than the command line installer._

Verify that the installation has been successfull by running the following:

```
which aws
aws --version
```

## Configure AWS Account Access

Before you can programmatically deploy / remove resources from a given AWS account, you need to set up CLI access.

ℹ️ _Ask your workshop facilitator to provide you with a set of temporary credentials._

Once you've obtained a set of temporary security credentials, you can set these as environment variables using the following commands:

```
export AWS_ACCESS_KEY_ID=TemporaryAccessKeyId
export AWS_SECRET_ACCESS_KEY=TemporarySecretAccessKey
export AWS_SESSION_TOKEN=TemporarySessionToken
```

⚠️ You'll need to redo the above step if you open a new terminal.

You can then verify that your credentials are set properly by running the following:

```
aws s3 ls
```

This should list all S3 buckets within the account.

You should also have access to the AWS Management console. Please check with the workshop facilitator for the correct link and login details.

## Install AWS CDK
You can install thr AWS CDK CLI globally using npm:

```
npm install -g aws-cdk
```

Verify the installation by running:

```
cdk --version
```

## Create your project directory
We'll initialise our repo within its own directory (as you can't `cdk init` within a non-empty directory).

From the project root, create a directory with the following naming format:

```
mkdir [your-name]-workshop
```

_Obviously replacing [your-name] with your own name..._

## Checklist
- [ ] Installed Node
- [ ] Installed AWS CLI
- [ ] Gained Account Access (including console)
- [ ] Installed CDK
- [ ] Created Project Directory

Congrats 🍾 You're all set up to begin the workshop.

Go to [Task 1](001-task-1.md)
