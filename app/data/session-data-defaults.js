/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  // Insert values here

 "user-group" : "GOV.UK account", // "Nothing" , "Email updates" or "GOV.UK account"

 "mailinator-email": "govukresearch.inbox1", // comment this out later if required and uncomment other section
/*
 "mailinator-email": "govukresearch.inbox2", // comment this out later if required and uncomment other section
*/
  "get-emails" : "No"

}
