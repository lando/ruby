Ruby Example
============

This example exists primarily to test the following documentation:

* [Ruby Service](https://docs.devwithlando.io/tutorials/ruby.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should start up successfully
lando poweroff
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should use 1.9.x as the default version
lando ssh -s defaults -c "ruby --version | grep 1.9."
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
