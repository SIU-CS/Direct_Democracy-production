# Direct Democracy
An application that will allow users to vote on the actions taken by the president of the United States.

Gregory Brinkman
gregorylucasbrinkman@siu.edu

Ourania Spantidi
ourania.spantidi@siu.edu

DeMarco J. Ewings
demarco.ewings@siu.edu

Chase Melvin
chase.melvin@siu.edu


## How to Direct Democracy
Prerequisites: Your development server's Latest version of nodejs, [NPM](https://www.npmjs.com/), and
[Couchdb v2.0+](https://couchdb.apache.org/)
See common errors for installation of couchdb(CORS enablization and version 2)
## Quick Install
```
git clone https://github.com/SIU-CS/Direct_Democracy-production.git
git checkout staging
npm install
npm start
```
This should get a basic development server running. 
Open a browser and navigate to localhost:8080.

You can monitor all changes in the database through localhost:5984/_utils. 
Once you have node and couchdb set up, set up some bills to vote on by running. This will populate couchdb's 'bills' database.
```
node scripts/titleParsing.js
```
All the database responses are visible through console (ctrl+shift+c from Google Chrome).

## Common Errors
* [Node path issue, no packages are installed](http://stackoverflow.com/questions/18130164/nodejs-vs-node-on-ubuntu-12-04
)

Error Message looks like this:
```
npm ERR! Linux 4.4.0-77-generic
npm ERR! argv "/usr/bin/nodejs" "/usr/bin/npm" "install"
npm ERR! node v4.2.6
npm ERR! npm v3.5.2
npm ERR! file sh
npm ERR! code ELIFECYCLE
npm ERR! errno ENOENT
npm ERR! syscall spawn
```

This is an issue with node's path not being set, or being set incorrectly.
You need to manually create a symlink /usr/bin/node. Shortcut for bash compatible shells:

```sudo ln -s `which nodejs` /usr/bin/node```

Or if you use non-standard shells, just hardcode the path you find with which nodejs:

```sudo ln -s /usr/bin/nodejs /usr/bin/node```

* Module not found during 'npm start'

Error Message Looks like this:
```
ERROR in ./src/redux/actions.js Module not found: Error: Cannot resolve module 'react-router-redux'
```

Oops! We used an npm package that didn't get automatically saved to our package.json. just `npm install 'module'` to resolve the error.

* [CORS is not enabled on local development server](https://github.com/pouchdb/add-cors-to-couchdb)

Error Message Looks like this:
```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https:localhost
```
CORS must be enabled for data to be transmitted between ports on localhost By default, this is off in Couchdb for security.

```
npm install -g add-cors-to-couchdb
add-cors-to-couchdb
```

* BadRequest, ReferHeader
Error message looks like this:
```
{"error":"bad_request","reason":"Referer header must match host."}
```

Make sure couchdb version 2.0+ is installed.

#### Happy hacking!
