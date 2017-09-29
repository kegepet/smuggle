# smuggle
```
some key 1::some value for key 1,,some key 2::another value,,the third key::third value blah blah blah
```
The above snippet is an example of a new data serialization format I call **smuggle**. It aims to provide a simple and uncluttered alternative to the now-ubiquitous JSON and soon-to-be ubiquitous YAML formats. Unlike those other two, it's one-dimensional and is perfect for transferring strings of simple keyed data. In other words, no complex data stuctures, no nesting--just variables.
### How?
**smuggle** uses a ```::``` (double colon) to separate key from value, and your choice of either a ```,,``` (double comma) or ```;;``` (double semicolon) to separate key/value pairs. The thinking here is that these particular separators are unlikely to appear in normal data. When was the last time you saw a double comma? By doubling them, **smuggle** makes it unlikely that anything will need to be escaped, and therefore, manually inputting data in the **smuggle** format is fast and *relatively* seamless.
### Why?
**Inline JSON example** 
```
'{"some key 1":"some value for key 1","some key 2":"another value","the third key":"third value blah blah blah"}'
```
As you can see, JSON can quickly become a confusing mess: difficult to write, impossible to read. This became evident to me time and time again when I would have to pass a simple set of either dynamically generated, or--gulp--manually entered, variables into a web application. Only after repeated errors by the JSON parser did I get everything to work without error. OK, maybe I'm exaggerating a bit, but one thing is not an exaggeration--the simplicity and elegance of the **smuggle** format.

### Why not just...?
I think like you think. You can always just write your own which uses some arbitrary combination of separators, but what about those times when you cannot control the content of the keys and/or values? What if they conflict with your app? **smuggle** provides escape functionality and will automatically escape the keys and values upon serialization. **smuggle** is a convenience. It's here if you need it.

## USAGE
