workflow "PublishNPM" {
  resolves = [
    "test",
    "copyfiles",
    "Publish",
  ]
  on = "push"
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

action "test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["build"]
  args = "run test:ci"
  secrets = ["NPM_AUTH_TOKEN"]
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
  args = "run test:ci"
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  needs = ["copyfiles"]
  args = "branch master"
}

action "Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Filters for GitHub Actions"]
  args = "publish dist/ --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
