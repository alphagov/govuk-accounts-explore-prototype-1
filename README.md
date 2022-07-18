# GOV.UK Accounts Prototype

A prototype to allow us to test GOV.UK Accounts features in user testing and
within the team.

Note this prototype is forked from the explore-prototype-4. This is largely a
convenience to take advantage of a well designed prototype header and
functionality to allow GOV.UK guidance to appear within the prototype.

Final implementation may differ.

## Link (requires Auth)

- [Current Prototype](https://govuk-accounts-prototype-1.herokuapp.com/)

## Dependencies

Requires `node` v14.

Please note there have been difficulties compiling `node-sass` on node v16.
Roll back to previous stable versions if you are having difficulty building
this locally.

### Running the application

To run the application locally you will need to include API_URL environment
variable.

`API_URL=http://localhost:3050 npm start`

## Deploys to GOV.UK PaaS

This repository has Github Actions which deploy the prototype to GOV.UK PaaS.
These are triggered by two events:

1. When a new release is created
2. When a pull request is opened or updated

### Deploys for a new release

This action runs whenever a [new
release](https://github.com/alphagov/govuk-accounts-explore-prototype-1/releases/new)
is published in Github. It deploys a long lived protoype that is a snapshot of
the repository at the time the release was created. These prototypes aren't
updated or redeployed automatically at any point and are designed to be used in
user research and testing.


### Deploys for a pull request

This action runs whenever a pull request is opened or updated and deploys a
short lived preview app. This allows people working on designs to easily share
early protoypes within or between teams.

The deploys use the git branch name as part of the URL so that each preview app
has a unique URL, which allows multiple branches to be deployed and worked on
at once.

The preview apps are deleted once the pull request is merged or closed, or
after 30 days if nothing has changed.

### Updating credentials for deployed apps

The username and password for deployed apps are set by secrets saved in this
repository. To update them, go to [the secrets setting
page](https://github.com/alphagov/govuk-accounts-explore-prototype-1/settings/secrets/actions)
and update the values for `USERNAME` and `PASSWORD`.

Deployed apps use the `USERNAME` and `PASSWORD` that were set at the time they
were deployed. If you want to update the credentials for an app that's already
deployed, you'll also need to reload the app so it can pick up the new values.
You can do this either by pushing a new commit to the branch or finding the
deploy action in [the list of completed
actions](https://github.com/alphagov/govuk-accounts-explore-prototype-1/actions/workflows/deploy-preview.yml)
for the deploy you want to update and clicking 'Re-run all jobs'.

## Licence

[MIT License](LICENCE)
