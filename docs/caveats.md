---
title: Caveats
description: Learn about caveats and known issues with the Lando Ruby service.
---

# Caveats

## Path Considerations

Lando will set the `PATH` hierarchy for this service as follows:
```js
[
  '/usr/local/sbin',
  '/usr/local/bin',
  '/usr/local/bundle/bin',
  '/usr/sbin',
  '/usr/bin',
  '/sbin',
  '/bin',
]
```

This is useful to note if you are not using absolute paths in any [tooling routes](https://docs.lando.dev/landofile/tooling.html) and are getting the unexpected version of a particular utility.
