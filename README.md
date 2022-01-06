# what-is-today

![Licence](https://img.shields.io/npm/l/what-is-today?style=for-the-badge)
![NPM](https://img.shields.io/npm/v/what-is-today?style=for-the-badge)

Lightweight and no dependencies package to check what day is today.

Bundle size: 500B minified, 306B minified + gzipped\
[Bundlephobia link](https://bundlephobia.com/package/what-is-today@1.0.4)

## Documentation
```
import { isToday } from 'what-is-today';

isToday('Tuesday'); // returns true/false
```

The day is not case sensitive an you could also pass 'TUESDAY' or 'tuesday'.\
If you don't pass a valid day, it will return the string `No valid day was given.`

```
import { todayIs } from 'what-is-today';

todayIs(); // returns tuesday (or whatever the day is)
```

JSX:
```
{isToday('Wednesday') ? 'I should work' : 'Get some rest!'}
```
## Contributing

Contributions are always welcome!

## Authors

[@tpliakas](https://www.github.com/tpliakas)