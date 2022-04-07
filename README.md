# GOV.UK Accounts Prototype

A prototype to allow us to test GOV.UK Accounts features in user testing
and within the team.

Note this prototype is forked from the explore-prototype-4.
This is largely a convenience to take advantage of a well designed prototype
header and functionality to allow GOV.UK guidance to appear within the prototype.

Final implementation may differ.

## Link (requires Auth)

- [Current Prototype](https://govuk-accounts-prototype-1.herokuapp.com/)

## Dependencies

Requires `node` v14.

Please note there have been difficulties compiling `node-sass` on node v16. Roll back to
previous stable versions if you are having difficulty building this locally.

### Running the application

To run the application locally you will need to include API_URL environment variable.

`API_URL=http://localhost:3050 npm start`

## Deploys to GOV.UK PaaS

This repository has Github Actions which deploy pull request preview apps to GOV.UK Paas
whenever a pull request is opened or updated. This allows people working on designs to 
easily share early protoypes within the team.

The preview apps are deleted once the pull request is merged or closed, or after 30 days 
if nothing has changed.

### Updating credentials for deployed apps

The username and password for deployed apps are set by secrets saved in this repository.
To update them, go to [the secrets setting page](https://github.com/alphagov/govuk-accounts-explore-prototype-1/settings/secrets/actions) 
and update the values for `USERNAME` and `PASSWORD`.

You'll then need to reload the app so it can pick up the new values. You can do this either 
by pushing a new commit to the branch or finding the most recent deploy action in 
[the list of completed actions](https://github.com/alphagov/govuk-accounts-explore-prototype-1/actions/workflows/deploy-preview.yml) 
and clicking 'Re-run all jobs'.

## Licence

[MIT License](LICENCE)
