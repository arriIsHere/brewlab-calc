workflow "PublishNPM" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run build:dist"
  needs = ["install"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm publish"
  needs = ["build"]
  secrets = ["NPM_AUTH_TOKEN"]
}
