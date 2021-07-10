<h2>League Ladies App</h2>
<h3>Start Client</h3>
<p>Setup node environment</p>

```bat
npm install
npm run
```

<h3>Start Server</h3>
<p>Setup python environment</p>

```bat
python3 -m venv dev-env # whatever name you want, make sure to add to .git/info/exclude to avoid versioning
source dev-env/bin/activate
```
<p>Ask Reshav for the django secret key</p>

```bat
export SERVER_SECRET=""
python3 manage.py runserver
```