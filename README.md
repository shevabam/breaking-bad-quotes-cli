# Breaking Bad Quotes Cli

> Get a random quote from Breaking Bad in your terminal!


*This project is based on the [Breaking Bad Quotes API](https://github.com/shevabam/breaking-bad-quotes).*



## Requirements

- [NodeJS](https://nodejs.org/)

## Install

```
npm install -g breaking-bad-quotes-cli
```

## Usage

```
$ breaking-bad-quotes --help

  Get a random quote from Breaking Bad in your terminal!

  Usage
      $ breaking-bad-quotes [options]

  Options
      --number    Set number of quotes returned (default: 1)

  Examples
      $ breaking-bad-quotes
      I'm not in the meth business. I'm in the empire business. - Walter White

      $ breaking-bad-quotes --number 3
      I'm not in the meth business. I'm in the empire business. - Walter White
      Shut the f*ck up and let me die in peace. - Mike Ehrmantraut
      Yeah, bitch! Magnets! - Jesse Pinkman
```

Just type in your terminal:

```
breaking-bad-quotes
```

You can display more than one quote with `--number` parameter:

```
breaking-bad-quotes --number 5
```


Have fun ;)