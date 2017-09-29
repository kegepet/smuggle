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
As you can see, JSON, when collapsed to a single line, can quickly become a confusing mess: Difficult to write, impossible to read. And the more basic your need, the more evident the clunkiness of its syntax becomes. Take for example a javascript web app which pulls data in from various HTML elements on the page. The data is in JSON format and is embedded into the value of a ```data-example``` custom attribute. Well, with enough of these on your page, it can quickly become unmanageable and difficult to troubleshoot. Compound that by the prospect of having to manually enter that data into each attribute, and you've given yourself a completely unnecessary headache. Unnecessary thanks to **smuggle**. OK, maybe I'm exaggerating a bit, but one thing is not an exaggeration--the simplicity and elegance of the **smuggle** format.

### Why not just...?
I think like you think. You can always just write your own which uses some arbitrary combination of separators, but what about those times when you cannot control the content of the keys and/or values? What if they conflict with your app? **smuggle** provides escape functionality and will automatically escape the keys and values upon serialization. **smuggle** is a convenience. It's here if you need it.

## USAGE
