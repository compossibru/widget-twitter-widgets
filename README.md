# widget-twitter-widgets
compossibru widget wrapper for [`react-twitter-widgets`](https://github.com/andrewsuzuki/react-twitter-widgets)

## Installation
```
npm install --save @compossibru/widget-twitter-widgets
```

## Configuration
### Via `.compossibrurc`

#### Timeline
```
[...]
Containers:
  main:
    - "@compossibru/widget-twitter-widgets":
        type: Timeline
        options:
          dataSource:
            sourceType: profile
            screenName: internetofshit
          options:
            username: internetofshit
            height: 400
[...]
```

#### Follow
```
[...]
Containers:
  main:
    - "@compossibru/widget-twitter-widgets":
        type: Follow
        options:
          username: internetofshit
[...]
```

## License
[MIT](LICENSE)
