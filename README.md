# Test-yandex

Simple javascript app, that 
	+takes two arguments
	+creates and logs random initial state that simulate virtual board
	+sets and logs new conditionaly state every seconds

## Running localy

Make sure you have [Node.js][1]

[1] : https://nodejs.org/en/ "Node.js"
 
 ```
 	git clone https://github.com/undefinded-user/Test-yandex.git
 	cd Test-yandex
 	node index.js m n
 ```
m and n - your argument that equal hide and width of your virtual board

## Example 
```
 	node index.js 5 5
```
 	output:
```
 	[
	  [ 1, 0, 0, 1, 0 ],
	  [ 0, 0, 1, 0, 1 ],
	  [ 0, 1, 1, 0, 0 ],
	  [ 1, 0, 1, 0, 0 ],
	  [ 0, 0, 0, 0, 1 ]
	]
```
every second new state
```
	[
	  [ 0, 0, 0, 1, 0 ],
	  [ 0, 1, 0, 1, 1 ],
	  [ 1, 0, 1, 0, 0 ],
	  [ 0, 1, 1, 1, 0 ],
	  [ 0, 0, 1, 0, 0 ]
	]
```

