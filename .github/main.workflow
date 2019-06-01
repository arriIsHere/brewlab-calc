workflow "PublishNPM" {
  resolves = [
    "publish",
    "test",
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
    "test",
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
  resolves = ["pr-test"]
}

action "test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["build"]
  args = "run test:ci"
}

action "pr-install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "pr-build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["pr-install"]
  args = "run build"
}

action "pr-test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["pr-build"]
}
