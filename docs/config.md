---
title: Configuration
description: Learn how to configure the Lando Ruby service.
---

# Configuration

Here are the configuration options, set to the default values, for this service. If you are unsure about where this goes or what this means, we *highly recommend* scanning the [services documentation](https://docs.lando.dev/core/v3/services/lando.html) to get a good handle on how the magicks work.

Also note that the options, in addition to the [build steps](https://docs.lando.dev/core/v3/services/lando.html#build-steps) and [overrides](https://docs.lando.dev/core/v3/services/lando.html#overrides) that are available to every service, are shown below:

```yaml
services:
  myservice:
    type: ruby:3.4
    port: 80
    command: tail -f /dev/null
```

## Specifying a command

Note that if you *do not* define a `command` for this service, it will effectively be a "cli" container (e.g. it will not serve or run an application by default but will be available to run `ruby` commands against).

If you want to actually launch a `ruby` application, consider setting the `command` to something as shown below:

```yaml
services:
  myservice:
    type: ruby
    command: ruby /app/my-server.rb
```

## Setting a port

While we assume your `ruby` service is running on port `80`, we recognize that many `ruby` apps also run on port `8080` or otherwise. You can easily change our default to match whatever your app needs.

```yaml
services:
  myservice:
    type: ruby
    port: 8080
```

## Adding tooling commands

By default a service will not do any tooling routing for you but you can add helpful `lando` commands.

```yaml
tooling:
  donet:
    service: myservice
```

You can then invoke them on the command line.

```bash
lando dotnet
```

Lando tooling is actually pretty powerful so definitely check out [the rest](https://docs.lando.dev/core/v3/tooling.html) of its cool features.

## Adding routing

By default a service will not do any proxy routing for you but you can add your own.

```yaml
proxy:
  myservice:
    - myapp.lndo.site
    - something.else.local
```

Lando proxying is actually pretty powerful so definitely check out [the rest](https://docs.lando.dev/core/v3/proxy.html) of its cool features.
