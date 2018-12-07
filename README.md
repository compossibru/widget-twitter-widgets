# widget-twitter-widgets
<a href="https://www.npmjs.com/package/@compossibru/widget-twitter-widgets">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/@compossibru/widget-twitter-widgets/latest.svg">
</a>
<a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
</a>

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
