workflow "PublishNPM" {
  resolves = [
    "publish",
    "GitHub Action for npm-3",
  ]
  on = "release"
}

action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run build"
  needs = ["install"]
}

action "rcfile" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "mv .npmrc.ci .npmrc"
  needs = ["build"]
}

action "copyfiles" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "bash -c"
  args = ["cp * .* dist/ 2>/dev/null || :"]
  needs = [
    "rcfile",
    "GitHub Action for npm-3",
  ]
}

action "publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm publish dist/ --access public"
  needs = ["copyfiles"]
  secrets = ["NPM_AUTH_TOKEN"]
}

workflow "Pull Request Test" {
  on = "pull_request"
  resolves = ["GitHub Action for npm-2"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["GitHub Action for npm"]
  args = "run build"
}

action "GitHub Action for npm-2" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["GitHub Action for npm-1"]
  args = "run test:ci"
}

action "GitHub Action for npm-3" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["build"]
  args = "run test:ci"
}
