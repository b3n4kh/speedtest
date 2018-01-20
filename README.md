# HTML5 Speedtest

No Flash, No Java, No Websocket, No Php, No Bullshit.

This is a very lightweight Speedtest implemented in Javascript, using XMLHttpRequest and Web Workers.

## Changelog

This version differs to the Original from `adolfintel` in two Major ways.
1. All PHP support is removed
2. A Cookie is Added to cache the result

An example nginx configuration to use this version is added to `nginx/speedtest.conf`

## Compatibility
Only modern browsers are supported (IE11, latest Edge, latest Chrome, latest Firefox, latest Safari)

## Features
* Download
* Upload
* Ping
* Jitter
* IP Address

## Requirements
 - Either Nginx or Docker

## How to use in your site
See the examples or doc.md

## Docker

Speedtest will be available at via http on Port 80

```
# Either with docker-compose 
$ docker-compose build
$ docker-compose up

# Or directly via Docker
$ docker build -t b3n4kh/speedtest:latest .
$ docker run -d --name  speedtest -p 0.0.0.0:80:80 b3n4kh/speedtest:latest
```

## License
Copyright Benjamin Akhras, 2018

Copyright for portions of this project are held by [ Federico Dossena, 2016 - 2017 ]

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/lgpl>.
