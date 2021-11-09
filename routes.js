const router = require("express").Router();

router.post("/min_max", minMaxHandler);
router.post("/sum", sumHandler);

module.exports = router;

async function minMaxHandler(req, res) {
  return res.status(200).send(getMaxMin(req.body.input));
}

async function sumHandler(req, res) {
  const input = req.body;
  return res.status(200).send(countWayOfSum(input.n, input.arr));
}

function getMaxMin(array) {
  const unique = [...new Set(array)];
  const sorted = unique.sort();

  const min = ((x) => {
    x.shift();
    return x.reduce((partial_sum, a) => partial_sum + a, 0);
  })(sorted.slice(0));

  const max = ((x) => {
    x.pop();
    return x.reduce((partial_sum, a) => partial_sum + a, 0);
  })(sorted.slice(0));
  return { min, max };
}

function countWayOfSum(n, array) {
  let count = new Array(n + 1);
  count.fill(0);
  count[0] = 1;

  for (let i = 1; i <= n; i++)
    for (let j = 0; j < array.length; j++)
      if (i >= array[j]) count[i] += count[i - array[j]];
  return { ways: count[n] };
}
