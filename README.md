# HOWTO:

This is an API for calling minmax and ways of sum

## Running

- clone this repo
- `npm i` to install dependencies
- run `node index.js`

## Min Max

`POST` from `localhost:3001/min_max` with `JSON` body:
```
{ 
"input": [6,2,1,9,7]
}
```

## Ways of Sum

`POST` from `localhost:3001/sum` with `JSON` body:
```
{
	"arr": [12, 3, 1, 9],
	"n": 14
}
```
