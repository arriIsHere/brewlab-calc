workflow "PublishNPM" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run build:dist"
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["build"]
  secrets = ["NPM_AUTH_TOKEN"]
}
