# smuggle
```
some key 1::some value for key 1,,some key 2::another value,,the third key::third value blah blah blah
```
The above snippet is an example of a new data serialization format I call **smuggle**. It aims to provide a simple and uncluttered alternative to the now-ubiquitous JSON and soon-to-be ubiquitous YAML formats. Unlike those other two, it's one-dimensional and is perfect for transferring strings of simple keyed data. In other words, no complex data stuctures, no nesting--just variables.

## Why not just...?
I think like you think. You can always just write your own which uses some arbitrary combination of separators, but what about those times when you cannot control the content of the keys and/or values? What if they conflict with your app? **smuggle** provides escape functionality and will automatically escape the keys and values upon serialization.
