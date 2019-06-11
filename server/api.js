const router = require("koa-router")({ prefix: "/api" });
const goods = [
  { id: 1, text: "豪车", price: 10000 },
  { id: 2, text: "豪宅", price: 50000 },
  { id: 3, text: "美女", price: 25000 }
];


// { prefix: "/api" } => /api/goods
router.get("/goods", ctx => {
  ctx.body = {
    ok: 1,
    goods
  };
});
router.get("/detail", ctx => {
  ctx.body = {
    ok: 1,
    data: goods.find(good => good.id == ctx.query.id)
  };
});
router.post("/login", ctx => {
  const user = ctx.request.body;
  if (user.username === "admin" && user.password === "l123456") {
    // 将token存入cookie 为什么？
    const token = 'a mock token';
    ctx.cookies.set('token', token);
    ctx.body = { ok: 1, token };
  } else {
    ctx.body = { ok: 0 };
  }
});

module.exports = router;