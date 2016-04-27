## highlight-search
An angularjs filter for highlighting text in a filtered input string.

> In the controller

```javascript
$scope.inputString = 'Some test text to highlight';

$scope.someString = 'test';
```

> In the view

```html
 <span ng-bind-html="inputString | highlight: someString"></span>
 ```
 
 > In the stylsheet

 .pi-highlighted {
 
}
