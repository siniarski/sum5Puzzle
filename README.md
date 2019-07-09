# sum5Puzzle

## Problem

- a,b,c,d,e is an integer from 0 to 1000, no relation between a, b, c, d, e so a can equal to b or c, ...
- can not use more than 3 loops (it can be 3 nested loop or 3 normal loop, or 2 nested loop + 1 normal loop, ...)
- you need to find all the answers for (a, b, c, d, e) where:
  `a + b + c + d + e = 1000`

## Approach

Treat the problem where each field is a digit in a larger number where the base is 1000. Count up through each digit and carry if you ever hit the max. (There would be 1000^5 combinations to check though).

Folder `n` has an implementation that handles n number of fields and dynamically set min,max,targetSums. Note this uses multiple loops to iterate through the fields (`Object.entries` and `.reduce` both use loops). (1 while loop with multiple 1 depth nested loops inside)

Folder `5 fields` uses an implemntation based of the `n` solution but instead of looping through each field we check each field individually. (1 while loop)

## How to run

```bash
node n
```

```bash
node 5\ fields
```

## Authors

_**Mateusz Siniarski**_

## Inspiration

[stackoverflow Question](https://stackoverflow.com/questions/56928516/find-all-a-b-c-d-e-such-that-a-b-c-d-e-1000-with-no-more-than-3-l)
